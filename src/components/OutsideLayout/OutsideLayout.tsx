import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

const OutsideLayout = ({ children }): React.ReactElement => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minHeight="100vh"
    position="relative"
    overflow="hidden"
  >
    <Card
      sx={{
        boxShadow: "0 2px 4px 0 #E5E5E5",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ px: 3 }}>{children}</CardContent>
    </Card>
    <Box mt={3}>
      <Image
        src="/images/signin/AWRA-SAFELY---CRM-LOG-IN---RSA.png"
        alt="AWRA-SAFELY---CRM-LOG-IN---RSA.png"
        width={626.33}
        height={147.49}
        objectFit="cover"
      />
    </Box>
    <Box
      sx={{
        transform: "scaleX(-1) rotate(180deg)",
      }}
      position="absolute"
      top={-100}
      left={-100}
      zIndex={-1}
    >
      <Image
        src="/images/signin/r1.png"
        alt="r1.png"
        width={334}
        height={334}
      />
    </Box>
    <Box position="absolute" bottom={-55} right={-55} zIndex={-1}>
      <Image
        src="/images/signin/r2.png"
        alt="r2.png"
        width={308}
        height={308}
      />
    </Box>
  </Box>
);

export default OutsideLayout;
