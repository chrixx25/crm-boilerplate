import { styled, Theme } from "@mui/material/styles";
import MuiTypography, {
  TypographyProps as BaseTypographyProps,
} from "@mui/material/Typography";

interface TypographyProps extends BaseTypographyProps {
  theme?: Theme;
  component?: string;
  fontSize?: number;
}

const Typography = styled(MuiTypography, {
  shouldForwardProp: (props) => props !== "fontSize",
})<TypographyProps>(({ theme, fontSize }) => ({
  fontSize: theme.typography.pxToRem(fontSize),
}));

Typography.defaultProps = {
  fontSize: 16,
};

export default Typography;
