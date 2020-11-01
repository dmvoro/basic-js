module.exports = function repeater(str, options) {
    debugger;
    let addStr = '';
    let addStrArr = [];
    let repeatStrArr = [];

    let defaultRepeatTimes = 1;
    let defaultSeparator = '+';
    let defaultAddition = '';
    let defaultAdditionRepeatTimes = 1;
    let defaultAdditionSeparator = '|';

    let repeatTimes = (!options.repeatTimes) ? defaultRepeatTimes : options.repeatTimes;
    let separator = (!options.separator) ? defaultSeparator : options.separator;
    let additionRepeatTimes = (!options.additionRepeatTimes) ? defaultAdditionRepeatTimes : options.additionRepeatTimes;
    let additionSeparator = (!options.additionSeparator) ? defaultAdditionSeparator : options.additionSeparator;
    let addition;

    if (typeof(options.addition) === 'undefined') {
        addition = defaultAddition;
    } else {
        if (typeof(options.addition) !== 'string') {
            addition = String(options.addition);
        } else {
            addition = options.addition;
        }
    }

    for (let i = 0; i < additionRepeatTimes; i++) {
        addStrArr.push(addition);
    }

    addStr = addStrArr.join(additionSeparator);

    let repeatStr = str + addStr;

    if (repeatTimes > 1) {
        for (let j = 0; j < repeatTimes; j++) {
            repeatStrArr.push(repeatStr);
        }
    }

    if (repeatStrArr.length) {
        return repeatStrArr.join(separator);
    } else {
        return repeatStr;
    }
};
  