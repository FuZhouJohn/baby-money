import { useState } from "react";
import getServiceToken from "../Tools/getServiceToken";

export const RouterService = getServiceToken(useRouterService);

export default function useRouterService() {
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  return {
    firstLoad,
    setFirstLoad,
  };
}
