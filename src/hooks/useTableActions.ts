import { reduce, pickBy, identity } from "lodash";
import { useMethods } from "react-use";

type State = {
  page: number;
  size: number;
  filters: Record<string, any>;
};

const initialState: State = {
  page: 1,
  size: 10,
  filters: {},
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createMethods = (state: State) => ({
  setFilters: (newFilters: Record<string, any>) => ({
    ...state,
    filters: {
      ...state.filters,
      filters: reduce(
        pickBy(newFilters, identity),
        (result, value, key) => ({ ...result, [key]: `start:${value}` }),
        {}
      ),
    },
    page: 1,
  }),
  setPageSize: (newSize: number) => ({
    ...state,
    size: newSize,
    page: 1,
  }),
  setPage: (newPage: number) => ({
    ...state,
    page: newPage,
  }),
});
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useTableActions = () => useMethods(createMethods, initialState);

export default useTableActions;
