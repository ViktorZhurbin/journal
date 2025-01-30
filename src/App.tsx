import { MantineProvider, createTheme } from "@mantine/core";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const theme = createTheme({
	/** Put your mantine theme override here */
});

export const App = () => {
	return (
		<MantineProvider theme={theme}>
			<RouterProvider router={router} />
		</MantineProvider>
	);
};
