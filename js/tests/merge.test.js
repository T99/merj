"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("../merge");
describe("Basics", () => {
    test("Merging", () => {
        let input1 = { val1: "hello!" };
        let input2 = { val2: 51 };
        let config = merge_1.DEFAULT_MERGE_CONFIG;
        let expected = {
            val1: "hello!",
            val2: 51
        };
        expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
    });
    test("Overwriting", () => {
        let input1 = { val1: "hello!" };
        let input2 = { val1: 51 };
        let config = Object.assign({}, merge_1.DEFAULT_MERGE_CONFIG, { valueConflictResolution: "overwrite" });
        let expected = {
            val1: 51
        };
        expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
    });
    test("'keep-original'", () => {
        let input1 = { val1: "hello!" };
        let input2 = { val1: 51 };
        let config = Object.assign({}, merge_1.DEFAULT_MERGE_CONFIG, { valueConflictResolution: "keep-original" });
        let expected = {
            val1: "hello!"
        };
        expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
    });
});
describe("Nested Objects", () => {
    describe("Single Outer", () => {
        describe("Single Inner", () => {
            test("Merging", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi"
                    }
                };
                let input2 = {
                    val1: {
                        innerVal2: 17
                    }
                };
                let config = merge_1.DEFAULT_MERGE_CONFIG;
                let expected = {
                    val1: {
                        innerVal1: "hi",
                        innerVal2: 17
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
            test("Overwriting", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi"
                    }
                };
                let input2 = {
                    val1: {
                        innerVal1: 17
                    }
                };
                let config = Object.assign({}, merge_1.DEFAULT_MERGE_CONFIG, { valueConflictResolution: "overwrite" });
                let expected = {
                    val1: {
                        innerVal1: 17
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
            test("'keep-original'", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi"
                    }
                };
                let input2 = {
                    val1: {
                        innerVal1: 17
                    }
                };
                let config = Object.assign({}, merge_1.DEFAULT_MERGE_CONFIG, { valueConflictResolution: "keep-original" });
                let expected = {
                    val1: {
                        innerVal1: "hi"
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
        });
        describe("Multiple Inner", () => {
            test("Merging", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi",
                        innerVal2: 5
                    }
                };
                let input2 = {
                    val1: {
                        innerVal3: 17,
                        innerVal4: true
                    }
                };
                let config = merge_1.DEFAULT_MERGE_CONFIG;
                let expected = {
                    val1: {
                        innerVal1: "hi",
                        innerVal2: 5,
                        innerVal3: 17,
                        innerVal4: true
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
            test("Overwriting", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi",
                        innerVal2: 5
                    }
                };
                let input2 = {
                    val1: {
                        innerVal2: 17,
                        innerVal3: true
                    }
                };
                let config = Object.assign({}, merge_1.DEFAULT_MERGE_CONFIG, { valueConflictResolution: "overwrite" });
                let expected = {
                    val1: {
                        innerVal1: "hi",
                        innerVal2: 17,
                        innerVal3: true
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
            test("'keep-original'", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi",
                        innerVal2: 5
                    }
                };
                let input2 = {
                    val1: {
                        innerVal2: 17,
                        innerVal3: true
                    }
                };
                let config = Object.assign({}, merge_1.DEFAULT_MERGE_CONFIG, { valueConflictResolution: "keep-original" });
                let expected = {
                    val1: {
                        innerVal1: "hi",
                        innerVal2: 5,
                        innerVal3: true
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
        });
    });
    describe("Multiple Outer", () => {
        describe("Single Inner", () => {
            test("Merging", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi"
                    },
                    val2: {
                        innerVal2: 100
                    }
                };
                let input2 = {
                    val1: {
                        innerVal3: "hello"
                    },
                    val2: {
                        innerVal4: 58
                    }
                };
                let config = merge_1.DEFAULT_MERGE_CONFIG;
                let expected = {
                    val1: {
                        innerVal1: "hi",
                        innerVal3: "hello"
                    },
                    val2: {
                        innerVal2: 100,
                        innerVal4: 58
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
            test("Overwriting", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi"
                    },
                    val2: {
                        innerVal2: 100
                    }
                };
                let input2 = {
                    val1: {
                        innerVal1: "hello"
                    },
                    val2: {
                        innerVal2: 58
                    }
                };
                let config = Object.assign({}, merge_1.DEFAULT_MERGE_CONFIG, { valueConflictResolution: "overwrite" });
                let expected = {
                    val1: {
                        innerVal1: "hello"
                    },
                    val2: {
                        innerVal2: 58
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
            test("'keep-original'", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi"
                    },
                    val2: {
                        innerVal2: 100
                    }
                };
                let input2 = {
                    val1: {
                        innerVal1: "hello"
                    },
                    val2: {
                        innerVal2: 58
                    }
                };
                let config = Object.assign({}, merge_1.DEFAULT_MERGE_CONFIG, { valueConflictResolution: "keep-original" });
                let expected = {
                    val1: {
                        innerVal1: "hi"
                    },
                    val2: {
                        innerVal2: 100
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
        });
        describe("Multiple Inner", () => {
            test("Merging", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi"
                    },
                    val2: {
                        innerVal2: 100
                    }
                };
                let input2 = {
                    val1: {
                        innerVal3: "hello"
                    },
                    val2: {
                        innerVal4: 58
                    }
                };
                let config = merge_1.DEFAULT_MERGE_CONFIG;
                let expected = {
                    val1: {
                        innerVal1: "hi",
                        innerVal3: "hello"
                    },
                    val2: {
                        innerVal2: 100,
                        innerVal4: 58
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
            test("Overwriting", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi"
                    },
                    val2: {
                        innerVal2: 100
                    }
                };
                let input2 = {
                    val1: {
                        innerVal1: "hello"
                    },
                    val2: {
                        innerVal2: 58
                    }
                };
                let config = Object.assign({}, merge_1.DEFAULT_MERGE_CONFIG, { valueConflictResolution: "overwrite" });
                let expected = {
                    val1: {
                        innerVal1: "hello"
                    },
                    val2: {
                        innerVal2: 58
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
            test("'keep-original'", () => {
                let input1 = {
                    val1: {
                        innerVal1: "hi"
                    },
                    val2: {
                        innerVal2: 100
                    }
                };
                let input2 = {
                    val1: {
                        innerVal1: "hello"
                    },
                    val2: {
                        innerVal2: 58
                    }
                };
                let config = Object.assign({}, merge_1.DEFAULT_MERGE_CONFIG, { valueConflictResolution: "keep-original" });
                let expected = {
                    val1: {
                        innerVal1: "hi"
                    },
                    val2: {
                        innerVal2: 100
                    }
                };
                expect(merge_1.merge([input1, input2], config)).toStrictEqual(expected);
            });
        });
    });
});
describe("Erroring", () => {
});
//# sourceMappingURL=merge.test.js.map