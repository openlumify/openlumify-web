var parser = require('./parsers/parser');
var refiner = require('./refiners/refiner');

function baseOption(strictMode) {

    return {
        parsers: [
        
            // EN
            new parser.ENISOFormatParser(strictMode),
            new parser.ENDeadlineFormatParser(strictMode),
            new parser.ENMonthNameLittleEndianParser(strictMode),
            new parser.ENMonthNameMiddleEndianParser(strictMode),
            new parser.ENSlashDateFormatParser(strictMode),
            new parser.ENSlashDateFormatStartWithYearParser(strictMode),
            new parser.ENTimeAgoFormatParser(strictMode),           
            new parser.ENTimeExpessionParser(strictMode),

            // JP
            new parser.JPStandardParser(strictMode),
        ],

        refiners: [
            // Removing overlaping first
            new refiner.OverlapRemovalRefiner(),
            
            // ETC
            new refiner.ENMergeDateTimeRefiner(),
            new refiner.ENMergeDateRangeRefiner(),
            new refiner.JPMergeDateRangeRefiner(),

            // Extract additional info later
            new refiner.ExtractTimezoneOffsetRefiner(),
            new refiner.ExtractTimezoneAbbrRefiner(),
            new refiner.UnlikelyFormatFilter()
        ]
    }
}



exports.strictOption = function () {
    return baseOption(true);
};


exports.casualOption = function () {

    var options = baseOption(false);
    
    // EN
    options.parsers.unshift(new parser.ENCasualDateParser());
    options.parsers.unshift(new parser.ENWeekdayParser());

    // JP
    options.parsers.unshift(new parser.JPCasualDateParser());
    
    return options;
};
