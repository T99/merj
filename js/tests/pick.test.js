"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick_1 = require("../pick");
test("Simple pick.", () => {
    let parentObj = {
        name: "Trevor",
        age: 19,
        alive: true
    };
    let picked = pick_1.pick(parentObj, "name", "alive");
    expect(picked).toBeDefined();
    expect(picked.name).toBe("Trevor");
    expect(picked.alive).toBe(true);
    expect(picked.age).toBeUndefined();
});
//# sourceMappingURL=pick.test.js.map