function recursiveFilter<Type extends Record<string, any>>(
  data: Type[],
  nestedProp: keyof Type,
  predicate: (item: Type) => boolean
): Type[] {
  return data.reduce((acc: Type[], item) => {
    const newItem = { ...item };

    if (nestedProp in item) {
      (newItem[nestedProp] as unknown) = recursiveFilter<Type>(
        item[nestedProp],
        nestedProp,
        predicate
      );
    }

    if (predicate(newItem)) {
      acc.push(newItem);
    }

    return acc;
  }, []);
}

export default recursiveFilter;
