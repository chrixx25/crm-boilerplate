import { createReducerContext } from "react-use";

interface State {
  sidebarCollapsed: boolean;
  menus?: Record<string, boolean> | undefined;
}

interface Action {
  type: "sidebarCollapsed" | "toogleMenu";
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
    case "toogleMenu":
      return { ...state, menus: { ...state.menus, ...action.payload } };
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

// how to use
// const Menu = (props: MenuProps): React.ReactElement => {
//   const { routes, isCollapsed } = props;
//   const [state, dispatch] = useAppState();
//   const { pathname } = useRouter();

//   useEffect(() => {
//     const newMenu = pathname.split(/(?=\/)/g).reduce(
//       (acc, val) => ({
//         ...acc,
//         [(Object.keys(acc).pop() ?? "") + val]: true,
//       }),
//       {}
//     );

//     dispatch({
//       type: "toogleMenu",
//       payload: { ...newMenu },
//     });
//   }, []);

//   console.log(state.menus);

//   const handleClick = (key): void => {
//     // dispatch({
//     //   type: "toogleMenu",
//     //   payload: {
//     //     ...state.menus,
//     //     [key]: !state.menus[key],
//     //   },
//     // });
//   };

//   return (
//     <List>
//       {routes.map(({ name, path, icon, children }) => (
//         <Fragment key={name}>
//           <Link href={path} passHref>
//             <ListItemButton
//               component="a"
//               selected={!!state.menus[path]}
//               // onClick={() => handleClick(path)}
//             >
//               <ListItemIcon>{icon}</ListItemIcon>
//               <ListItemText primary={name} />
//               {children && children.length > 0 && (
//                 <StyleExpandIcon
//                   isFlipped={!!state.menus[path]}
//                   onClick={() => handleClick(path)}
//                 />
//               )}
//             </ListItemButton>
//           </Link>
//           {children && children.length > 0 && (
//             <Collapse in={!!state.menus[path]} timeout="auto" unmountOnExit>
//               <Menu routes={children} isCollapsed={isCollapsed} />
//             </Collapse>
//           )}
//         </Fragment>
//       ))}
//     </List>
//   );
// };
