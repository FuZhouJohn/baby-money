import { useContext } from "react";
import { RouterService } from "../useRouterService";

export default function useWelcomeService() {
  const routerService = useContext(RouterService);

  return {
    routerService,
  };
}
