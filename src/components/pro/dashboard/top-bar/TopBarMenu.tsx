import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../UI/Button";
import { useState } from "react";
import LogoutModal from "../../../../layout/home/LogoutModal";
import styles from "../../../../styles/TopBarMenu.module.css";
import Modal from "../../../../layout/home/Modal";

function TopBarMenu(props: { onClose: () => void }) {
  const [openLogout, setopenLogout] = useState(false);
  const navigate = useNavigate();
  const id = JSON.parse(localStorage.getItem("token") ?? "").data?.id;
  console.log(id);
  const buttonClassName =
    "bg-white  w-full  border-none border-b-[0.5px] border-b-slate-500 rounded-lg text-left";
  const menuClassName = `fixed bg-white text-textColor drop-shadow-lg  shadow-black lg:top-[10.134316353887399vh] md:top-[8.134316353887399vh] xs:top-[7.634316353887399vh] delay-100 origin-top ease-in md:right-[1vw] xs:right-[5vw]  md:w-[14.346354166666666vw] xs:z-50 xs:w-[50vw]  rounded-xl ${styles.menu}`;
  return (
    <div className={menuClassName}>
      {openLogout && (
        <Modal className="!py-2">
          <LogoutModal
            onCancel={() => {
              setopenLogout(false);
            }}
          />
        </Modal>
      )}
      <Button
        variant="outlined"
        size="big"
        buttonClassName={buttonClassName}
        centerClassName=" items-start"
        onClick={() => {
          props.onClose();
          navigate(`/home/admin-user-managment/${id}`, {
            state: { breadcrumb: "Hello" },
          });
        }}
        children="My Profile"
      />
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
