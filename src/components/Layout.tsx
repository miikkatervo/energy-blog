import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "./NavBar";
import SideBar from "./SideBar";
import { WrapperVariant, Wrapper } from "./Wrapper";
import useMediaQuery from "../hooks/useMediaQuery";

interface LayoutProps {
  variant?: WrapperVariant;
  children?: React.ReactNode;
  data: any[];
}

export const Layout: React.FC<LayoutProps> = ({ children, variant, data }) => {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <NavBar isDesktop={isDesktop} />
      {isDesktop ? (
        <Flex>
          <SideBar data={data} />
          <Box ml={"5em"} mr={"5em"}>
            <Wrapper variant={variant}>{children}</Wrapper>
          </Box>
        </Flex>
      ) : (
        <Box ml={"3em"} mr={"3em"}>
          <Wrapper variant={variant}>{children}</Wrapper>
        </Box>
      )}
    </>
  );
};
