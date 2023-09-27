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
  submitForm: any
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
          submitForm={props.submitForm}
          editMode={() => setEditMode(!editMode)}/> :
        <ProfileData
          editMode={() => setEditMode(!editMode)}
          profile={props.profile}
          isOwner={props.isOwner}/>
      }
    </div>)
}


const ProfileData = (props: any) => {

  console.log(props.profile.lookingForAJob)

  return <div>
    {props.isOwner && <div>
        <button onClick={props.editMode}>EDIT</button>
    </div>
    }
    <div>
      <span>Full Name: </span> {props.profile.fullName}
    </div>
    <div><span>About me: </span>{props.profile.aboutMe}</div>
    <div><span>Looking for a job:  </span> {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
    <div><span>My profession skill: </span>{props.profile.lookingForAJobDescription}</div>

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
    <p>   {props.contactTitle} : {props.contactValue.length > 0 ? props.contactValue : 'none'}</p>
  </div>
}


export default ProfileInfo;
