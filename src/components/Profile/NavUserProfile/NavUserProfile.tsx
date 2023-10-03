import * as React from "react";
import s from "./NavUserProfile.module.scss";
import profileLogo from "../../../assets/img/profileLogo.png";
import { useHistory } from "react-router-dom";
import { UserType } from "../../../type";

type Props = {
  users: UserType[];
};
export const NavUserProfile = (props: Props) => {
  const history = useHistory();
  const redirectToUsers = () => {
    history.push("/users");
  };

  const countUsers = 10;
  const firstUsers = props.users.slice(0, countUsers);

  return (
    <div className={s.navUserProfileBlock}>
      <p className={s.titleNav} onClick={redirectToUsers}>
        User
      </p>
      {firstUsers.map((user, index) => (
        <div className={s.user} key={index}>
          <img
            className={s.profileImg}
            src={user.photos.small != null ? user.photos.small : profileLogo}
            alt=""
          />
          <span className={s.nameUser}>{user.name}</span>
        </div>
      ))}
    </div>
  );
};
