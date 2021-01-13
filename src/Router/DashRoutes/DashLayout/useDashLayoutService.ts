import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as React from "react";

export default function useDashLayoutService(key: string) {
  const history = useHistory();
  const [dashKey, setDashKey] = useState<string>(key);
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
