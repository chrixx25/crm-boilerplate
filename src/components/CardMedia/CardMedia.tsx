import MuiCardMedia from "@mui/material/CardMedia";
import { CSSObject, styled } from "@mui/material/styles";

interface CardMediaProps {
  cover?: boolean;
  fourThree?: boolean;
  square?: boolean;
  wide?: boolean;

  bgColor?: string;
  bgPosition?: string;
  bgSize?:
    | "contain"
    | "cover"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "revert-layer"
    | string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  component?: string;
  image?: string;
  alt?: string;
  height?: number;
}

const coverMixin = (): CSSObject => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
});

const fourThreeMixin = (): CSSObject => ({
  width: "100%",
  height: 0,
  paddingBottom: "75%",
});

const squareMixin = (): CSSObject => ({
  width: "100%",
  height: 0,
  paddingBottom: "100%",
});

const wideMixin = (): CSSObject => ({
  width: "100%",
  height: 0,
  paddingBottom: "56.25%",
});

const CardMedia = styled(MuiCardMedia, {
  shouldForwardProp: (prop) =>
    prop !== "cover" &&
    // prop !== "fourThree" &&
    // prop !== "square" &&
    // prop !== "wide" &&
    prop !== "bgColor" &&
    prop !== "bgPosition" &&
    prop !== "bgSize",
})<CardMediaProps>(
  ({
    cover,
    fourThree,
    square,
    wide,
    bgColor,
    bgPosition,
    bgSize,
    objectFit,
  }) => ({
    ...(cover && { ...coverMixin() }),
    ...(fourThree && { ...fourThreeMixin() }),
    ...(square && { ...squareMixin() }),
    ...(wide && { ...wideMixin() }),
    backgroundColor: bgColor,
    backgroundPosition: bgPosition,
    backgroundSize: bgSize,
    objectFit,
  })
);

CardMedia.defaultProps = {
  component: "div",
  image: "",
  alt: "",
  bgColor: "rgba(0, 0, 0, 0)",
  bgPosition: "center",
  bgSize: "cover",
};

export default CardMedia;
