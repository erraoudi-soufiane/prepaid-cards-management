import {
  CalendarIcon,
  DragHandleIcon,
  SettingsIcon,
  PlusSquareIcon,
  TimeIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import CustomAsideButton from "./CustomAsideButton";

const Aside = () => {
  return (
    <Stack paddingX={"20px"} paddingY={"50px"} spacing={2}>
      <CustomAsideButton to="/dashboard" children="Dashboard" />

      {/* <NavLink to="/dashboard">
        <Button
          leftIcon={<DragHandleIcon />}
          borderRadius={"14px"}
          colorScheme="teal"
          variant="ghost"
          justifyContent="flex-start"
        >
          Dashboard
        </Button>
      </NavLink> */}

      <Button
        leftIcon={<PlusSquareIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        <NavLink to="/createCards">Create Cards</NavLink>
      </Button>

      <Button
        leftIcon={<InfoOutlineIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        <NavLink to="/">MyCards</NavLink>
      </Button>

      <Button
        leftIcon={<CalendarIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        <NavLink to="/manageCards">Manage Cards</NavLink>
      </Button>

      <Button
        leftIcon={<TimeIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        <NavLink to="/bill Payment">Bill Payment</NavLink>
      </Button>

      <Button
        leftIcon={<SettingsIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        <NavLink to="/settings">Settings</NavLink>
      </Button>
    </Stack>
  );
};

export default Aside;
