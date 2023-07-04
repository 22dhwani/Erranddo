import { useState } from "react";

import "../../styles/ToggleBar.css";

const TogglerBar = (props: { status: boolean }) => {
  const [status, setStatus] = useState<boolean>(props.status);

  const [statusChange, setStatusChange] = useState(false);
  const onStatusChange = (status: boolean) => {
    if (status) {
      console.log("Active");
      setStatus((prevStatus) => !prevStatus);
    } else {
      console.log("InActive");
      setStatus((prevStatus) => !prevStatus);
    }
  };

  const statusHandler = () => {
    onStatusChange(!status);
  };

  return (
    <div>
      <label className="switch">
        {status && (
          <input
            type="checkbox"
            checked={status === true}
            onClick={statusHandler}
          />
        )}
        {!status && <input type="checkbox" onClick={statusHandler} />}
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default TogglerBar;
