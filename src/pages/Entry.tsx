import { Editor } from "../components/Editor/Editor";
import { db } from "../db/instant";
import { updateRecord } from "../db/records/crud";

export function Entry({ entryId }: { entryId: string }) {
	const { isLoading, error, data } = db.useQuery({
		records: {
			$: {
				where: {
					id: entryId,
				},
			},
		},
	});

	if (isLoading) {
		return "Loading...";
	}

	if (error) {
		return <div>Error querying data: {error.message}</div>;
	}

	const { text } = data.records[0] ?? {};

	const handleUpdate = (text: string) => {
		updateRecord(entryId, text);
	};

	return (
		<div>
			<Editor content={text} onUpdate={handleUpdate} />
		</div>
	);
}
