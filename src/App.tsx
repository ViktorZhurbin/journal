import { Button, MantineProvider, Title, createTheme } from "@mantine/core";
import { useState } from "react";

const theme = createTheme({
	/** Put your mantine theme override here */
});

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<MantineProvider theme={theme}>
			<Title>Vite + React</Title>

			<Button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</Button>
		</MantineProvider>
	);
};
