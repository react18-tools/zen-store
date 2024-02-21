import { useCallback, useSyncExternalStore } from "react";

interface ZenStore {
	listeners: (() => void)[];
	value: unknown;
}

type SetterArgType<T> = T | ((prevState: T) => T);

declare global {
	// eslint-disable-next-line no-var -- var required for global declaration.
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
			const store = globalThis.zenStore[key] as ZenStore;
			store.value = val instanceof Function ? val(store.value as T) : val;
			for (const listener of store.listeners) listener();
		},
		[key],
	);
	const subscribe = useCallback(
		(listener: () => void) => {
			if (!globalThis.zenStore[key]) globalThis.zenStore[key] = { listeners: [], value };
			const store = globalThis.zenStore[key] as ZenStore;
			store.listeners.push(listener);
			return () => {
				store.listeners = store.listeners.filter(l => l !== listener);
			};
		},
		[key, value],
	);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- temp fix
	const getSnapshot = () => (globalThis.zenStore[key]?.value ?? value) as T;

	const val = useSyncExternalStore<T>(subscribe, getSnapshot);
	return [val, setStoreState];
}
