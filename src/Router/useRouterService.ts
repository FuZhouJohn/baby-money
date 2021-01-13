import { useEffect, useState } from "react";
import getServiceToken from "../Tools/getServiceToken";
import { useMount, useSessionStorageState } from "ahooks";

export const RouterService = getServiceToken(useRouterService);

export default function useRouterService() {
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [stored, setStored] = useSessionStorageState<boolean>(
    "firstLoad",
    true
  );
  useMount(() => {
    if (stored !== undefined) {
      setFirstLoad(stored);
    }
  });
  useEffect(() => {
    if (firstLoad !== stored) {
      setStored(firstLoad);
    }
  }, [firstLoad, setStored, stored]);

  return {
    firstLoad,
    setFirstLoad,
  };
}
