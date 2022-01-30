import { Button } from "@chakra-ui/react";
import React from "react";

export default function NavbarMenuBtn(props) {
  return (
    <Button
      {...props}
      bg="none"
      fontWeight="light"
      fontSize="small"
      color="gray.400"
      w={16}
      h="full"
      borderRadius=""
      _hover={{ bg: "none", color: "black" }}
      _active={{ color: "gray.400" }}
      _focus={{
        boxShadow: "0 -4px 0 0 #2FC395 inset",
        color: "black",
      }}
      
    >
      {props.text}
    </Button>
  );
}
