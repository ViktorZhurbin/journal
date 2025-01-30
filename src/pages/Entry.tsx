import { Editor } from "../components/Editor/Editor";
import { db } from "../db/instant";
import { updateEntry } from "../db/records/crud";

export function Entry({ entryId }: { entryId: string }) {
	const { isLoading, error, data } = db.useQuery({
		entries: {
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

	const { text } = data.entries[0] ?? {};

	const handleUpdate = (text: string) => {
		updateEntry(entryId, text);
	};

	return (
		<div>
			<Editor content={text} onUpdate={handleUpdate} />
		</div>
	);
}
