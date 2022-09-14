import { Flex, Heading, Link, Text, Box } from "@chakra-ui/react";
import NextLink from "next/link";

interface NavBarProps {
  isDesktop: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ isDesktop }) => {
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="#107dac" p={4} height={20}>
      <Flex flex={1} m="auto" align="center" maxW={1000}>
        <NextLink href="/">
          <Link>
            {isDesktop ? (
              <Heading color="white">
                Our Shift to Clean Energy (In a Nutshell)
              </Heading>
            ) : (
              <Heading as="h4" fontSize={16} color="white">
                Our Shift to Clean Energy (In a Nutshell)
              </Heading>
            )}
          </Link>
        </NextLink>
        <Box height="100%" position="relative" ml={3}>
          {isDesktop ? (
            <Box mt={4}>
              <Text color="white">By Miikka Tervo</Text>
            </Box>
          ) : (
            <Box mt={2}>
              <Text fontSize={12} color="white">
                By Miikka Tervo
              </Text>
            </Box>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};
