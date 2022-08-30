import type { TitleProps, CachedIconProps, PageHeaderProps } from "./types";

import MuiCachedIcon from "@mui/icons-material/Cached";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import IconButton from "@mui/material/IconButton";
import MuiLink from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { nanoid } from "@reduxjs/toolkit";
import { compact, concat } from "lodash";
import Link from "next/link";

import SearchInput from "./SearchInput";

const Breadcrumb = styled(Breadcrumbs)(({ theme }) => ({
  flexGrow: 1,
  color: theme.palette.text.primary,
}));

const Title = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isFirst",
})<TitleProps>(({ theme, isFirst }) => ({
  fontWeight: isFirst
    ? theme.typography.fontWeightBold
    : theme.typography.fontWeightRegular,
}));

const TitleLink = styled(MuiLink, {
  shouldForwardProp: (prop) => prop !== "isFirst",
})<TitleProps>(({ theme, isFirst }) => ({
  fontWeight: isFirst
    ? theme.typography.fontWeightBold
    : theme.typography.fontWeightRegular,
}));

const CachedIcon = styled(MuiCachedIcon, {
  shouldForwardProp: (prop) => prop !== "isLoading",
})<CachedIconProps>(({ theme, isLoading }) => ({
  ...(isLoading
    ? {
        animation: "spin 2s linear infinite",
        "@keyframes spin": {
          "0%": {
            transform: "rotate(360deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        color: theme.palette.text.disabled,
      }
    : { color: theme.palette.common.black }),
}));

const PageHeader = (props: PageHeaderProps): React.ReactElement => {
  const { title, titleLinks, SearchProps, RefreshProps, children } = props;

  return (
    <Paper>
      <Toolbar sx={{ gap: 2 }}>
        <Breadcrumb separator={<ChevronRightIcon />} aria-label="breadcrumb">
          {title &&
            compact(
              concat([], title).map((text, index) => (
                <Title key={nanoid()} isFirst={!!(index === 0)}>
                  {text}
                </Title>
              ))
            )}
          {titleLinks.length > 0 &&
            titleLinks.map((titleLink, index) => {
              if (!titleLink.link)
                return (
                  <Title key={nanoid()} isFirst={!!(index === 0)}>
                    {titleLink.text}
                  </Title>
                );

              return (
                <Link key={nanoid()} href={titleLink.link} passHref>
                  <TitleLink
                    underline="hover"
                    color="text.primary"
                    isFirst={!!(index === 0)}
                  >
                    {titleLink.text}
                  </TitleLink>
                </Link>
              );
            })}
        </Breadcrumb>
        {SearchProps && <SearchInput {...SearchProps} />}
        {children}
        {RefreshProps && (
          <Tooltip title="Refresh" arrow>
            <span style={{ cursor: "not-allowed" }}>
              <IconButton aria-label="refresh" {...RefreshProps}>
                <CachedIcon
                  fontSize="inherit"
                  isLoading={!!RefreshProps.disabled}
                />
              </IconButton>
            </span>
          </Tooltip>
        )}
      </Toolbar>
    </Paper>
  );
};

PageHeader.defaultProps = {
  title: "",
  titleLinks: [],
  hasSearch: false,
  hasRefresh: false,
};

export default PageHeader;
