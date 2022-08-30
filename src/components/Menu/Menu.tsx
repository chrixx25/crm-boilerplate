import { cloneElement, useId } from "react";

import type { CustomMenuProp } from "./types";

import MuiMenu from "@mui/material/Menu";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import flattenChildren from "react-keyed-flatten-children";

import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const Menu = (props: CustomMenuProp): React.ReactElement => {
  const { action, children, ...rest } = props;
  const uniqueId = useId();

  const popupState = usePopupState({ variant: "popover", popupId: uniqueId });

  const createClickHandler = (childProps) => () => {
    popupState.close();
    childProps.onClick();
  };

  return (
    <>
      {action({ ...bindTrigger(popupState) })}
      <MuiMenu {...rest} {...bindMenu(popupState)}>
        {flattenChildren(children).map((child: any) =>
          cloneElement(child, {
            onClick: createClickHandler(child.props),
          })
        )}
      </MuiMenu>
    </>
  );
};

Menu.SubMenu = SubMenu;
Menu.Item = MenuItem;

export default Menu;
