function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {
    }
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr2.length === arr1.length && arr1.every((item, index) => item === arr2[index]);
}

function memorize(fn, limit) {
    const memory = [];
    return function newFn(...args) {
        let findObject = memory.find(item => compareArrays(item.args, args));
        if (findObject)
            return findObject.result;
        const result = fn(...args);
        if (memory.length > limit)
            memory.shift();
        memory.push({
            args,
            result
        })
        return result;
    }
}

const mSum = memorize(sum, 5);

const testArray = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];

function testCase(testFunction, time) {
    console.time(time)
    for (let i = 0; i < 100; i++) {
        testArray.forEach(item => testFunction(...item))
    }
    console.timeEnd(time)
}
