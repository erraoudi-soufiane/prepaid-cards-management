import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Select,
} from "@chakra-ui/react";
import FormControlComponent from "./FormControlComponent";

const CreateCardForm = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"leftSide" "RightSide"`,
          lg: `"leftSide RightSide"`,
        }}
        bg="#ffffff"
        borderRadius={14}
        gap={10}
        paddingY={4}
        paddingX={6}
        mb={"9px"}
      >
        <GridItem area={"leftSide"}>
          <FormControlComponent label="CIN/Passport" type="text" />
          <FormControlComponent label="Date de naissance" type="date" />
          <FormControl>
            <FormLabel>Sex</FormLabel>
            <Select placeholder="Select sex">
              <option>Homme</option>
              <option>Femme</option>
              <option>Autre</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem area={"RightSide"}>
          <FormControlComponent label="Nom du beneficiaire" type="text" />
          <FormControlComponent label="Telephone" type="number" />
          <FormControlComponent label="Entreprise" type="text" />
        </GridItem>
      </Grid>
    </>
  );
};

export default CreateCardForm;
