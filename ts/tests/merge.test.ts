/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:02 PM -- June 13th, 2019.
 *	Package: merj
 */

import { merge, MergeConfig, DEFAULT_MERGE_CONFIG } from "../merge";

/**
 * Test cases for the 'merge' function.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.3.0
 * @since v0.1.0
 */

describe("Basics", () => {
	
	test("Merging", () => {
		
		let input1: any = { val1: "hello!" };
		let input2: any = { val2: 51 };
		let config: MergeConfig = DEFAULT_MERGE_CONFIG;
		let expected: any = {
			val1: "hello!",
			val2: 51
		};
		
		expect(merge([input1, input2], config)).toStrictEqual(expected);
		
	});
	
	test("Overwriting", () => {
		
		let input1: any = { val1: "hello!" };
		let input2: any = { val1: 51 };
		let config: MergeConfig = {
			...DEFAULT_MERGE_CONFIG,
			valueConflictResolution: "overwrite"
		};
		let expected: any = {
			val1: 51
		};
		
		expect(merge([input1, input2], config)).toStrictEqual(expected);
		
	});
	
	test("'keep-original'", () => {
		
		let input1: any = { val1: "hello!" };
		let input2: any = { val1: 51 };
		let config: MergeConfig = {
			...DEFAULT_MERGE_CONFIG,
			valueConflictResolution: "keep-original"
		};
		let expected: any = {
			val1: "hello!"
		};
		
		expect(merge([input1, input2], config)).toStrictEqual(expected);
		
	});
	
});

describe("Nested Objects", () => {
	
	describe("Single Outer", () => {
		
		describe("Single Inner", () => {
			
			test("Merging", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi"
					}
				};
				let input2: any = {
					val1: {
						innerVal2: 17
					}
				};
				let config: MergeConfig = DEFAULT_MERGE_CONFIG;
				let expected: any = {
					val1: {
						innerVal1: "hi",
						innerVal2: 17
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
			test("Overwriting", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi"
					}
				};
				let input2: any = {
					val1: {
						innerVal1: 17
					}
				};
				let config: MergeConfig = {
					...DEFAULT_MERGE_CONFIG,
					valueConflictResolution: "overwrite"
				};
				let expected: any = {
					val1: {
						innerVal1: 17
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
			test("'keep-original'", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi"
					}
				};
				let input2: any = {
					val1: {
						innerVal1: 17
					}
				};
				let config: MergeConfig = {
					...DEFAULT_MERGE_CONFIG,
					valueConflictResolution: "keep-original"
				};
				let expected: any = {
					val1: {
						innerVal1: "hi"
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
		});
		
		describe("Multiple Inner", () => {
			
			test("Merging", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi",
						innerVal2: 5
					}
				};
				let input2: any = {
					val1: {
						innerVal3: 17,
						innerVal4: true
					}
				};
				let config: MergeConfig = DEFAULT_MERGE_CONFIG;
				let expected: any = {
					val1: {
						innerVal1: "hi",
						innerVal2: 5,
						innerVal3: 17,
						innerVal4: true
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
			test("Overwriting", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi",
						innerVal2: 5
					}
				};
				let input2: any = {
					val1: {
						innerVal2: 17,
						innerVal3: true
					}
				};
				let config: MergeConfig = {
					...DEFAULT_MERGE_CONFIG,
					valueConflictResolution: "overwrite"
				};
				let expected: any = {
					val1: {
						innerVal1: "hi",
						innerVal2: 17,
						innerVal3: true
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
			test("'keep-original'", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi",
						innerVal2: 5
					}
				};
				let input2: any = {
					val1: {
						innerVal2: 17,
						innerVal3: true
					}
				};
				let config: MergeConfig = {
					...DEFAULT_MERGE_CONFIG,
					valueConflictResolution: "keep-original"
				};
				let expected: any = {
					val1: {
						innerVal1: "hi",
						innerVal2: 5,
						innerVal3: true
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
		});
		
	});
	
	describe("Multiple Outer", () => {
		
		describe("Single Inner", () => {
			
			test("Merging", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi"
					},
					val2: {
						innerVal2: 100
					}
				};
				let input2: any = {
					val1: {
						innerVal3: "hello"
					},
					val2: {
						innerVal4: 58
					}
				};
				let config: MergeConfig = DEFAULT_MERGE_CONFIG;
				let expected: any = {
					val1: {
						innerVal1: "hi",
						innerVal3: "hello"
					},
					val2: {
						innerVal2: 100,
						innerVal4: 58
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
			test("Overwriting", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi"
					},
					val2: {
						innerVal2: 100
					}
				};
				let input2: any = {
					val1: {
						innerVal1: "hello"
					},
					val2: {
						innerVal2: 58
					}
				};
				let config: MergeConfig = {
					...DEFAULT_MERGE_CONFIG,
					valueConflictResolution: "overwrite"
				};
				let expected: any = {
					val1: {
						innerVal1: "hello"
					},
					val2: {
						innerVal2: 58
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
			test("'keep-original'", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi"
					},
					val2: {
						innerVal2: 100
					}
				};
				let input2: any = {
					val1: {
						innerVal1: "hello"
					},
					val2: {
						innerVal2: 58
					}
				};
				let config: MergeConfig = {
					...DEFAULT_MERGE_CONFIG,
					valueConflictResolution: "keep-original"
				};
				let expected: any = {
					val1: {
						innerVal1: "hi"
					},
					val2: {
						innerVal2: 100
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
		});
		
		describe("Multiple Inner", () => {
			
			test("Merging", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi"
					},
					val2: {
						innerVal2: 100
					}
				};
				let input2: any = {
					val1: {
						innerVal3: "hello"
					},
					val2: {
						innerVal4: 58
					}
				};
				let config: MergeConfig = DEFAULT_MERGE_CONFIG;
				let expected: any = {
					val1: {
						innerVal1: "hi",
						innerVal3: "hello"
					},
					val2: {
						innerVal2: 100,
						innerVal4: 58
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
			test("Overwriting", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi"
					},
					val2: {
						innerVal2: 100
					}
				};
				let input2: any = {
					val1: {
						innerVal1: "hello"
					},
					val2: {
						innerVal2: 58
					}
				};
				let config: MergeConfig = {
					...DEFAULT_MERGE_CONFIG,
					valueConflictResolution: "overwrite"
				};
				let expected: any = {
					val1: {
						innerVal1: "hello"
					},
					val2: {
						innerVal2: 58
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
			test("'keep-original'", () => {
				
				let input1: any = {
					val1: {
						innerVal1: "hi"
					},
					val2: {
						innerVal2: 100
					}
				};
				let input2: any = {
					val1: {
						innerVal1: "hello"
					},
					val2: {
						innerVal2: 58
					}
				};
				let config: MergeConfig = {
					...DEFAULT_MERGE_CONFIG,
					valueConflictResolution: "keep-original"
				};
				let expected: any = {
					val1: {
						innerVal1: "hi"
					},
					val2: {
						innerVal2: 100
					}
				};
				
				expect(merge([input1, input2], config)).toStrictEqual(expected);
				
			});
			
		});
		
	});
	
});

describe("Erroring", () => {
	
	// TODO [8/1/19 @ 2:20 PM] - Finish the 'Erroring' block.
	
});