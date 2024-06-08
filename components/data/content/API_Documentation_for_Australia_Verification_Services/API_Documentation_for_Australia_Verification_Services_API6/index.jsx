import { GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
const API_Documentation_for_Australia_Verification_Services_API6 = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem h="100%" pos="sticky" top="20" w={{ base: "", xl: "40vw" }}>
            <API_Documentation_for_Australia_Verification_Services />
          </GridItem>
          <GridItem w={{ base: "", xl: "40vw" }}></GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <API_Documentation_for_Australia_Verification_Services />
          </GridItem>
        </>
      )}
    </>
  );
};

export default API_Documentation_for_Australia_Verification_Services_API6;

import {
  Code,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const API_Documentation_for_Australia_Verification_Services = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        API Documentation for Australia Verification Services
      </Heading>
      <Text>
        This document provides a guide on how to use the API endpoints available
        for various verification services in Australia, such as visa, passport,
        citizenship, and more. The general setup and request structure are
        explained below, followed by specific endpoint instructions.
        <br />
        <Text fontWeight="600" fontSize="16">
          Common Setup:
        </Text>
        Base URL
        <br />
        All API requests should be made to the following base URL:
        <br />
        Copy code &nbsp;
        <Code>{`{{ BaseURL }}`}</Code>&nbsp;
        <br />
        <Text fontWeight="600" fontSize="16">
          Authentication
        </Text>
        All requests require an Authorization header with a valid access token:
        <br />
        css
        <br /> Copy code
        <br />
        Authorization: &nbsp;
        <Code>{`{{ accessToken }}`}</Code>&nbsp;
        <br /> Headers
        <br />
        The following headers must be included in all requests:
        <br />
        makefile
        <br />
        Copy code
        <br /> accept: application/json
        <br /> Content-Type: application/json
        <br />
        Authorization: &nbsp;
        <Code>{`{{ accessToken }}`}</Code>&nbsp;
      </Text>
    </VStack>
  );
};
