// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = propName => propName;
const createNotEnumerableProperty = propName => {
    Object.defineProperty(Object.prototype, propName, {
        get: function () {
            return propName;
        },
        set: function (value) {
            propName = value;
        },
        enumerable: false
    });
    return propName
};
const createProtoMagicObject = () => Function;
const incrementor = () => {
    incrementor.callCount = incrementor.callCount + 1 || 1;
    function f() {
        incrementor.callCount++;
        return f;
    }
    f.valueOf = function() {
        return incrementor.callCount;
    };

    return f;
};
const asyncIncrementor = () => {
    asyncIncrementor.callCount = asyncIncrementor.callCount + 1 || 1;
    function f() {
        asyncIncrementor.callCount++;
        return f;
    }
    f.valueOf = function() {
        return asyncIncrementor.callCount;
    };

    return f;
};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = (obj) => {
    let nestedPropCount = 0;

    function getNestedProp(obj) {
        for(let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if( typeof(obj[key]) === 'object'){
                    getNestedProp(obj[key]);
                }
                nestedPropCount++;
            }
        }
        return nestedPropCount;
    }
    return getNestedProp(obj);
};
const createSerializedObject = () => null;
const toBuffer = () => {};
const sortByProto = (arr) => arr.sort();

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;