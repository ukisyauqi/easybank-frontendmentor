import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";


export default function CardArticle(props) {
  return (
    <Box w="230px" h="355px" borderRadius="md" bg="white" overflow="hidden" {...props}>
      <Image src={props.imgSrc} h="171px" />
      <Box p="20px">
        <Text fontSize="xs" color="gray.400">
          {props.author}
        </Text>
        <Link
          fontSize="md"
          lineHeight="shorter"
          mt="5px"
          display="inline-block"
          _hover={{
            color:"teal.400"
          }}
        >
          {props.title}
        </Link>
        <Text
          fontSize="sm"
          color="gray.400"
          mt="10px"
          noOfLines={4}
          lineHeight="shorter"
        >
          {props.description}
        </Text>
      </Box>
    </Box>
  );
}
