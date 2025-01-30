import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { navigate } from "wouter/use-browser-location";
import { addRecord } from "../../db/records/crud";

export const CreateButton = () => {
	const onClick = () => {
		const recordId = addRecord();

		navigate(`/${recordId}`);
	};

	return (
		<Button leftSection={<IconPlus />} onClick={onClick}>
			New
		</Button>
	);
};
