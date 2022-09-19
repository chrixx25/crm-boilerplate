import type { ActionCellProps } from "./types";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import { useModal } from "mui-modal-provider";

import Menu from "@/components/Menu";

import EditUserModal from "../edit-user-modal";
import ConfirmDeleteModal from "../confirm-delete-modal";

const renderAction = (props): React.ReactElement => (
  <IconButton size="small" {...props}>
    <MoreHorizIcon />
  </IconButton>
);

const ActionCell = (props: ActionCellProps): React.ReactElement => {
  const { id } = props.row.original;
  const meta = props.initialState;
  const { showModal } = useModal();

  return (
    <Menu action={renderAction}>
      <Menu.Item
        icon={<EditIcon />}
        onClick={() =>
          showModal(EditUserModal, {
            id,
            meta: { page: meta.pageIndex, pageSize: meta.pageSize },
          })
        }
      >
        Edit
      </Menu.Item>
      <Menu.Item
        icon={<DeleteIcon />}
        onClick={() => showModal(ConfirmDeleteModal, { id })}
      >
        Delete
      </Menu.Item>
    </Menu>
  );
};

export default ActionCell;
