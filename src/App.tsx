import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      height="100vh"
      templateRows="auto 1fr"
    >
      <GridItem area="nav" height="100%">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" height="100%">
          <Aside />
        </GridItem>
      </Show>

      <GridItem area="main" bg="#F5F5F5" padding={3} flex="1" height="1fr">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
