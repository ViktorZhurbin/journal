import { Affix } from "@mantine/core";
import { CreateButton } from "../components/CreateButton/CreateButton";
import { db } from "../db/instant";

export function Entries() {
	const { isLoading, error, data } = db.useQuery({ entries: {} });
	if (isLoading) {
		return "Loading...";
	}

	if (error) {
		return <div>Error querying data: {error.message}</div>;
	}

	const { entries } = data;

	return (
		<div>
			{entries.map((entry) => (
				<div key={entry.id}>{entry.text}</div>
			))}
			<Affix position={{ bottom: 20, right: 20 }}>
				<CreateButton />
			</Affix>
		</div>
	);
}
