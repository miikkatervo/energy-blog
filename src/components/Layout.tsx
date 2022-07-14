import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "./NavBar";
import SideBar from "./SideBar";
import { WrapperVariant, Wrapper } from "./Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
  children?: React.ReactNode;
  data: any[];
}

export const Layout: React.FC<LayoutProps> = ({ children, variant, data }) => {
  return (
    <>
      <NavBar />
      <Flex>
        <SideBar data={data} />
        <Box ml={110}>
          <Wrapper variant={variant}>{children}</Wrapper>
        </Box>
      </Flex>
    </>
  );
};
