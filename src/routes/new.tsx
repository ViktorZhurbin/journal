import { createFileRoute } from "@tanstack/react-router";
import { Editor } from "../components/Editor/Editor";

export const Route = createFileRoute("/new")({
	component: NewEntry,
});

function NewEntry() {
	return (
		<div>
			<Editor />
		</div>
	);
}
