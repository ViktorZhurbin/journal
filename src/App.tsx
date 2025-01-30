import { MantineProvider, createTheme } from "@mantine/core";
import { Editor } from "./components/Editor/Editor";

const theme = createTheme({
	/** Put your mantine theme override here */
});

export const App = () => {
	return (
		<MantineProvider theme={theme}>
			<Editor />
		</MantineProvider>
	);
};
