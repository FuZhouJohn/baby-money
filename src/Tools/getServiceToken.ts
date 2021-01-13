import { createContext } from "react";

export default function getServiceToken<T>(
  useFunc: (...args: any) => T,
  initialData: T | undefined = undefined
) {
  return createContext(initialData as T);
}
