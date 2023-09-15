import { useState } from "react";

import "../../styles/ToggleBar.css";

const TogglerBar = (props: { status: boolean; key: string }) => {
  // console.log(props.status, "dfs");
  const [status, setStatus] = useState<boolean>(props.status);

  const onStatusChange = (status: boolean) => {
    if (status) {
      setStatus((prevStatus) => !prevStatus);
    } else {
      setStatus((prevStatus) => !prevStatus);
    }
  };

  const statusHandler = () => {
    onStatusChange(!status);
  };

  // console.log(status, props.key);
  return (
    <div>
      <label className="switch" htmlFor={props.key}>
        <input
          type="checkbox"
          checked={status}
          onClick={statusHandler}
          key={props.key}
        />

        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default TogglerBar;
