import * as React from "react";
import profileLogo from "../../../../assets/img/profileLogo.png";
import s from "./ProfileNameAndPhoto.module.css";
import { SvgSelectors } from "../../../common/SvGSelectors/SvgSelectors";
import { PhotosProfileType } from "../../../../type";

type ProfileNameAndPhotoType = {
  name: string | null;
  photo: PhotosProfileType | null;
  isOwner?: boolean;
  savePhoto?: (photo: File) => void;
};

export const ProfileNameAndPhoto = (props: ProfileNameAndPhotoType) => {
  const onMainPhotoSelected = (e: any) => {
    if (e.target.files && e.target.files.length && props.savePhoto) {
      const file = e.target.files[0];
      props.savePhoto(file);
    }
  };

  return (
    <div className={s.blockNamePhoto}>
      <div>
        <img
          className={s.avatar}
          src={props.photo?.large ? props.photo.large : profileLogo}
          alt={"profileLogo"}
        />
        {props.isOwner && (
          <label className={s.addPhoto}>
            <div className={s.svgSelector}>
              <SvgSelectors svgImage="ADD_PHOTO" />
            </div>
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              accept=".jpg, .jpeg, .png, .gif, .bmp"
              onChange={onMainPhotoSelected}
            />
          </label>
        )}
      </div>
      <span className={s.firstName}> {props.name} </span>
    </div>
  );
};
