define([
    'util/formatters',
    'moment-timezone',
    'bootstrap-datepicker'
], function(f, moment) {

    var originalError = console.error;

    describe('formatters', function() {

        beforeEach(function() {
            console.error = sinon.spy()
            f.date.resetToDefaultDateFormat()
        })

        afterEach(function() {
            console.error = originalError
        })

        describe('for numbers', function() {

            it('should have pretty function', function() {
                expect(f.number.pretty(0)).to.equal('0');
                expect(f.number.pretty(1)).to.equal('1');
                expect(f.number.pretty(1321)).to.equal('1,321');
                expect(f.number.pretty(12321)).to.equal('12,321');

                expect(f.number.pretty(1123456)).to.equal('1,123,456');
                expect(f.number.pretty(1123456789)).to.equal('1,123,456,789');
                expect(f.number.pretty(1111123456789)).to.equal('1,111,123,456,789');
                expect(f.number.pretty(1111111123456789)).to.equal('1,111,111,123,456,789');

                expect(f.number.pretty(-1111111123456789)).to.equal('-1,111,111,123,456,789');
            })

            it('should have prettyApproximate function', function() {
                expect(f.number.prettyApproximate(0)).to.equal('0');
                expect(f.number.prettyApproximate(1)).to.equal('1');
                expect(f.number.prettyApproximate(-1)).to.equal('-1');

                expect(f.number.prettyApproximate(1024)).to.equal('1numbers.thousand_suffix');
                expect(f.number.prettyApproximate(1100)).to.equal('1.1numbers.thousand_suffix');
                expect(f.number.prettyApproximate(1150)).to.equal('1.2numbers.thousand_suffix');
                expect(f.number.prettyApproximate(-1150)).to.equal('-1.2numbers.thousand_suffix');

                expect(f.number.prettyApproximate(10000)).to.equal('10numbers.thousand_suffix');
                expect(f.number.prettyApproximate(10550)).to.equal('10.6numbers.thousand_suffix');
                expect(f.number.prettyApproximate(-10550)).to.equal('-10.6numbers.thousand_suffix');

                expect(f.number.prettyApproximate(100000)).to.equal('100numbers.thousand_suffix');
                expect(f.number.prettyApproximate(-100000)).to.equal('-100numbers.thousand_suffix');

                expect(f.number.prettyApproximate(1000000)).to.equal('1numbers.million_suffix');
                expect(f.number.prettyApproximate(6235987)).to.equal('6.2numbers.million_suffix');
                expect(f.number.prettyApproximate(-6235987)).to.equal('-6.2numbers.million_suffix');

                expect(f.number.prettyApproximate(1000000000)).to.equal('1numbers.billion_suffix');
                expect(f.number.prettyApproximate(6740000000)).to.equal('6.7numbers.billion_suffix');
                expect(f.number.prettyApproximate(-6740000000)).to.equal('-6.7numbers.billion_suffix');

                expect(f.number.prettyApproximate(1000000000000)).to.equal('1numbers.trillion_suffix');
            })

            it('should transform seconds to duration string', function() {
                f.number.duration(undefined).should.equal('');
                f.number.duration(0).should.equal('0s');
                f.number.duration(1).should.equal('1s');
                f.number.duration(90).should.equal('1m 30s');
                f.number.duration(7654).should.equal('2h 7m 34s');
                f.number.duration(6844.003256).should.equal('1h 54m 4s');
            })
        });

        describe('for bytes', function() {

            it('should be able to format byte numbers', function() {
                f.bytes.pretty(1023).should.equal('1023 bytes.suffix');
                f.bytes.pretty(1024).should.equal('1.0 bytes.kilo');
                f.bytes.pretty(1024 * 1024).should.equal('1.0 bytes.mega');
                f.bytes.pretty(1024 * 1024 * 1.1).should.equal('1.1 bytes.mega');

                f.bytes.pretty(1024 * 1024 * 1024).should.equal('1.0 bytes.giga');
                f.bytes.pretty(1024 * 1024 * 1024 * 1024).should.equal('1.0 bytes.tera');
                f.bytes.pretty(1024 * 1024 * 1024 * 1024 * 1024).should.equal('1024.0 bytes.tera');
            })

            it('should be able to format byte numbers with precision', function() {
                f.bytes.pretty(1024, 0).should.equal('1 bytes.kilo');
            })
        });

        describe('for strings', function() {

            it('should be able to format plural phrases with plural provided', function() {
                f.string.plural(0, 'phrase', 'x').should.equal('No x')
                f.string.plural(1, 'phrase', 'x').should.equal('1 phrase')
                f.string.plural(2, 'phrase', 'x').should.equal('2 x')
            })

            it('should be able to format plural phrases automatically without plural provided', function() {
                f.string.plural(0, 'phrase').should.equal('No phrases')
                f.string.plural(1, 'phrase').should.equal('1 phrase')
                f.string.plural(2, 'phrase').should.equal('2 phrases')
            })

            it('should format phoneNumber', function() {
                f.string.phoneNumber('1112222').should.equal('111-2222')
                f.string.phoneNumber('0001112222').should.equal('000-111-2222')
                f.string.phoneNumber(1112222).should.equal('111-2222')
                f.string.phoneNumber(0).should.equal('0')
            })

            it('should format socials', function() {
                f.string.ssn('000000001').should.equal('000-00-0001')
                f.string.ssn('1234').should.equal('1234')
                f.string.ssn('').should.equal('')
                f.string.ssn('1').should.equal('1')
                f.string.ssn(0).should.equal('0')
                f.string.ssn(123111234).should.equal('123-11-1234')
            })

            it('should format case', function() {
                f.string.uppercase().should.equal('')
                f.string.uppercase('').should.equal('')
                f.string.uppercase('a').should.equal('A')

                f.string.lowercase().should.equal('')
                f.string.lowercase('').should.equal('')
                f.string.lowercase('A').should.equal('a')
            })

            it('should pretty print', function() {
                f.string.palantirPrettyPrint('this is a test').should.equal('This Is A Test')
                f.string.palantirPrettyPrint().should.equal('')
                f.string.palantirPrettyPrint('').should.equal('')
                f.string.palantirPrettyPrint('john mCcLaNe').should.equal('John Mcclane')
                f.string.palantirPrettyPrint('Johnny a. aPPleSeed').should.equal('Johnny A. Appleseed')
                f.string.palantirPrettyPrint('joHn wiLKes-booTh').should.equal('John Wilkes-Booth')
                f.string.palantirPrettyPrint('monty-burns').should.equal('Monty-Burns')
            })

            it('should truncate', function() {
                f.string.truncate('one two, 3 and four. Another sentence', 4).should.equal('one two, 3 and???')
                f.string.truncate('one two, 3 and four. Another sentence', 2).should.equal('one two???')
                f.string.truncate('one two, 3 and four. Another sentence', 5).should.equal('one two, 3 and four???')
                f.string.truncate('one two, 3 and four. Another sentence? Third', 7).should.equal('one two, 3 and four. Another sentence???')
            })
        })

        describe('for geoLocations', function() {

            it('should be able to parse', function() {
                var result = f.geoLocation.parse('point[123.32,-43.66]')

                expect(result).to.exist;

                result.should.have.property('latitude').equal('123.32')
                result.should.have.property('longitude').equal('-43.66')
            })

            it('should be able to parse uppercase', function() {
                var result = f.geoLocation.parse('POINT(39.968720,-77.341100)')

                expect(result).to.exist

                result.should.have.property('latitude').equal('39.968720')
                result.should.have.property('longitude').equal('-77.341100')
            })

            it('should be pretty', function() {
                var result = f.geoLocation.pretty('POINT(39.968720,-77.341100)')

                expect(result).to.exist

                result.should.equal('39.969, -77.341')
            })

            it('should format lat lons with zero', function() {
                var p = f.geoLocation.pretty;

                expect(p('POINT(0,0)')).to.equal('0.000, 0.000')
                expect(p('POINT(0.0,0.0)')).to.equal('0.000, 0.000')
                expect(p({latitude:0, longitude:0})).to.equal('0.000, 0.000')
            })

            it('should display description if available', function() {
                var p = f.geoLocation.pretty;
                expect(p({description:'d',latitude:0, longitude:0})).to.equal('d 0.000, 0.000')
            })

            it('should withhold description if available', function() {
                var p = f.geoLocation.pretty;
                expect(p({description:'d',latitude:0, longitude:0}, true)).to.equal('0.000, 0.000')
            })

            it('should return undefined if no match', function() {
                expect(f.geoLocation.parse('geoPoint')).to.be.undefined;
            })
        })

        describe('for dates', function() {

            describe('loose parsing', function() {
                var parse = f.date.looslyParseDate;

                it('should return undefined', function() {
                    expect(parse()).to.be.null
                })

                it('should return relative dates', function() {
                    expect(parse('   today  ')).to.be.a('date')
                    expect(parse('friday')).to.be.a('date')
                    expect(parse('next monday')).to.be.a('date')
                })

                it('should return first of the year when just a year', function() {
                    expect(parse('2015')).to.equalDate(new Date(2015, 0, 1))
                    expect(parse('15')).to.equalDate(new Date(2015, 0, 1))
                    expect(parse('98')).to.equalDate(new Date(1998, 0, 1))
                    expect(parse('59')).to.equalDate(new Date(1959, 0, 1))
                    expect(parse('58')).to.equalDate(new Date(2058, 0, 1))
                    expect(parse('989')).to.be.null
                })

                it('should ignore characters before, after', function() {
                    var testChars = '!@#$%^&*(),./;[]-=<>?:"{}+_';
                    expect(parse(testChars + '2015' + testChars)).to.equalDate(new Date(2015, 0, 1))
                    expect(parse(testChars + '98' + testChars)).to.equalDate(new Date(1998, 0, 1))
                })

                it('should return first of the month when just month year', function() {
                    expect(parse('feb 2015')).to.equalDate(new Date(2015, 1, 1))
                    expect(parse('zxcv 2015')).to.be.null
                })

                it('should return first of the month when just month year reversed', function() {
                    expect(parse('2015 january')).to.equalDate(new Date(2015, 0, 1))
                    expect(parse('2015 asdf')).to.be.null
                    expect(parse('1998 oct')).to.equalDate(new Date(1998, 9, 1))
                })
            })

            it('should create local dates', function() {
                var date = new Date('2015-06-23T13:16:00'),
                    offset = date.getTimezoneOffset(),
                    dateLocal = new Date(date.getTime() + offset * 60 * 1000),
                    isNegative = offset > 0,
                    hours = '' + Math.floor(Math.abs(offset) / 60),
                    minutes = '' + (Math.abs(offset) % 60);

                if (hours.length < 2) hours = '0' + hours;
                if (minutes.length < 2) minutes = '0' + minutes;

                var thisMachineTimezoneOffsetStr = (isNegative ? '-' : '+') + hours + ':' + minutes;
                f.date.local('2015-06-23 13:16 ' + thisMachineTimezoneOffsetStr).getTime()
                    .should.equal(dateLocal.getTime())
                f.date.dateTimeString(dateLocal.getTime()).should.match(/^2015-06-23 13:16 .+$/)

                f.date.setDateFormat('M/D/YYYY')
                f.date.setTimeFormat('h:mm a')
                f.date.dateTimeString(dateLocal.getTime()).should.match(/^6\/23\/2015 1:16 pm .+$/)
            })

            it('should ignore invalid format setting', function() {
                f.date.setDateFormat('yyyy')
                f.date.dateString(new Date(2017, 0, 1)).should.equal('2017-01-01')
            })

            it('should format to preferred format', function() {
                var now = new Date(),
                month = String(now.getMonth() + 1);

                if (month.length === 1) month = '0' + month;

                var day = String(now.getDate());
                if (day.length === 1) day = '0' + day;

                f.date.dateString(now.getTime()).should.equal(now.getFullYear() + '-' + month + '-' + day);

                f.date.dateString('' + now.getTime()).should.equal(now.getFullYear() + '-' + month + '-' + day);

                f.date.dateString(now).should.equal(now.getFullYear() + '-' + month + '-' + day);

                f.date.setDateFormat('MM DD, YYYY')
                f.date.dateString(now).should.equal(`${month} ${day}, ${now.getFullYear()}`);

                f.date.setDateFormat('YYYY')
                f.date.dateString(now).should.equal(String(now.getFullYear()));
            })

            it('should convert from moment to datepicker format', function() {
                var checkDate = new Date(2017, 2 - 1, 1); // Wed Feb 1 2017

                check('D', '1')
                check('DD', '01')

                check('ddd', 'Wed')
                check('dddd', 'Wednesday')

                check('M', '2')
                check('MM', '02')
                check('MMM', 'Feb')
                check('MMMM', 'February')

                check('YY', '17')
                check('YYYY', '2017')

                check('YYYY-MM-DD', '2017-02-01')
                check('M/D/YY', '2/1/17')
                check('MMM D, YYYY', 'Feb 1, 2017')
                
                function check(format, expected) {
                    expect(f.date.setDateFormat(format)).to.be.true
                    f.date.dateString(checkDate).should.equal(expected)
                    $.fn.datepicker.DPGlobal.formatDate(checkDate, f.date.datepickerFormat(), 'en').should.equal(expected)
                }
            })

            it('should check for correct subset of format supported', function() {
                fail('Y')
                fail('Mo')
                fail('Do')
                fail('do')
                
                function fail(format) {
                    console.error.reset();
                    expect(f.date.setDateFormat(format)).to.not.be.true
                    console.error.should.have.been.called.once
                }
            })

            it('should check for correct subset of time format supported', function() {
                fail('x')
                
                function fail(format) {
                    console.error.reset();
                    expect(f.date.setTimeFormat(format)).to.not.be.true
                    console.error.should.have.been.called.once
                }
            })

            it('should return empty strings when undefined', function() {
                f.date.dateString().should.equal('')
                f.date.dateTimeString().should.equal('')
                f.date.timeString().should.equal('')
            })

            it('should return empty strings when formatted incorrectly', function() {
                f.date.local('a').should.equal('')
                f.date.utc('a').should.equal('')
            })

            it('should format dates when string thats actually a time millis', function() {
                f.date.dateString('1396310400000').should.equal(moment(1396310400000).format('YYYY-MM-DD'));
            })

            it('should format to prefered format with time', function() {
                var now = new Date(),
                    originalTime = now.getTime(),
                    month = String(now.getMonth() + 1),
                    day = String(now.getDate()),
                    hours = String(now.getHours()),
                    minutes = String(now.getMinutes());

                if (month.length === 1) month = '0' + month;
                if (day.length === 1) day = '0' + day;
                if (hours.length === 1) hours = '0' + hours;
                if (minutes.length === 1) minutes = '0' + minutes;

                var noTz = now.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
                f.date.dateTimeString(originalTime).should.contain(noTz);
            })

            it('should format datetimes with no timezone', function() {
                var time = new Date(2017, 0, 1, 13, 30);
                f.date.setTimeFormat('h:mm a', false)
                f.date.dateTimeString(time).should.equal('2017-01-01 1:30 pm')
            })

            it('addDaysToDate() should return a Date object N days away', function() {
                var date = new Date('2015-07-04T12:30:40');
                f.date.addDaysToDate(date, 0).getTime().should.equal(new Date('2015-07-04T12:30:40').getTime());
                f.date.addDaysToDate(date, 10).getTime().should.equal(new Date('2015-07-14T12:30:40').getTime());
                f.date.addDaysToDate(date, 30).getTime().should.equal(new Date('2015-08-03T12:30:40').getTime());
                f.date.addDaysToDate(date, -4).getTime().should.equal(new Date('2015-06-30T12:30:40').getTime());
            });

            it('dateToDateString() should return a string containing only the date portion', function() {
                var date = new Date('2015-07-04T12:30:40');
                f.date.dateToDateString(date).should.equal('2015-07-04');
            });

            it('addDaysToDateString() should return a string containing only a date N days away', function() {
                var dateString = '2015-07-04T12:30:40';
                f.date.addDaysToDateString(dateString, 0).should.equal('2015-07-04');
                f.date.addDaysToDateString(dateString, 10).should.equal('2015-07-14');
                f.date.addDaysToDateString(dateString, 30).should.equal('2015-08-03');
                f.date.addDaysToDateString(dateString, -4).should.equal('2015-06-30');
            });

            shouldBeRelative({seconds: 30}, 'time.moments time.ago')
            shouldBeRelative({seconds: 59}, 'time.moments time.ago')
            shouldBeRelative({seconds: 60}, 'time.minute time.ago')
            shouldBeRelative({minutes: 2}, '2 time.minutes time.ago')
            shouldBeRelative({minutes: 60}, 'time.hour time.ago')
            shouldBeRelative({minutes: 110}, 'time.hour time.ago')
            shouldBeRelative({hours: 2}, '2 time.hours time.ago')
            shouldBeRelative({hours: 23}, '23 time.hours time.ago')
            shouldBeRelative({hours: 24}, 'time.day time.ago')
            shouldBeRelative({days: 2}, '2 time.days time.ago')
            shouldBeRelative({days: 40}, 'time.month time.ago')
            shouldBeRelative({days: 60}, '2 time.months time.ago')
            shouldBeRelative({days: 363}, '12 time.months time.ago')
            shouldBeRelative({days: 367}, 'time.year time.ago')
            shouldBeRelative({days: 366 * 2}, '2 time.years time.ago')

            function shouldBeRelative(time, string) {
                var unit = _.keys(time)[0],
                mult = { };

                mult.seconds = 1000;
                mult.minutes = mult.seconds * 60;
                mult.hours = mult.minutes * 60;
                mult.days = mult.hours * 24;
                mult.years = mult.days * 365;

                it('should format ' + time[unit] + ' ' + unit + ' relative to now as ' + string, function() {
                    var now = new Date(),
                    nowUtc = f.date.utc(now),
                    older = new Date(nowUtc.getTime() - (mult[unit] * time[unit])),
                    old = Date.now;

                    Date.now = function() {
                        return now;
                    }
                    f.date.relativeToNow(older).should.equal(string)
                    Date.now = old;
                })
            }
        })

        describe('for timezones', function() {

            it('dateTimeStringToUtc() should return the UTC date-time as a string', function() {
                f.timezone.dateTimeStringToUtc('2015-07-10 18:30', 'EST5EDT').should.equal('2015-07-10 22:30')
                f.timezone.dateTimeStringToUtc('2015-07-10 18:30', 'America/New_York').should.equal('2015-07-10 22:30')
                f.timezone.dateTimeStringToUtc('2015-07-10 18:30', 'America/Chicago').should.equal('2015-07-10 23:30')
            })

            it('dateTimeStringToTimezone() should return the timezone date-time as a string', function() {
                f.timezone.dateTimeStringToTimezone('2015-07-10 18:30', 'America/New_York', 'America/Chicago').should.equal('2015-07-10 17:30')
                f.timezone.dateTimeStringToTimezone('2015-07-11 00:30', 'America/New_York', 'America/Chicago').should.equal('2015-07-10 23:30')
            })

            it('should be able to lookup timezones', function() {
                var tzInfo = f.timezone.lookupTimezone('America/Chicago', new Date(2015, 6, 10));
                tzInfo.tzOffsetDisplay.should.equal('-05:00')
                tzInfo.tzAbbr.should.equal('CDT')
                tzInfo.name.should.equal('America/Chicago')

                tzInfo = f.timezone.lookupTimezone('America/Chicago', new Date(2015, 0, 10));
                tzInfo.tzOffsetDisplay.should.equal('-06:00')
                tzInfo.tzAbbr.should.equal('CST')
            })

        });

        describe('className', function() {

            it('should be able to transform to and from className', function() {
                var str = 's$#!!3456';

                f.className.to(str).should.equal('id0')
                f.className.from('id0').should.equal(str)

                f.className.to(str + '2').should.equal('id1')
                f.className.from('id1').should.equal(str + '2')
            })

        })
    });
});
