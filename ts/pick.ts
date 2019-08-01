/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:37 PM -- June 16th, 2019.
 *	Project: merj
 */

/**
 * A method that picks individual values out of a provided JSON object.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.3.0
 * @since v0.2.0
 */
export const pick: <T extends K, K>(object: T, ...pickedValues: Array<keyof K>) => K =
	<T extends K, K>(object: T, ...pickedValues: Array<keyof K>): K => {
		
		let result: any = {};
		
		for (let pickedValue of pickedValues) result[pickedValue] = object[pickedValue];
		
		return result as Pick<T, keyof K>;
		
	};