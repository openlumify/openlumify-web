define(
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = {
      circles: function() {
        var background, circles, complement, fill, id, radius, size, stroke, strokeWidth;
        size = 20;
        background = "";
        radius = 2;
        complement = false;
        fill = "#343434";
        stroke = "#343434";
        strokeWidth = 0;
        id = rand();
        circles = function() {
          var corner, g, i, len, ref, results;
          g = this.append("defs").append("pattern").attr({
            id: id,
            patternUnits: "userSpaceOnUse",
            width: size,
            height: size
          });
          if (background) {
            g.append("rect").attr({
              width: size,
              height: size,
              fill: background
            });
          }
          g.append("circle").attr({
            cx: size / 2,
            cy: size / 2,
            r: radius,
            fill: fill,
            stroke: stroke,
            "stroke-width": strokeWidth
          });
          if (complement) {
            ref = [[0, 0], [0, size], [size, 0], [size, size]];
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              corner = ref[i];
              results.push(g.append("circle").attr({
                cx: corner[0],
                cy: corner[1],
                r: radius,
                fill: fill,
                stroke: stroke,
                "stroke-width": strokeWidth
              }));
            }
            return results;
          }
        };
        circles.heavier = function(_) {
          if (!arguments.length) {
            radius = radius * 2;
          } else {
            radius = _ ? radius * 2 * _ : radius * 2;
          }
          return circles;
        };
        circles.lighter = function(_) {
          if (!arguments.length) {
            radius = radius / 2;
          } else {
            radius = _ ? radius / (2 * _) : radius / 2;
          }
          return circles;
        };
        circles.thinner = function(_) {
          if (!arguments.length) {
            size = size * 2;
          } else {
            size = _ ? size * 2 * _ : size * 2;
          }
          return circles;
        };
        circles.thicker = function(_) {
          if (!arguments.length) {
            size = size / 2;
          } else {
            size = _ ? size / (2 * _) : size / 2;
          }
          return circles;
        };
        circles.background = function(_) {
          background = _;
          return circles;
        };
        circles.size = function(_) {
          size = _;
          return circles;
        };
        circles.complement = function() {
          complement = true;
          return circles;
        };
        circles.radius = function(_) {
          radius = _;
          return circles;
        };
        circles.fill = function(_) {
          fill = _;
          return circles;
        };
        circles.stroke = function(_) {
          stroke = _;
          return circles;
        };
        circles.strokeWidth = function(_) {
          strokeWidth = _;
          return circles;
        };
        circles.id = function(_) {
          if (!arguments.length) {
            return id;
          } else {
            id = _;
            return circles;
          }
        };
        circles.url = function() {
          return "url(#" + id + ")";
        };
        return circles;
      },
      lines: function() {
        var background, id, lines, orientation, path, shapeRendering, size, stroke, strokeWidth;
        size = 20;
        strokeWidth = 2;
        stroke = "#343434";
        id = rand();
        background = "";
        orientation = ["diagonal"];
        shapeRendering = "auto";
        path = function(orientation) {
          switch (orientation) {
            case "0/8":
              return (function(s) {
                return "M " + (s / 2) + ", 0 l 0, " + s;
              })(size);
            case "vertical":
              return (function(s) {
                return "M " + (s / 2) + ", 0 l 0, " + s;
              })(size);
            case "1/8":
              return (function(s) {
                return "M " + (s / 4) + ",0 l " + (s / 2) + "," + s + " M " + (-s / 4) + ",0 l " + (s / 2) + "," + s + "\nM " + (s * 3 / 4) + ",0 l " + (s / 2) + "," + s;
              })(size);
            case "2/8":
              return (function(s) {
                return "M 0," + s + " l " + s + "," + (-s) + " M " + (-s / 4) + "," + (s / 4) + " l " + (s / 2) + "," + (-s / 2) + "\nM " + (3 / 4 * s) + "," + (5 / 4 * s) + " l " + (s / 2) + "," + (-s / 2);
              })(size);
            case "diagonal":
              return (function(s) {
                return "M 0," + s + " l " + s + "," + (-s) + " M " + (-s / 4) + "," + (s / 4) + " l " + (s / 2) + "," + (-s / 2) + "\nM " + (3 / 4 * s) + "," + (5 / 4 * s) + " l " + (s / 2) + "," + (-s / 2);
              })(size);
            case "3/8":
              return (function(s) {
                return "M 0," + (3 / 4 * s) + " l " + s + "," + (-s / 2) + " M 0," + (s / 4) + " l " + s + "," + (-s / 2) + "\nM 0," + (s * 5 / 4) + " l " + s + "," + (-s / 2);
              })(size);
            case "4/8":
              return (function(s) {
                return "M 0," + (s / 2) + " l " + s + ",0";
              })(size);
            case "horizontal":
              return (function(s) {
                return "M 0," + (s / 2) + " l " + s + ",0";
              })(size);
            case "5/8":
              return (function(s) {
                return "M 0," + (-s / 4) + " l " + s + "," + (s / 2) + "M 0," + (s / 4) + " l " + s + "," + (s / 2) + "\nM 0," + (s * 3 / 4) + " l " + s + "," + (s / 2);
              })(size);
            case "6/8":
              return (function(s) {
                return "M 0,0 l " + s + "," + s + " M " + (-s / 4) + "," + (3 / 4 * s) + " l " + (s / 2) + "," + (s / 2) + "\nM " + (s * 3 / 4) + "," + (-s / 4) + " l " + (s / 2) + "," + (s / 2);
              })(size);
            case "7/8":
              return (function(s) {
                return "M " + (-s / 4) + ",0 l " + (s / 2) + "," + s + " M " + (s / 4) + ",0 l " + (s / 2) + "," + s + "\nM " + (s * 3 / 4) + ",0 l " + (s / 2) + "," + s;
              })(size);
            default:
              return (function(s) {
                return "M " + (s / 2) + ", 0 l 0, " + s;
              })(size);
          }
        };
        lines = function() {
          var g, i, len, o, results;
          g = this.append("defs").append("pattern").attr({
            id: id,
            patternUnits: "userSpaceOnUse",
            width: size,
            height: size
          });
          if (background) {
            g.append("rect").attr({
              width: size,
              height: size,
              fill: background
            });
          }
          results = [];
          for (i = 0, len = orientation.length; i < len; i++) {
            o = orientation[i];
            results.push(g.append("path").attr({
              d: path(o),
              "stroke-width": strokeWidth,
              "shape-rendering": shapeRendering,
              stroke: stroke,
              "stroke-linecap": "square"
            }));
          }
          return results;
        };
        lines.background = function(_) {
          background = _;
          return lines;
        };
        lines.shapeRendering = function(_) {
          shapeRendering = _;
          return lines;
        };
        lines.heavier = function(_) {
          if (!arguments.length) {
            strokeWidth = strokeWidth * 2;
          } else {
            strokeWidth = _ ? strokeWidth * 2 * _ : strokeWidth * 2;
          }
          return lines;
        };
        lines.lighter = function(_) {
          if (!arguments.length) {
            strokeWidth = strokeWidth / 2;
          } else {
            strokeWidth = _ ? strokeWidth / (2 * _) : strokeWidth / 2;
          }
          return lines;
        };
        lines.thinner = function(_) {
          if (!arguments.length) {
            size = size * 2;
          } else {
            size = _ ? size * 2 * _ : size * 2;
          }
          return lines;
        };
        lines.thicker = function(_) {
          if (!arguments.length) {
            size = size / 2;
          } else {
            size = _ ? size / (2 * _) : size / 2;
          }
          return lines;
        };
        lines.orientation = function() {
          var args;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          orientation = args;
          return lines;
        };
        lines.size = function(_) {
          size = _;
          return lines;
        };
        lines.stroke = function(_) {
          stroke = _;
          return lines;
        };
        lines.strokeWidth = function(_) {
          strokeWidth = _;
          return lines;
        };
        lines.id = function(_) {
          if (!arguments.length) {
            return id;
          } else {
            id = _;
            return lines;
          }
        };
        lines.url = function() {
          return "url(#" + id + ")";
        };
        return lines;
      },
      paths: function() {
        var background, d, fill, height, id, paths, shapeRendering, size, stroke, strokeWidth, svgPath, width;
        size = 20;
        height = 1;
        width = 1;
        strokeWidth = 2;
        stroke = "#343434";
        background = "";
        d = "";
        shapeRendering = "auto";
        fill = "transparent";
        id = void 0;
        svgPath = function(_) {
          switch (_) {
            case "squares":
              return (function(s) {
                return "M " + (s / 4) + " " + (s / 4) + " l " + (s / 2) + " 0 l 0 " + (s / 2) + " l " + (-s / 2) + " 0 Z";
              })(size);
            case "nylon":
              return (function(s) {
                return "M 0 " + (s / 4) + " l " + (s / 4) + " 0 l 0 " + (-s / 4) + " M " + (s * 3 / 4) + " " + s + " l 0 " + (-s / 4) + "\nl " + (s / 4) + " 0 M " + (s / 4) + " " + (s / 2) + " l 0 " + (s / 4) + " l " + (s / 4) + " 0 M " + (s / 2) + " " + (s / 4) + "\nl " + (s / 4) + " 0 l 0 " + (s / 4);
              })(size);
            case "waves":
              return (function(s) {
                return "M 0 " + (s / 2) + " c " + (s / 8) + " " + (-s / 4) + " , " + (s * 3 / 8) + " " + (-s / 4) + " , " + (s / 2) + " 0\nc " + (s / 8) + " " + (s / 4) + " , " + (s * 3 / 8) + " " + (s / 4) + " , " + (s / 2) + " 0 M " + (-s / 2) + " " + (s / 2) + "\nc " + (s / 8) + " " + (s / 4) + " , " + (s * 3 / 8) + " " + (s / 4) + " , " + (s / 2) + " 0 M " + s + " " + (s / 2) + "\nc " + (s / 8) + " " + (-s / 4) + " , " + (s * 3 / 8) + " " + (-s / 4) + " , " + (s / 2) + " 0";
              })(size);
            case "woven":
              return (function(s) {
                return "M " + (s / 4) + "," + (s / 4) + "l" + (s / 2) + "," + (s / 2) + "M" + (s * 3 / 4) + "," + (s / 4) + "l" + (s / 2) + "," + (-s / 2) + "\nM" + (s / 4) + "," + (s * 3 / 4) + "l" + (-s / 2) + "," + (s / 2) + "M" + (s * 3 / 4) + "," + (s * 5 / 4) + "l" + (s / 2) + "," + (-s / 2) + "\nM" + (-s / 4) + "," + (s / 4) + "l" + (s / 2) + "," + (-s / 2);
              })(size);
            case "crosses":
              return (function(s) {
                return "M " + (s / 4) + "," + (s / 4) + "l" + (s / 2) + "," + (s / 2) + "M" + (s / 4) + "," + (s * 3 / 4) + "l" + (s / 2) + "," + (-s / 2);
              })(size);
            case "caps":
              return (function(s) {
                return "M " + (s / 4) + "," + (s * 3 / 4) + "l" + (s / 4) + "," + (-s / 2) + "l" + (s / 4) + "," + (s / 2);
              })(size);
            case "hexagons":
              return (function(s) {
                width = 3;
                height = Math.sqrt(3);
                return "M " + s + ",0 l " + s + ",0 l " + (s / 2) + "," + (s * Math.sqrt(3) / 2) + "\nl " + (-s / 2) + "," + (s * Math.sqrt(3) / 2) + " l " + (-s) + ",0\nl " + (-s / 2) + "," + (-s * Math.sqrt(3) / 2) + " Z M 0," + (s * Math.sqrt(3) / 2) + "\nl " + (s / 2) + ",0 M " + (3 * s) + "," + (s * Math.sqrt(3) / 2) + " l " + (-s / 2) + ",0";
              })(size);
            default:
              return _(size);
          }
        };
        paths = function() {
          var g, path;
          path = svgPath(d);
          id = rand();
          g = this.append("defs").append("pattern").attr({
            id: id,
            patternUnits: "userSpaceOnUse",
            width: size * width,
            height: size * height
          });
          if (background) {
            g.append("rect").attr({
              width: size * width,
              height: size * height,
              fill: background
            });
          }
          return g.append("path").attr({
            d: path,
            fill: fill,
            "stroke-width": strokeWidth,
            "shape-rendering": shapeRendering,
            stroke: stroke,
            "stroke-linecap": "square"
          });
        };
        paths.background = function(_) {
          background = _;
          return paths;
        };
        paths.shapeRendering = function(_) {
          shapeRendering = _;
          return paths;
        };
        paths.heavier = function(_) {
          if (!arguments.length) {
            strokeWidth = strokeWidth * 2;
          } else {
            strokeWidth = _ ? strokeWidth * 2 * _ : strokeWidth * 2;
          }
          return paths;
        };
        paths.lighter = function(_) {
          if (!arguments.length) {
            strokeWidth = strokeWidth / 2;
          } else {
            strokeWidth = _ ? strokeWidth / (2 * _) : strokeWidth / 2;
          }
          return paths;
        };
        paths.thinner = function(_) {
          if (!arguments.length) {
            size = size * 2;
          } else {
            size = _ ? size * 2 * _ : size * 2;
          }
          return paths;
        };
        paths.thicker = function(_) {
          if (!arguments.length) {
            size = size / 2;
          } else {
            size = _ ? size / (2 * _) : size / 2;
          }
          return paths;
        };
        paths.d = function(_) {
          d = _;
          return paths;
        };
        paths.size = function(_) {
          size = _;
          return paths;
        };
        paths.stroke = function(_) {
          stroke = _;
          return paths;
        };
        paths.strokeWidth = function(_) {
          strokeWidth = _;
          return paths;
        };
        paths.id = function(_) {
          if (!arguments.length) {
            return id;
          } else {
            id = _;
            return paths;
          }
        };
        paths.url = function() {
          return "url(#" + id + ")";
        };
        return paths;
      }
    };
  });