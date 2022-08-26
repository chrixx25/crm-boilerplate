import { createReducerContext } from "react-use";

interface State {
  sidebarCollapsed: boolean;
  menus?: Record<string, boolean> | undefined;
}

interface Action {
  type: "sidebarCollapsed";
  payload?: any;
}

const initialState: State = {
  sidebarCollapsed: true,
  menus: {},
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "sidebarCollapsed":
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
    default:
      return state;
  }
};

const [useAppState, TogglerProvider] = createReducerContext(
  reducer,
  initialState
);

export default TogglerProvider;
export { useAppState };
export { initialState };
