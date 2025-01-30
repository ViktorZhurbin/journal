import React, { Suspense } from "react";

const DevTools = import.meta.env.DEV
	? () => null // Render nothing in production
	: React.lazy(() =>
			// Lazy load in development
			import("@tanstack/router-devtools").then((res) => ({
				default: res.TanStackRouterDevtools,
			})),
		);

export const TanStackRouterDevtools = () => {
	return (
		<Suspense>
			<DevTools />
		</Suspense>
	);
};
