import Box from "@mui/material/Box";

const Content = ({ children }): React.ReactElement => (
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    {children}
  </Box>
);

export default Content;
