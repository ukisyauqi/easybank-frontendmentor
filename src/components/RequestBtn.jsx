import { Button } from "@chakra-ui/react";
import React from "react";

export default function RequestBtn(props) {
  return (
    <Button
      color="white"
      borderRadius="full"
      bgGradient="linear(to-r, green.300, teal.300)"
      fontSize="sm"
      fontWeight="normal"
      px={8}
      _hover={{ bgGradient: "linear(to-r, green.200, teal.200)" }}
      _active={{ bgGradient: "linear(to-r, green.300, teal.300)"}}
      {...props}
    >
      Request invite
    </Button>
  );
}
