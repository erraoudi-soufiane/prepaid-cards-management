import {
  EmailIcon,
  ArrowForwardIcon,
  AddIcon,
  CalendarIcon,
  DragHandleIcon,
  SettingsIcon,
  PlusSquareIcon,
  TimeIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { Button, ButtonGroup, IconButton, Stack } from "@chakra-ui/react";
import React from "react";

const Aside = () => {
  return (
    <Stack paddingX={"20px"} paddingY={"50px"} spacing={2}>
      <Button
        leftIcon={<DragHandleIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        Dashboard
      </Button>
      <Button
        leftIcon={<PlusSquareIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        Create Cards
      </Button>
      <Button
        leftIcon={<InfoOutlineIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        MyCards
      </Button>
      <Button
        leftIcon={<CalendarIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        Manage Cards
      </Button>
      <Button
        leftIcon={<TimeIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        Bill Payment
      </Button>
      <Button
        leftIcon={<SettingsIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        Settings
      </Button>
    </Stack>
  );
};

export default Aside;
