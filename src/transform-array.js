module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                if (i != arr.length - 1) {
                    i++;
                } 
                if (arr[i + 1] === '--discard-prev' || 
                    arr[i + 1] === '--double-prev') {
                    i++;
                }
                break;
            case '--discard-prev':
                if (i) {
                    result.pop();
                }
                break;
            case '--double-next':
                if (i != arr.length - 1) {
                    result.push(arr[i+1]);
                }
                break;
            case '--double-prev':
                if (i) {
                    result.push(arr[i-1]);
                }
                break;
            default:
                result.push(arr[i]);
                break;
        }
    }
    return result;
};
