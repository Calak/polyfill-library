'getOwnPropertyDescriptors' in Object && typeof Object.getOwnPropertyDescriptors === 'function' && (function() {
    try {
        var object = {};
        object.test = 0;
        return Object.getOwnPropertyDescriptors(object).test.value === 0;
    } catch (exception) {
        return false
    }
}())
