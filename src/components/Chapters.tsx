import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

interface ChaptersProps {
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

const Chapters: React.FC<ChaptersProps> = ({ data }) => {
  const parseText = (text) => {
    const parsedText = text.split("\n").filter((x) => {
      return x.replace(/\s/g, "").length;
    });

    return parsedText;
  };

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
                  {parseText(c.text).map((p) => {
                    return (
                      <Box mt={5} mb={5}>
                        <p>{p}</p>
                      </Box>
                    );
                  })}
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
