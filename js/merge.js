"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iter_over_1 = require("iter-over");
const is_object_1 = require("./is-object");
exports.merge = (objs, config = exports.DEFAULT_MERGE_CONFIG) => {
    let currentPath = [];
    const getCurrentPath = (currentKey) => {
        let result = "mergeResult";
        for (let property of currentPath)
            result += ("." + property);
        result += ("." + currentKey);
        return result;
    };
    const recursiveMerge = (objects) => {
        if (!objects.every((object) => is_object_1.isObject(object))) {
            throw new Error("ERR | Attempted to merge non-object values.");
        }
        let mergeResult = {};
        objectIterator: for (let object of objects) {
            let iter = new iter_over_1.ObjectIterator(object);
            keyValueIterator: for (let item of iter) {
                let { key, value } = item;
                if (mergeResult[key] === undefined)
                    mergeResult[key] = value;
                else if (mergeResult[key] === value)
                    continue keyValueIterator;
                else if (is_object_1.isObject(mergeResult[key]) && is_object_1.isObject(value))
                    mergeResult[key] = recursiveMerge([mergeResult[key], value]);
                else if (is_object_1.isObject(mergeResult[key]) || is_object_1.isObject(value)) {
                    switch (config.typeConflictResolution) {
                        case "error": {
                            throw new Error("ERR | Encountered a type conflict at '" + getCurrentPath(key) + "'.");
                        }
                        case "overwrite": {
                            mergeResult[key] = value;
                            break;
                        }
                        case "keep-original": {
                            break;
                        }
                    }
                }
                else {
                    switch (config.valueConflictResolution) {
                        case "overwrite": {
                            mergeResult[key] = value;
                            break;
                        }
                        case "keep-original": {
                            break;
                        }
                    }
                }
            }
        }
        return mergeResult;
    };
    return recursiveMerge(objs);
};
exports.DEFAULT_MERGE_CONFIG = {
    typeConflictResolution: "error",
    valueConflictResolution: "overwrite"
};
//# sourceMappingURL=merge.js.map