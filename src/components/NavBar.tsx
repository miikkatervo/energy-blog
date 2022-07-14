import { Flex, Heading, Link, Text, Box } from "@chakra-ui/react";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="#107dac" p={4} height={20}>
      <Flex flex={1} m="auto" align="center" maxW={1000}>
        <NextLink href="/">
          <Link>
            <Heading color="white">
              Our Shift to Clean Energy (In a Nutshell)
            </Heading>
          </Link>
        </NextLink>
        <Box height="100%" position="relative" ml={3}>
          <Box mt={4}>
            <Text color="white">By Miikka Tervo</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
