import { forwardRef } from "react";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Dialog from "@mui/material/Dialog";
import MuiDialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import MuiDialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Slide, { SlideProps } from "@mui/material/Slide";
import { styled, Theme } from "@mui/material/styles";
import { noop } from "lodash";

import { ModalProps } from "./types";

interface DialogProps {
  theme?: Theme;
  justifyContent?: string;
}

// eslint-disable-next-line react/display-name
const Transition = forwardRef(
  (props: SlideProps, ref): React.ReactElement => (
    <Slide {...props} ref={ref} direction="up" mountOnEnter unmountOnExit />
  )
);

const DialogTitle = styled(MuiDialogTitle, {
  shouldForwardProp: (prop) => prop !== "justifyContent",
})<DialogProps>(({ theme, justifyContent }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const DialogActions = styled(MuiDialogActions, {
  shouldForwardProp: (prop) => prop !== "justifyContent",
})<DialogProps>(({ theme, justifyContent }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent,
  padding: theme.spacing(3, 2),
}));

const Modal = (props: ModalProps): React.ReactElement => {
  const {
    title,
    maxWidth,
    dividers,
    actions,
    closeIcon,
    disableEscapeKeyDown,
    open,
    onClose,
    onEnter,
    onExited,
    children,
  } = props;

  return (
    <Dialog
      TransitionComponent={Transition}
      TransitionProps={{
        onEnter,
        onExited,
      }}
      maxWidth={maxWidth}
      disableEscapeKeyDown={disableEscapeKeyDown}
      fullWidth
      open={open}
      onClose={onClose}
    >
      <DialogTitle justifyContent={title ? "space-between" : "flex-end"}>
        {title}
        {closeIcon && (
          <IconButton color="inherit" edge="end" onClick={onClose}>
            <HighlightOffIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers={dividers}>{children}</DialogContent>
      {actions}
    </Dialog>
  );
};

Modal.Actions = DialogActions;

Modal.defaultProps = {
  title: "",
  maxWidth: "lg",
  dividers: true,
  disableEscapeKeyDown: true,
  open: false,
  onClose: noop,
  onEnter: noop,
  onExited: noop,
  closeIcon: true,
};

export default Modal;
