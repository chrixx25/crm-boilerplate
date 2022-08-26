import { Fragment, useState } from "react";

import type { MenuProps, ExpandIconProps } from "./types";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";

const StyleExpandIcon = styled(ExpandMoreIcon, {
  shouldForwardProp: (prop) => prop !== "isFlipped",
})<ExpandIconProps>(({ theme, isFlipped }: ExpandIconProps) => ({
  transition: theme.transitions.create(["transform"]),
  ...(isFlipped && {
    transform: "rotate(-180deg)",
  }),
}));

const Menu = (props: MenuProps): React.ReactElement => {
  const { routes, isCollapsed } = props;
  const { pathname } = useRouter();
  const [openKeys, setOpenKeys] = useState(() =>
    pathname.split(/(?=\/)/g).reduce(
      (acc, val) => ({
        ...acc,
        [(Object.keys(acc).pop() ?? "") + val]: true,
      }),
      {}
    )
  );

  const handleClick = (key): void => {
    setOpenKeys((oldKeys) => ({
      ...oldKeys,
      [key]: !oldKeys[key],
    }));
  };

  return (
    <List>
      {routes.map(({ name, path, icon, children }) => (
        <Fragment key={name}>
          <Link href={path} passHref>
            <ListItemButton component="a" selected={!!openKeys[path]}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
              {children && children.length > 0 && (
                <StyleExpandIcon
                  isFlipped={!!openKeys[path]}
                  onClick={() => handleClick(path)}
                />
              )}
            </ListItemButton>
          </Link>
          {children && children.length > 0 && (
            <Collapse in={!!openKeys[path]} timeout="auto" unmountOnExit>
              <Menu routes={children} isCollapsed={isCollapsed} />
            </Collapse>
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default Menu;
