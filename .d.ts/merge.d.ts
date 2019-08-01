export declare const merge: (objs: any[], config?: MergeConfig) => any;
export interface MergeConfig {
    typeConflictResolution: "error" | "overwrite" | "keep-original";
    valueConflictResolution: "overwrite" | "keep-original";
}
export declare const DEFAULT_MERGE_CONFIG: MergeConfig;
