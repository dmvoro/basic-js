module.exports = function getSeason(date) {

    if (typeof(date) === 'undefined') {
        return 'Unable to determine the time of year!';
    }

    var toString = {}.toString;

    if (toString.call(date) !== '[object Date]') {
        throw new Error('Error');
    }

    let month = date.getMonth();
    
    switch (true) {
        case month >= 0 && month <=1 || month === 11:
            return 'winter';
        case month >= 2 && month <=4:
            return 'spring';
        case month >= 5 && month <=7:
            return 'summer';
        case month >= 8 && month <=10:
            return 'autumn';
        default:
            break;
    }
};
