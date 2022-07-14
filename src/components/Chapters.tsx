import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

interface ChaptersProps {
  data: any[];
}

const Chapters: React.FC<ChaptersProps> = ({ data }) => {
  return (
    <Box>
      {data!.map((t) => {
        return (
          <Box key={t.topic_id} mt={20} mb={100}>
            <Heading size="lg">{t.title}</Heading>
            {t.chapters.map((c) => {
              return (
                <Box key={c.chapter_id} mt={30}>
                  <Heading size="md">{c.heading}</Heading>
                  <Text mt={5}>{c.text}</Text>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};
export default Chapters;
