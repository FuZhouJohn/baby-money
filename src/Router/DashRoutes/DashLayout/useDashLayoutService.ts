import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import * as React from "react";
interface MatchParams {
  key: string;
}

export default function useDashLayoutService() {
  const match = useRouteMatch<MatchParams>("/dash/:key");
  const history = useHistory();
  const [dashKey, setDashKey] = useState<string>(match?.params?.key || "money");
  const jumpRouteByKey = (event: React.SyntheticEvent, value: string) => {
    setDashKey(value);
    history.push(`/dash/${value}`);
  };
  return {
    dashKey,
    setDashKey,
    jumpRouteByKey,
  };
}
