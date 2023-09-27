import * as React from 'react';
import {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {ProfileNameAndPhoto} from "./ProfileNameAndPhoto/ProfileNameAndPhoto";
import {ContactsProfileType, ProfileType} from "../../../type";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";

type ProfileInfoProps = {
  profile: ProfileType | null
  isOwner: boolean
  status: string
  updateStatus: (status: string) => void
  savePhoto: (photo: File) => void
}

const ProfileInfo = (props: ProfileInfoProps) => {

  const [editMode, setEditMode] = useState<boolean>(false)

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={s.profileInfo}>
      <ProfileNameAndPhoto name={props.profile.fullName}
                           photo={props.profile.photos}
                           isOwner={props.isOwner}
                           savePhoto={props.savePhoto}/>

      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

      {editMode ?
        <ProfileDataForm
          isOwner={props.isOwner}
          profile={props.profile}
          editMode={() => setEditMode(!editMode)}/> :
        <ProfileData
          editMode={() => setEditMode(!editMode)}
          profile={props.profile}
          isOwner={props.isOwner}/>
      }
    </div>)
}


const ProfileData = (props: any) => {
  return <div>

    {props.isOwner && <div>
        <button onClick={props.editMode}>EDIT</button>
    </div>
    }
    Full Name: {props.profile.fullName}
    About me: {props.profile.aboutMe}
    Looking for a job: {props.profile.lookingForAJob}
    My profession skill: {props.profile.lookingForAJobDescription}

    Contacts : {props.profile.contacts ? (
    Object.keys(props.profile.contacts).map((key) => (
      <Contacts
        key={key}
        contactTitle={key}
        contactValue={props.profile!.contacts![key as keyof ContactsProfileType]}
      />
    ))
  ) : null}
  </div>
}

const Contacts = (props: any) => {
  return <div>
    {props.contactTitle} : {props.contactValue}
  </div>
}


export default ProfileInfo;
