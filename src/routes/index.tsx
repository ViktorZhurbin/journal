import { Affix, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { db } from "../db/instant";

export const Route = createFileRoute("/")({
	component: Entries,
});

function Entries() {
	const { isLoading, error, data } = db.useQuery({ records: {} });
	if (isLoading) {
		return;
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
				<Button leftSection={<IconPlus />} component={Link} href="/new">
					New
				</Button>
			</Affix>
		</div>
	);
}
