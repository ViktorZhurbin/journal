import { i, init, InstaQLEntity } from "@instantdb/react";

// ID for app: Journal
const APP_ID = "9e68910e-a079-4b1e-9e52-571b0c55eebe";

// Optional: Declare your schema!
const schema = i.schema({
	entities: {
		records: i.entity({
			text: i.string(),
			createdAt: i.date(),
			updatedAt: i.date(),
		}),
	},
});

type Record = InstaQLEntity<typeof schema, "records">;

const db = init({ appId: APP_ID, schema });

export { db };

export type { Record };
