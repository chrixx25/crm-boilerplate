import type { ActionCellProps } from "./types";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";

import Menu from "@/components/Menu";

const renderAction = (props): React.ReactElement => (
  <IconButton size="small" {...props}>
    <MoreHorizIcon />
  </IconButton>
);

const ActionCell = (props: ActionCellProps): React.ReactElement => {
  const { id } = props.row.original;

  console.log(id);

  return (
    <Menu action={renderAction}>
      <Menu.Item icon={<EditIcon />}>Edit</Menu.Item>
      <Menu.Item icon={<DeleteIcon />}>Delete</Menu.Item>
    </Menu>
  );
};

export default ActionCell;
