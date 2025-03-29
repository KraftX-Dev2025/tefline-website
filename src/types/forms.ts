/**
 * Type for form data used in server actions
 * Compatible with both FormData from standard forms and Next.js server actions
 */
export interface FormData {
    get(key: string): FormDataEntryValue | null;
    getAll(key: string): FormDataEntryValue[];
    has(key: string): boolean;
    append(name: string, value: string | Blob, fileName?: string): void;
    delete(name: string): void;
    set(name: string, value: string | Blob, fileName?: string): void;
    forEach(
        callbackfn: (
            value: FormDataEntryValue,
            key: string,
            parent: FormData
        ) => void
    ): void;
}
