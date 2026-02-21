export const $refId = "~refId";
export const $track = "~track";
export const $encoder = "~encoder";
export const $decoder = "~decoder";

export const $filter = "~filter";

export const $getByIndex = "~getByIndex";
export const $deleteByIndex = "~deleteByIndex";

/**
 * Used to hold ChangeTree instances whitin the structures
 */
export const $changes = '~changes';

/**
 * Used to keep track of the type of the child elements of a collection
 * (MapSchema, ArraySchema, etc.)
 */
export const $childType = '~childType';

/**
 * Optional "discard" method for custom types (ArraySchema)
 * (Discards changes for next serialization)
 */
export const $onEncodeEnd = '~onEncodeEnd';

/**
 * When decoding, this method is called after the instance is fully decoded
 */
export const $onDecodeEnd = "~onDecodeEnd";

/**
 * Used to mark that a Schema class should be visible whenever it's parent is visible, even if it doesn't have any view tags itself.
 * This is used for "nested" Schema classes that are only used as fields of other Schema classes.
 */
export const $inheritVisibility = '~inheritVisibility';

/**
 * Metadata
 */
export const $descriptors = "~descriptors";
export const $numFields = "~__numFields";
export const $refTypeFieldIndexes = "~__refTypeFieldIndexes";
export const $viewFieldIndexes = "~__viewFieldIndexes";
export const $fieldIndexesByViewTag = "$__fieldIndexesByViewTag";