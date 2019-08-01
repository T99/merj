/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:35 PM -- June 16th, 2019.
 *	Project: merj
 */

/**
 * A method that returns true if the provided value is a JSON object.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.2.0
 * @since v0.1.0
 */
export const isObject: (value: any) => boolean = (value: any): boolean => (typeof value === "object") && (value !== null);