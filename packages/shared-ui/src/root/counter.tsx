"use client";

import useZenStore from "zen-store";

export default function Counter() {
	const [count, setCount] = useZenStore("count", 0);
	return (
		<div>
			<h2>Clinet component 1</h2>
			<input
				onChange={e => {
					setCount(parseInt(e.target.value.trim()));
				}}
				type="number"
				value={count}
			/>
		</div>
	);
}
