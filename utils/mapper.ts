/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapSourceToDest = <TSource, TDestination>(
  source: TSource,
  propertyMappings?: Record<string, any>
): TDestination => {
  const destination: Partial<TDestination> = {};

  const mapValue = (value: any, mappings?: Record<string, any>) => {
    if (Array.isArray(value)) {
      return value.map((item) =>
        typeof item === 'object' ? mapSourceToDest(item, mappings) : item
      );
    } else if (value && typeof value === 'object') {
      return mapSourceToDest(value, mappings);
    }
    return value;
  };

  for (const key in source) {
    if (propertyMappings && key in propertyMappings) {
      const mappedKey = propertyMappings[key];

      if (typeof mappedKey === 'object') {
        destination[key as unknown as keyof TDestination] = mapValue(
          source[key],
          mappedKey
        );
      } else {
        destination[mappedKey as keyof TDestination] = mapValue(source[key]);
      }
    } else {
      destination[key as unknown as keyof TDestination] = mapValue(source[key]);
    }
  }

  return destination as TDestination;
};
