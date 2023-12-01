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
        <Link to="/dashboard">Dashboard</Link>
      </Button>

      <Button
        leftIcon={<PlusSquareIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        <Link to="/createCards">Create Cards</Link>
      </Button>

      <Button
        leftIcon={<InfoOutlineIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        <Link to="/">MyCards</Link>
      </Button>

      <Button
        leftIcon={<CalendarIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        <Link to="/manageCards">Manage Cards</Link>
      </Button>

      <Button
        leftIcon={<TimeIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        <Link to="/bill Payment">Bill Payment</Link>
      </Button>

      <Button
        leftIcon={<SettingsIcon />}
        borderRadius={"14px"}
        colorScheme="teal"
        variant="ghost"
        justifyContent="flex-start"
      >
        <Link to="/settings">Settings</Link>
      </Button>
    </Stack>
  );
};

export default Aside;
