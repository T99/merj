/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:26 PM -- August 01st, 2019.
 *	Project: merj
 */

import { pick } from "../pick";

/**
 * Test cases for the 'pick' function.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.3.0
 * @since v0.3.0
 */

test("Simple pick.", () => {
	
	type ParentType = {
		
		name: string,
		age: number,
		alive: boolean;
		
	};
	
	type SubType = {

		name: string,
		alive: boolean

	};
	
	let parentObj: ParentType = {
		
		name: "Trevor",
		age: 19,
		alive: true
		
	};
	
	let picked: SubType = pick<ParentType, SubType>(parentObj, "name", "alive");
	
	expect(picked).toBeDefined();
	expect(picked.name).toBe("Trevor");
	expect(picked.alive).toBe(true);
	expect((picked as any).age).toBeUndefined();
	
});