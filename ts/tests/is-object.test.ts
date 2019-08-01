/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:55 PM -- August 01st, 2019.
 *	Project: merj
 */

import { isObject } from "../is-object";

/**
 * Test cases for the 'is-object' function.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.3.0
 * @since v0.3.0
 */

describe("'number' should fail check.", () => {
	
	describe("Negative number.", () => {
		
		test("Integer", () => {
			
			expect(isObject(-40)).toBeFalsy();
			
		});
		
		test("Float", () => {
			
			expect(isObject(-11.222)).toBeFalsy();
			
		});
		
	});
	
	test("Zero.", () => {
		
		expect(isObject(0)).toBeFalsy();
		
	});
	
	describe("Positive numbers.", () => {
		
		test("Integer", () => {
			
			expect(isObject(241)).toBeFalsy();
			
		});
		
		test("Float", () => {
			
			expect(isObject(0.4823)).toBeFalsy();
			
		});
		
	});
	
	test("NaN", () => {
		
		expect(isObject(NaN)).toBeFalsy();
		
	});
	
});

describe("'string' should fail check.", () => {
	
	test("Normal string.", () => {
		
		expect(isObject("Hello, world!")).toBeFalsy();
		
	});
	
	test("Zero-length string.", () => {
		
		expect(isObject("")).toBeFalsy();
		
	});
	
	test("Numeric string.", () => {
		
		expect(isObject("1001")).toBeFalsy();
		
	});
	
	test("Boolean string.", () => {
		
		expect(isObject("true")).toBeFalsy();
		
	});
	
});

describe("'boolean' should fail check.", () => {
	
	test("true", () => {
		
		expect(isObject(true)).toBeFalsy();
		
	});
	
	test("false", () => {
		
		expect(isObject(false)).toBeFalsy();
		
	});
	
});

describe("Special values should fail check.", () => {
	
	test("undefined", () => {
		
		expect(isObject(undefined)).toBeFalsy();
		
	});
	
	test("null", () => {
		
		expect(isObject(null)).toBeFalsy();
		
	});
	
});

describe("Objects should pass check.", () => {
	
	test("Normal object.", () => {
		
		expect(isObject({ hello: "there", whats: "up" })).toBeTruthy();
		
	});
	
	test("Empty object.", () => {
		
		expect(isObject({})).toBeTruthy();
		
	});
	
	test("Normal array.", () => {
		
		expect(isObject([1, 3, 5, 7])).toBeTruthy();
		
	});
	
	test("Empty array.", () => {
		
		expect(isObject([])).toBeTruthy();
		
	});
	
});