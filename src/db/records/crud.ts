import { id } from "@instantdb/react";
import { db } from "../instant";

function addRecord(text = "") {
	const recordId = id();

	db.transact(
		db.tx.records[recordId].update({
			text,
			createdAt: new Date().toISOString(),
		}),
	);

	return recordId;
}

function updateRecord(recordId: string, text: string) {
	db.transact(
		db.tx.records[recordId].update({
			text,
			updatedAt: new Date().toISOString(),
		}),
	);
}

function deleteRecord(recordId: string) {
	db.transact(db.tx.records[recordId].delete());
}

export { addRecord, updateRecord, deleteRecord };
