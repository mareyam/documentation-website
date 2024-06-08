import {
  GridItem,
  useBreakpointValue,
  useClipboard,
  useColorMode,
  Code,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Box,
  IconButton,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";

const Registration = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem h="100%" pos="sticky" top="20" w={{ base: "", xl: "40vw" }}>
            <Details />
          </GridItem>
          <GridItem w={{ base: "", xl: "40vw" }}>
            <Example />
          </GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <Details />
            <Example />
          </GridItem>
        </>
      )}
    </>
  );
};

export default Registration;

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Registration
      </Heading>
      <Text w="full">
        Endpoint: &nbsp;
        <Code>{`POST /v1/verification/biometricsregistration`}</Code>
        &nbsp;
      </Text>
    </VStack>
  );
};

const Example = () => {
  const jsonCode = `{
Header:
json
Copy code
{
  "accept": "application/json",
  "Authorization": "{{accessToken}}"
}
Body (form-data):
form
Copy code
username=String
image=@/path/to/your/image.jpg;type=image/jpeg

  }`;

  const response = `{
200 OK: Registration successful.
401 Unauthorized: Invalid or missing access token.
Example cURL:

bash
Copy code
curl -X 'POST' \
  '{{baseUrl}}/v1/verification/biometricsregistration' \
  -H 'accept: application/json' \
  -H 'Authorization: {{accessToken}}' \
  -F 'username=String' \
  -F 'image=@/path/to/your/image.jpg;type=image/jpeg'
  }`;

  const { onCopy, hasCopied } = useClipboard(JSON.stringify(jsonCode, null, 2));
  const [showTransition, setShowTransition] = useState(false);
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  const { colorMode } = useColorMode();

  useEffect(() => {
    setShowTransition(hasCopied);
  }, [hasCopied]);

  return (
    <VStack pos="relative" bgColor={bgColor} borderRadius="lg">
      <Code>Request:</Code>
      <SyntaxHighlighter
        customStyle={{
          height: "100%",
          width: "100%",
          backgroundColor: colorMode == "dark" ? "transparent" : "transparent",
        }}
        language="json"
        style={okaidia}
        wrapLongLines
      >
        {jsonCode}
      </SyntaxHighlighter>
      <Code>Responses:</Code>
      <SyntaxHighlighter
        customStyle={{
          height: "100%",
          width: "100%",
          backgroundColor: colorMode == "dark" ? "transparent" : "transparent",
        }}
        language="json"
        style={okaidia}
        wrapLongLines
      >
        {response}
      </SyntaxHighlighter>
      <Box pos="absolute" top="4" right={{ base: "-4", xl: "2", "2xl": "2" }}>
        <IconButton
          onClick={onCopy}
          aria-label={hasCopied ? "Copied" : "Copy"}
          icon={hasCopied ? <MdDone /> : <MdOutlineCopyAll />}
          bgColor="transparent"
          transition={showTransition ? "all 0.5s ease" : "none"}
        />
      </Box>
    </VStack>
  );
};

// 2. UMID SSN Verification
// Endpoint: POST /v1/verification/philippines/umidssn

// Request:

// json
// Copy code
// {
//   "documentNumber": "0111-2345678-9"
// }
// Responses:

// 200 OK: Verification successful.
// 401 Unauthorized: Invalid or missing access token.
// Example cURL:

// bash
// Copy code
// curl -X 'POST' \
//   '{{baseUrl}}/v1/verification/philippines/umidssn' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -H 'Authorization: {{accessToken}}' \
//   -d '{
//     "documentNumber": "0111-2345678-9"
//   }'