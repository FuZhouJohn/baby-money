import { useMount } from "ahooks";
import { useHistory } from "react-router-dom";

export default function NoMatch() {
  const history = useHistory();
  useMount(() => {
    setTimeout(() => {
      history.push({ pathname: "/dash/money" });
    }, 2000);
  });
  return <div>查无此页，返回中</div>;
}
