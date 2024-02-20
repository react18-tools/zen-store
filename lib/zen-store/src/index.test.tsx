import { describe, test } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import useZenStore from ".";

function Component1() {
	const [count, setCount] = useZenStore<number>("count", 0);
	return (
		<div>
			<input
				data-testid="input"
				onChange={e => {
					setCount(parseInt(e.target.value));
				}}
				type="number"
				value={count}
			/>
		</div>
	);
}

function Component2() {
	const [count] = useZenStore<number>("count");
	return <h1 data-testid="display">{count}</h1>;
}

describe("ZenStore", () => {
	test("check state update to multiple components", async ({ expect }) => {
		render(<Component1 />);
		render(<Component2 />);
		await act(() => fireEvent.input(screen.getByTestId("input"), { target: { value: 5 } }));
		expect(screen.getByTestId("display").textContent).toBe("5");
	});
});
