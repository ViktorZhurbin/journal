import { id } from "@instantdb/react";
import { db } from "../instant";

function addEntry(text = "") {
	const recordId = id();

	db.transact(
		db.tx.entries[recordId].update({
			text,
			createdAt: new Date().toISOString(),
		}),
	);

	return recordId;
}

function updateEntry(recordId: string, text: string) {
	db.transact(
		db.tx.entries[recordId].update({
			text,
			updatedAt: new Date().toISOString(),
		}),
	);
}

function deleteEntry(recordId: string) {
	db.transact(db.tx.entries[recordId].delete());
}

export { addEntry, updateEntry, deleteEntry };
