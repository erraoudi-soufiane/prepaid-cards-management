import { ChevronRightIcon } from "@chakra-ui/icons";
import bankOfAfricaLogo from "../assets/bankOfAfricaLogo.jpg";
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  return (
    <HStack padding={3} justifyContent={"space-between"}>
      <HStack>
        <Image src={bankOfAfricaLogo} htmlHeight="72px" htmlWidth="220px" />
        <Breadcrumb
          marginLeft={4}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">My Projects</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>
      <HStack>
        <Wrap>
          <WrapItem>
            <Avatar bg="#cbd5e0" size="md" name="ERRAOUDI Soufiane" />
          </WrapItem>
        </Wrap>
      </HStack>
    </HStack>
  );
};

export default NavBar;
