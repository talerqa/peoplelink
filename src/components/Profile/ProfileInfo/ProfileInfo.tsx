import * as React from 'react';

import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import {ProfileNameAndPhoto} from "./ProfileNameAndPhoto";
import {SvgSelectors} from "../../common/SvGSelectors/SvgSelectors";

type ProfileInfoProps = {
  profile: any
  isOwner: boolean
  status: string
  updateStatus: (status: string) => void
  savePhoto: (photo: File) => void
}

const ProfileInfo = (props: ProfileInfoProps) => {

  if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      props.savePhoto(file)
    }
  }

  return (
    <div className={s.item}>
      <ProfileNameAndPhoto name={props.profile.fullName} photo={props.profile.photos}/>
      {props.isOwner && <div>
          <label className={s.addPhoto}>
              <div  className={s.svgSelector}>
                  <SvgSelectors svgImage='ADD_PHOTO'/>
              </div>
              <input
                  type="file"
                  name='file'
                  id="file"
                  style={{display: 'none'}}
                  accept=".jpg, .jpeg, .png, .gif, .bmp"
                  onChange={onMainPhotoSelected}/>
          </label>
      </div>}
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>)
}

export default ProfileInfo;
