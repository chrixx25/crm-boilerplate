import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useAuth } from "react-query/mutations";
import Form from "components/Form";
import OutsideLayout from "components/OutsideLayout";
import Typography from "components/Typography";

import { initialValues, validationSchema } from "./utils";

interface SignInParams {
  username: string;
  password: string;
}

const SignIn = (): React.ReactElement => {
  const signIn = useAuth();

  const methods = useForm({
    shouldUnregister: false,
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = (values: SignInParams): void => {
    signIn.mutate(values);
  };

  return (
    <OutsideLayout>
      <Form<SignInParams> {...methods} onSubmit={handleSubmit}>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <Image
              src="/images/AwraSafely_Sidebar_Logo.png"
              alt="AwraSafely_Sidebar_Logo.png"
              width={353.64}
              height={91.5}
            />
            <Typography
              sx={{
                "& > span": {
                  fontWeight: "fontWeightBold",
                },
              }}
              fontSize={14}
              fontWeight="fontWeightNormal"
            >
              We <span> Fight,</span> we <span>Edulate</span> we{" "}
              <span>Celebrate.</span>
            </Typography>
          </Box>
          {signIn.isError && (
            <Alert severity="error">
              {(signIn.isError && signIn.error?.message) ||
                "Something went wrong."}
            </Alert>
          )}
          <Form.TextField name="username" label="Email" placeholder="Email" />
          <Form.TextField
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
          />
          <Button
            type="submit"
            size="small"
            sx={{ p: 1.5 }}
            fullWidth
            disabled={signIn.isLoading}
          >
            Log in
          </Button>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Link href="/reset-password/request" passHref>
              <Typography
                component="a"
                sx={{ textDecoration: "none" }}
                color="info.main"
              >
                Forgot Password?
              </Typography>
            </Link>
          </Box>
        </Stack>
      </Form>
    </OutsideLayout>
  );
};

export default SignIn;
