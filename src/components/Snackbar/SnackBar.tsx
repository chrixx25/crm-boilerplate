import { useCallback, forwardRef } from "react";

import type { SnackbarContentProps, SnackbarProps } from "./types";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import Alert, { alertClasses } from "@mui/material/Alert";
import { styled, alpha } from "@mui/material/styles";
import { useSnackbar, SnackbarContent } from "notistack";

const StyledSnackbarContent = styled(SnackbarContent, {
  shouldForwardProp: (prop) => prop !== "variant",
})<SnackbarContentProps>(({ theme, variant }: SnackbarContentProps) => ({
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    ...(theme && {
      ...(variant && {
        backgroundColor:
          theme.palette[variant === "success" ? "primary" : variant].main,
      }),
    }),
    borderRadius: 2,
    width: "65%",
    height: 4,
    bottom: 0,
  },
}));

const StyledAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: `0 2px 15px 5px ${alpha("#464646", 0.1)}`,
  width: "100%",
  [`& .${alertClasses.icon}`]: {
    color: "inherit",
  },
  [`& .${alertClasses.message}`]: {
    color: theme.palette.common.black,
  },
}));

// eslint-disable-next-line react/display-name
const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>((props, ref) => {
  const { id, message, variant } = props;
  const { closeSnackbar } = useSnackbar();

  const handleDismiss = useCallback(() => {
    closeSnackbar(id);
  }, [id, closeSnackbar]);

  return (
    <StyledSnackbarContent ref={ref} variant={variant}>
      <StyledAlert
        severity={variant}
        action={
          <IconButton color="inherit" size="small" onClick={handleDismiss}>
            <HighlightOffIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {message}
      </StyledAlert>
    </StyledSnackbarContent>
  );
});

export default Snackbar;
