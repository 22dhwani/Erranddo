import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../UI/Button";
import { useState } from "react";
import LogoutModal from "../../../../layout/home/LogoutModal";
import styles from "../../../../styles/TopBarMenu.module.css";

function TopBarMenu(props: { onClose: () => void }) {
  const [openLogout, setopenLogout] = useState(false);
  console.log("sdfghdj");
  const buttonClassName =
    "bg-white  w-full  border-none border-b-[0.5px] border-b-slate-500 rounded-lg text-left hover:bg-slate-100";
  const menuClassName = `fixed bg-white text-textColor drop-shadow-lg  shadow-black lg:top-[10.134316353887399vh] md:top-[8.134316353887399vh] xs:top-[9.634316353887399vh] delay-100 origin-top ease-in xl:right-[6vw] lg:right-[8vw] xs:right-[5vw] xl:w-[15.346354166666666vw] lg:w-[18.346354166666666vw] md:w-[15.346354166666666vw] xs:z-50 xs:w-[50vw]  rounded-xl ${styles.menu}`;
  return (
    <div className={menuClassName}>
      {openLogout && (
        <LogoutModal
          onCancel={() => {
            setopenLogout(false);
          }}
        />
      )}

      <NavLink to="/settings/reset-password/">
        <Button
          variant="outlined"
          size="big"
          buttonClassName={buttonClassName}
          centerClassName=" items-start"
          children="Reset Password"
          onClick={() => props.onClose()}
        />
      </NavLink>
      <Button
        onClick={() => {
          setopenLogout(true);
        }}
        variant="outlined"
        size="big"
        buttonClassName={buttonClassName}
        centerClassName=" items-start"
        children="Logout"
      />
    </div>
  );
}

export default TopBarMenu;
