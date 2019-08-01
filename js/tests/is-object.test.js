"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_object_1 = require("../is-object");
describe("'number' should fail check.", () => {
    describe("Negative number.", () => {
        test("Integer", () => {
            expect(is_object_1.isObject(-40)).toBeFalsy();
        });
        test("Float", () => {
            expect(is_object_1.isObject(-11.222)).toBeFalsy();
        });
    });
    test("Zero.", () => {
        expect(is_object_1.isObject(0)).toBeFalsy();
    });
    describe("Positive numbers.", () => {
        test("Integer", () => {
            expect(is_object_1.isObject(241)).toBeFalsy();
        });
        test("Float", () => {
            expect(is_object_1.isObject(0.4823)).toBeFalsy();
        });
    });
    test("NaN", () => {
        expect(is_object_1.isObject(NaN)).toBeFalsy();
    });
});
describe("'string' should fail check.", () => {
    test("Normal string.", () => {
        expect(is_object_1.isObject("Hello, world!")).toBeFalsy();
    });
    test("Zero-length string.", () => {
        expect(is_object_1.isObject("")).toBeFalsy();
    });
    test("Numeric string.", () => {
        expect(is_object_1.isObject("1001")).toBeFalsy();
    });
    test("Boolean string.", () => {
        expect(is_object_1.isObject("true")).toBeFalsy();
    });
});
describe("'boolean' should fail check.", () => {
    test("true", () => {
        expect(is_object_1.isObject(true)).toBeFalsy();
    });
    test("false", () => {
        expect(is_object_1.isObject(false)).toBeFalsy();
    });
});
describe("Special values should fail check.", () => {
    test("undefined", () => {
        expect(is_object_1.isObject(undefined)).toBeFalsy();
    });
    test("null", () => {
        expect(is_object_1.isObject(null)).toBeFalsy();
    });
});
describe("Objects should pass check.", () => {
    test("Normal object.", () => {
        expect(is_object_1.isObject({ hello: "there", whats: "up" })).toBeTruthy();
    });
    test("Empty object.", () => {
        expect(is_object_1.isObject({})).toBeTruthy();
    });
    test("Normal array.", () => {
        expect(is_object_1.isObject([1, 3, 5, 7])).toBeTruthy();
    });
    test("Empty array.", () => {
        expect(is_object_1.isObject([])).toBeTruthy();
    });
});
//# sourceMappingURL=is-object.test.js.map