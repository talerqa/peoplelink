import * as React from "react";
import s from "./Profile.module.scss";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import { postData, ProfileType, UserType } from "../../type";
import { NavUserProfile } from "./NavUserProfile/NavUserProfile";

type ProfilePropsType = {
  profile: ProfileType | null;
  isOwner: boolean;
  posts: postData[];
  status: string;
  updateStatus: (status: string) => void;
  savePhoto: (photo: File) => void;
  users: UserType[];
  submitForm: any;
  error: string | null;
  closeErrorApp: () => void;
};

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        submitForm={props.submitForm}
        error={props.error}
        closeErrorApp={props.closeErrorApp}
      />
      <MyPostContainer profile={props.profile} isOwner={props.isOwner} />
      <NavUserProfile users={props.users} />
    </div>
  );
};

export default Profile;
