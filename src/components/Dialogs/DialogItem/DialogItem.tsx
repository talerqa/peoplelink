import * as React from "react";
import s from "./DialogItem.module.scss";
import { NavLink } from "react-router-dom";

import profileLogo from "../../../assets/img/profileLogo.png";

type DialogItemType = {
  name: string;
  id: string;
};

const DialogItem: React.FC<DialogItemType> = (props: DialogItemType) => {
  const conditionChangeColorLink = (isActive: boolean) =>
    isActive ? s.nameActive : s.name;

  return (
    <div className={s.dialog}>
      <img className={s.image} src={profileLogo} alt="" />
      <NavLink to={"/dialogs/" + props.id} className={conditionChangeColorLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
