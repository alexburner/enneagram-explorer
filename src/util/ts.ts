/**
 * User-Defined Type Guard:
 * Narrow an unknown value down to an object with the given key.
 */
export const has = <Key extends PropertyKey>(
  obj: unknown,
  key: Key,
): obj is Record<Key, unknown> =>
  typeof obj === 'object' && obj !== null && key in obj

/**
 * User-Defined Type Guard:
 * Declare whether something is a key of an object.
 * Useful for things like Object.keys(myObject), which is string[]
 * (see https://stackoverflow.com/a/55012175 for why that is)
 */
export const isKeyOf = <T extends object>(
  key: unknown,
  obj: T,
): key is keyof T => String(key) in obj
