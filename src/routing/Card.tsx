import { Box, Grid, GridItem, Show } from "@chakra-ui/react";

import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

const Card = () => {
  return (
    <Box height="100%" overflowY="auto">
      <Grid
        templateAreas={{
          base: `"cardDetails" "insights"`,
          lg: `"cardDetails insights" "infos infos" "transactions transactions"`,
        }}
        // templateColumns={{
        //   base: "1fr",
        //   lg: "250px 1fr",
        // }}
        padding={3}
        gap={4}
        height={"100%"}
      >
        <GridItem
          area="cardDetails"
          bg="#ffffff"
          borderRadius={14}
          minHeight={"300px"}
        >
          cardDetails
        </GridItem>

        <GridItem area="insights" bg="#ffffff" borderRadius={14}>
          insights
        </GridItem>

        <GridItem
          minHeight={"500px"}
          borderRadius={14}
          area="infos"
          bg="#ffffff"
        >
          infos
        </GridItem>
        <GridItem
          minHeight={"500px"}
          borderRadius={14}
          area="transactions"
          bg="#ffffff"
        >
          transactions
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Card;
