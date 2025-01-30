import { Affix } from "@mantine/core";
import { CreateButton } from "../components/CreateButton/CreateButton";
import { db } from "../db/instant";

export function Entries() {
	const { isLoading, error, data } = db.useQuery({ records: {} });
	if (isLoading) {
		return "Loading...";
	}

	if (error) {
		return <div>Error querying data: {error.message}</div>;
	}

	const { records } = data;

	return (
		<div>
			{records.map((record) => (
				<div key={record.id}>{record.text}</div>
			))}
			<Affix position={{ bottom: 20, right: 20 }}>
				<CreateButton />
			</Affix>
		</div>
	);
}
