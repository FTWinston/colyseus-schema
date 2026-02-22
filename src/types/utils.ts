import { Schema } from '../Schema.js';
import { $inheritVisibility } from './symbols.js';

export function spliceOne(arr: any[], index: number): boolean {
    // manually splice an array
    if (index === -1 || index >= arr.length) {
        return false;
    }

    const len = arr.length - 1;

    for (let i = index; i < len; i++) {
        arr[i] = arr[i + 1];
    }

    arr.length = len;

    return true;
}

/** Mark a Schema class so its instances share visibility with their Schema parent,
 *  the same way that ArraySchema (etc) items do. */
export function inheritVisibility<T extends new (...args: any[]) => Schema>(constructor: T): T {
    (constructor as any)[$inheritVisibility] = true;
    return constructor;
}
