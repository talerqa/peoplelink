import * as React from "react";
import { useState } from "react";
import s from "./ProfileInfo.module.scss";
import { Preloader } from "../../Preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import { ProfileNameAndPhoto } from "./ProfileNameAndPhoto/ProfileNameAndPhoto";
import { ProfileType } from "../../../type";
import { ProfileDataForm } from "./ProfileDataForm/ProfileDataForm";
import { ProfileData } from "./ProfileData/ProfileData";

type ProfileInfoProps = {
  profile: ProfileType | null;
  isOwner: boolean;
  status: string;
  updateStatus: (status: string) => void;
  savePhoto: (photo: File) => void;
  submitForm: any;
  error: string | null;
  closeErrorApp: () => void;
};

export const ProfileInfo = (props: ProfileInfoProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.profileInfo}>
      <ProfileNameAndPhoto
        name={props.profile.fullName}
        photo={props.profile.photos}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
      />
      <ProfileStatus
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
      />
      {editMode ? (
        <ProfileDataForm
          isOwner={props.isOwner}
          profile={props.profile}
          submitForm={props.submitForm}
          editMode={() => setEditMode(!editMode)}
        />
      ) : (
        <ProfileData
          editMode={() => setEditMode(!editMode)}
          profile={props.profile}
          isOwner={props.isOwner}
          error={props.error}
          closeErrorApp={props.closeErrorApp}
        />
      )}
    </div>
  );
};
