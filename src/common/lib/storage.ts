import type { StorageResult } from 'common/ts/types/storage-result';

// TODO: get storage prefix from .env file (or app name in any other place)
const STORAGE_PREFIX = 'bix';

/**
 * This function adds {@link STORAGE_PREFIX | a prefix} at the beginning of
 * provided key, and returns the associated value with the given key from the
 * given storage. It also parses the result into a JSON using {@link JSON.parse}.
 *
 * @param key - The storage key.
 * @param storageObject - Which storage to get the data from. Usually
 *   localStorage or sessionStorage.
 * @returns A {@link StorageResult} object will be returned that will be
 *   {success: true, value: value} if we get the item without any errors. If the
 *   object doesn't exist or we face any other errors, the {success: false,
 *   error: error} object will be returned.
 */
export function getItem(
  key: string,
  storageObject: Storage = localStorage
): StorageResult {
  try {
    const item = storageObject.getItem(`${STORAGE_PREFIX}_${key}`);
    if (item === null) {
      return {
        success: false,
        error: new Error(`Item with key "${key}" does not exist`),
      };
    }

    const value: unknown = JSON.parse(item);
    return {
      success: true,
      value,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

/**
 * This function adds {@link STORAGE_PREFIX | a prefix} at the beginning of
 * provided key, and sets the associated value to the given key in the given storage.
 *
 * @param key - The storage key.
 * @param value - The storage value. This will be stringified with {@link JSON.stringify}.
 * @param storageObject - Which storage to get the data from. Usually
 *   localStorage or sessionStorage.
 * @returns A {@link StorageResult} object will be returned that will be
 *   {success: true} if we set the item without any errors. If we face any
 *   errors, the {success: false, error: error} object will be returned.
 */
export function setItem(
  key: string,
  value: unknown,
  storageObject: Storage = localStorage
): StorageResult {
  try {
    storageObject.setItem(`${STORAGE_PREFIX}_${key}`, JSON.stringify(value));
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}
