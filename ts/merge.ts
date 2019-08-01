/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:30 PM -- June 16th, 2019.
 *	Project: merj
 */

import { ObjectIterator, KeyValuePair } from "iter-over";
import { isObject } from "./is-object";

/**
 * A method that recursively merges two JSON objects.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.2.0
 * @since v0.1.0
 */
export const merge: (objs: any[], config?: MergeConfig) => any = (objs: any[], config: MergeConfig = DEFAULT_MERGE_CONFIG): any => {
	
	let currentPath: string[] = [];
	
	const getCurrentPath: (currentKey: string) => string = (currentKey: string): string => {
		
		let result: string = "mergeResult";
		
		for (let property of currentPath) result += ("." + property);
		
		result += ("." + currentKey);
		
		return result;
		
	};
	
	const recursiveMerge: (objects: any[]) => any = (objects: any[]): any => {
		
		if (!objects.every((object: any): boolean => isObject(object))) {
			
			throw new Error("ERR | Attempted to merge non-object values.");
			
		}
		
		let mergeResult: any = {};
		
		objectIterator:
			for (let object of objects) {
				
				let iter: ObjectIterator = new ObjectIterator(object);
				
				keyValueIterator:
					for (let item of iter) {
						
						let { key, value}: KeyValuePair<string, any> = item as KeyValuePair<string, any>;
						
						if (mergeResult[key] === undefined) mergeResult[key] = value;
						else if (mergeResult[key] === value) continue keyValueIterator;
						else if (isObject(mergeResult[key]) && isObject(value)) mergeResult[key] = recursiveMerge([ mergeResult[key], value ]);
						else if (isObject(mergeResult[key]) || isObject(value)) {
							
							// A type conflict exists - check config to figure out how to resolve it.
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
							
						} else {
							
							// A value conflict exists - check config to figure out how to resolve it.
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

/**
 * An interface representing the possible configuration values of a merge operation.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.2.0
 * @since v0.1.0
 */
export interface MergeConfig {
	
	/**
	 * Type conflicts refer to when Merj comes upon two values which are not both objects or not both primitives.
	 *
	 * This config item has multiple options:
	 *
	 *   - "error"
	 *     On "error" mode, if Merj encounters a type conflict, it will simply throw an error and quit merging.
	 *
	 *   - "overwrite"
	 *     On "overwrite" mode, if Merj encounters a type conflict, the values present in later objects will overwrite
	 *     the values present in any earlier ones.
	 *
	 *   - "keep-original"
	 *     On "keep-original" mode, if Merj encounters a type conflict, the very first value that is found for a given
	 *     property will be kept.
	 */
	typeConflictResolution: "error" | "overwrite" | "keep-original";
	
	/**
	 * Value conflicts refer to when Merj comes upon two values which are unequal (but either both values are primitive
	 * or both values or objects) and needs to merge them.
	 *
	 * This config item has multiple options:
	 *
	 *   - "overwrite"
	 *
	 *
	 *   - "keep-original"
	 *
	 *
	 */
	valueConflictResolution: "overwrite" | "keep-original";
	
}

/**
 * An implementation of MergeConfig that is defaulted to if no config is provided.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.2.0
 * @since v0.1.0
 */
export const DEFAULT_MERGE_CONFIG: MergeConfig = {
	
	typeConflictResolution: "error",
	valueConflictResolution:  "overwrite"
	
};