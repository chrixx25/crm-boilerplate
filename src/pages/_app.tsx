import { useState } from "react";

import type { AppProps } from "next/app";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import ModalProvider from "mui-modal-provider";
import { SnackbarProvider } from "notistack";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Meta from "@/components/Meta";
import UserProvider from "@/contexts/UserProvider";
import Snackbar from "@/components/Snackbar";
import TogglerProvider, { initialState } from "@/contexts/TogglerProvider";
// import { wrapper } from "redux/store";
import theme from "@/utils/theme";

const MyApp = (props: AppProps): React.ReactElement => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
          },
        },
      })
  );

  const {
    Component,
    pageProps: { dehydratedState, user, ...pageProps },
  } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <Meta />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider
            maxSnack={1}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            Components={{
              success: Snackbar,
              error: Snackbar,
            }}
          >
            <UserProvider initialValue={user}>
              <ModalProvider>
                <TogglerProvider initialState={initialState}>
                  <Component {...pageProps} />
                </TogglerProvider>
              </ModalProvider>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
