export function wrap(functionToWrap) {
    return function promiseHandler(...args) {
        const result = new Promise(function (resolve, reject) {
            functionToWrap(...args, (error, ...callbackResults) => {
                if (error) {
                    return reject(error);
                }
                return resolve(callbackResults);
            });
        });

        return result;
    };
}
