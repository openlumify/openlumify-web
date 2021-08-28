var escodegen = require('escodegen')

exports.astNodeVisitor = {
    visitNode: function(node, e, parser, currentSourceName) {

        // Find all registry.documentExtensionPoint calls and extract the
        // description, validator function automatically

        if (node.type === 'CallExpression' &&
            node.callee.property &&
            node.callee.property.name === 'documentExtensionPoint') {

            const { arguments } = node;
            const point = arguments[0].value;
            const description = arguments[1].value;
            const validatorFn = getValidatorFn(arguments[2])
            const optionsOrUrl = arguments[3];
            var tutorial = null;

            if (!point) {
                throw new Error('Requires literal extension point name: ' + currentSourceName + ': ' + node.loc.start.line);
            }
            if (!description) {
                throw new Error('Description parameter (2) must be single string: ' + currentSourceName + ': ' + node.loc.start.line);
            }
            if (optionsOrUrl) {
                if (optionsOrUrl.value) {
                    tutorial = optionsOrUrl.value;
                } else if (optionsOrUrl.type === 'ObjectExpression' && optionsOrUrl.properties) {
                    optionsOrUrl.properties.forEach(p => {
                        if (p.key && p.key.name === 'url') {
                            if (p.value && p.value.value) {
                                tutorial = p.value.value;
                            }
                        }
                    })
                }
            }
            if (tutorial) {
                tutorial = `@tutorial ${tutorial}`
            } else {
                tutorial = ''
            }

            var prefix = '';
            if (node.leadingComments && node.leadingComments.length) {
                var last = node.leadingComments[node.leadingComments.length - 1];
                prefix = last.value;
            } else {
                console.warn("No documentation comment above extension point", point)
            }

            e.event = 'jsdocCommentFound';
            e.comment = `/**
 ${prefix}
 * @classdesc ${description}
 * @extensionpoint ${point}
 * ${tutorial}
 * @validator
 * ${validatorFn || '// Unable to interpret validator function'}
 */`;
            e.filename = currentSourceName;
            e.lineno = node.loc.start.line;
        }
    }
};

exports.defineTags = function(dictionary) {
    dictionary.defineTag("flight", {
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            if (tag.value) {
                doclet.classdesc = tag.value
            }
            (doclet.mixes || (doclet.mixes = [])).push('FlightComponent')
            doclet.componentType = 'flight'
        }
    });
    dictionary.defineTag("react", {
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            if (tag.value) {
                doclet.classdesc = tag.value
            }
            (doclet.mixes || (doclet.mixes = [])).push('ReactComponent')
            doclet.componentType = 'react'
        }
    });
    dictionary.defineTag("extensionpoint", {
        mustHaveValue: true,
        mustNotHaveDescription: true,
        canHaveType: false,
        canHaveName: true,
        onTagged: function(doclet, tag) {
            doclet.kind = 'class'
            doclet.isExtension = true
            if (!doclet.name) {
                doclet.name = tag.value.name
            }
            (doclet.see || (doclet.see = [])).push('module:registry')
            //doclet.extensionpoints = doclet.extensionpoints || [];
            //doclet.extensionpoints.push(tag.value);
        }
    });
    dictionary.defineTag("validator", {
        keepsWhitespace: true,
        removesIndent: true,
        mustHaveValue: true,
        onTagged: function(doclet, tag) {
            doclet.validator = tag.value
        }
    }),
    dictionary.defineTag("attr", {
        mustHaveValue: true,
        canHaveType: true,
        canHaveName: true,
        onTagged: function(doclet, tag) {
            doclet.attrs = doclet.attrs || [];
            doclet.attrs.push(tag.value);
        }
    })
};


function getValidatorFn(validator) {
    var validatorFn;

    // Rename function name
    if (!validator.id) {
        validator.id = {};
    }
    validator.id.name = 'extensionValidator'

    try {
        validatorFn = escodegen.generate(validator);
    } catch (e) {
        console.error('Unable to generate code from AST' + e)
    }
    return validatorFn;
}
