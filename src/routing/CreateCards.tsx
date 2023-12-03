import React from "react";
import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import CreateCardForm from "../components/CreateCardForm";

const CreateCards = () => {
  return (
    <Box height="100%" overflowY="auto">
      <Grid
        templateAreas={{
          base: `"cardDetails" "insights"`,
          lg: `"preActivated" "addNew"`,
        }}
        padding={3}
        height={"100%"}
        gap={2}
      >
        <GridItem area="preActivated" minHeight={"100px"}>
          <Text fontSize="3xl" mb={"8px"}>
            preActivated
          </Text>
          <Box bg="#ffffff" borderRadius={14} mb={"9px"} height={"100px"}></Box>
          <Stack direction="row" spacing={4} justifyContent={"right"}>
            <Button borderRadius={22} colorScheme="teal" variant="solid">
              Activate
            </Button>
            <Button
              borderRadius={22}
              bg={"#ffffff"}
              variant="solid"
              color={"#034381"}
            >
              Discard
            </Button>
          </Stack>
        </GridItem>

        <GridItem area="addNew" minHeight={"400px"}>
          <Text fontSize="3xl" mb={"8px"}>
            Add New Card
          </Text>
          <CreateCardForm />
          <Stack direction="row" spacing={4} justifyContent={"right"}>
            <Button borderRadius={22} colorScheme="teal" variant="solid">
              Activate
            </Button>
            <Button
              borderRadius={22}
              bg={"#ffffff"}
              variant="solid"
              color={"#034381"}
            >
              Discard
            </Button>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CreateCards;
