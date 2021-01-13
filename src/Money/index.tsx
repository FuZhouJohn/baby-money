import { ReactComponent as TestIcon } from "assets/svg/test1.svg";
import { SvgIcon } from "@material-ui/core";
export default function Money() {
  return (
    <div>
      Money
      <SvgIcon
        component={TestIcon}
        viewBox="0 0 1024 1024"
        style={{ fontSize: 200 }}
      ></SvgIcon>
    </div>
  );
}
