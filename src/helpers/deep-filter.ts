function deepFilter<Type extends Record<string, any>>(
  arr: Type[],
  nestedProp: keyof Type,
  callback: (item: Type) => any
): Type[] {
  return [...arr].filter((item) => {
    const keep = callback(item);
    if (keep && item[nestedProp]) {
      // eslint-disable-next-line no-param-reassign
      (item[nestedProp] as unknown) = deepFilter(
        item[nestedProp],
        nestedProp,
        callback
      );
    }
    return keep;
  });
}

export default deepFilter;
