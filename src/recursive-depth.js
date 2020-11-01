module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1, arrayOfDepth = []) {
        arrayOfDepth.push(depth);

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                this.calculateDepth(arr[i], depth + 1, arrayOfDepth);
            }
        }
        let result = 0;

        for (let i = 0; i < arrayOfDepth.length; i++) {
            if (result < arrayOfDepth[i]) {
                result = arrayOfDepth[i];
            }
        }
        return result;
    }
};