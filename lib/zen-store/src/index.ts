import { useCallback, useSyncExternalStore } from "react";

interface ZenStore {
	listeners: (() => void)[];
	value: any;
}

type SetterArgType<T> = T | ((prevState: T) => T);

declare global {
	var zenStore: Record<string, ZenStore>;
}

globalThis.zenStore = {};

/**
 * Use this hook similar to `useState` hook.
 * The difference is that you need to pass a
 * unique key - unique across the app to make
 * this state accessible to all client components.
 *
 * @example
 * ```tsx
 * const [state, setState] = useZenStore<number>("counter", 1);
 * ```
 */
export default function useZenStore<T>(
	key: string,
	value?: T,
): [T, (val: SetterArgType<T>) => void] {
	const setStoreState = useCallback(
		(val: SetterArgType<T>) => {
			globalThis.zenStore[key].value =
				val instanceof Function ? val(globalThis.zenStore[key].value) : val;
			globalThis.zenStore[key].listeners.forEach(listener => listener());
		},
		[key],
	);
	const subscribe = useCallback(
		(listener: () => void) => {
			if (!globalThis.zenStore[key]) {
				globalThis.zenStore[key] = {
					listeners: [],
					value,
				};
			}
			globalThis.zenStore[key].listeners.push(listener);
			return () => {
				globalThis.zenStore[key].listeners = globalThis.zenStore[key].listeners.filter(
					l => l !== listener,
				);
			};
		},
		[key],
	);

	const getSnapshot = () => globalThis.zenStore[key]?.value ?? value;

	const val = useSyncExternalStore(subscribe, getSnapshot);
	return [val, setStoreState];
}
