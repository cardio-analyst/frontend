/**
 * @template T .
 * @description Cast value to T.
 * @param {unknown} value - Value.
 * @returns {T} .
 */
export function cast<T>(value: unknown) {
    return value as T;
}
