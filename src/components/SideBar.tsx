import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

interface SideBarProps {
  data: {
    topic_id: number;
    title: string;
    chapters: {
      chapter_id: number;
      heading: string;
      text: string;
    }[];
  }[];
}

const SideBar: React.FC<SideBarProps> = ({ data }) => {
  return (
    <Box
      bg="gray.100"
      color="blue.900"
      width={350}
      height="100vh"
      position="sticky"
      top={20}
    >
      <Box float="right" ml={10} mr={7}>
        <Text fontSize={20} textAlign="center" m={4}>
          Chapters
        </Text>
        {data!.map((t) => {
          return (
            <Box
              key={t.topic_id}
              mb={8}
              borderWidth={2}
              borderColor="blue.900"
              borderRadius={5}
              p={4}
            >
              <Heading size={"sm"} fontSize={20}>
                {t.title}
              </Heading>
              <UnorderedList>
                {t.chapters.map((c) => {
                  return (
                    <Box key={c.chapter_id} mt={2}>
                      <ListItem fontSize={15}>
                        <b>{c.heading}</b>
                      </ListItem>
                    </Box>
                  );
                })}
              </UnorderedList>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default SideBar;
