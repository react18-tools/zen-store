"use client";

import useZenStore from "zen-store";

export default function Display() {
	const [count] = useZenStore<number>("count");
	return (
		<div>
			<h2>Client component 2</h2>
			<b>{count}</b>
		</div>
	);
}
