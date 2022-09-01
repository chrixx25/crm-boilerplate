import React from "react";

import type { ConfirmDeleteModalProps } from "./types";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import CardMedia from "components/CardMedia";
import { useDeleteContact } from "react-query/mutations";
import Modal from "components/Modal";

const StyledButton = styled(Button)({
  minHeight: "3rem",
  minWidth: "8rem",
});

const ConfirmDeleteModal = (
  props: ConfirmDeleteModalProps
): React.ReactElement => {
  const { open, onClose, id } = props;
  const deleteContact = useDeleteContact();

  const handleDelete = (): void => {
    deleteContact.mutate(id, { onSuccess: onClose });
  };

  return (
    <Modal
      title=""
      actions={
        <Modal.Actions sx={{ paddingTop: 0 }} justifyContent="center">
          <StyledButton variant="text" onClick={onClose} size="large">
            Cancel
          </StyledButton>
          <StyledButton
            disabled={deleteContact.isLoading}
            onClick={handleDelete}
            size="large"
          >
            Delete
          </StyledButton>
        </Modal.Actions>
      }
      open={open}
      onClose={onClose}
      dividers={false}
      maxWidth="xs"
    >
      <Stack alignItems="center">
        <CardMedia
          component="img"
          image="/images/symbols/modal-delete-icon.png"
          alt="/images/symbols/modal-delete-icon.png"
          height={120}
          bgSize="contain"
          objectFit="contain"
        />
        <Typography fontSize="16px" fontWeight="fontWeightMedium" mt={3}>
          Are you sure you want to delete?
        </Typography>
      </Stack>
    </Modal>
  );
};

export default ConfirmDeleteModal;
