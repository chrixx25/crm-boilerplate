import { reduce, replace } from "lodash";

const formatFilters = (
  filter: Record<string, any>,
  type: "start" | "eq" | "in" | "nin" | "like" | "enums_like"
): Record<string, any> => {
  if (type === "enums_like") {
    return reduce(
      filter,
      (result, value, key) => ({
        ...result,
        ...(value && {
          [key]: `like:${replace(replace(value, "&", "and"), " ", "_")}`,
        }),
      }),
      {}
    );
  }

  return reduce(
    filter,
    (result, value, key) => ({
      ...result,
      ...(value && { [key]: `${type}:${value}` }),
    }),
    {}
  );
};

export default formatFilters;
