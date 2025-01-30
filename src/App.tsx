import { MantineProvider, createTheme } from "@mantine/core";
import { Route, Switch } from "wouter";
import { Entries } from "./pages/Entries";
import { Entry } from "./pages/Entry";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Switch>
        <Route path="/" component={Entries} />
        <Route path="/:entryId">
          {(params) => <Entry entryId={params.entryId} />}
        </Route>

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </MantineProvider>
  );
};
