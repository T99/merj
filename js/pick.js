"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = (object, ...pickedValues) => {
    let result = {};
    for (let pickedValue of pickedValues)
        result[pickedValue] = object[pickedValue];
    return result;
};
//# sourceMappingURL=pick.js.map