import s from './ProfileData.module.scss'
import {ContactsProfileType, ProfileType} from "../../../../type";
import * as React from "react";
import {Contacts} from "./Contacts/Contacts";

type Props = {
  isOwner: boolean
  profile:  ProfileType | null
  editMode: () => void
}
export const ProfileData = (props: Props) => {
  return <div className={s.profileData}>
    <div className={s.profileDataInfo}>
      <div className={`${s.fullName} ${s.itemProfileData}`}>
        <span className={s.titleProfileData}>Full Name: </span>
        <span className={s.valueProfileData}>{props?.profile?.fullName}</span>
      </div>
      <div className={`${s.aboutMe} ${s.itemProfileData}`}>
        <span className={s.titleProfileData}>About me: </span>
        <span className={s.valueProfileData}>{props?.profile?.aboutMe} </span>
      </div>
      <div className={`${s.lookingJob} ${s.itemProfileData}`}>
        <span className={s.titleProfileData}>Looking for a job: </span>
        <span className={s.valueProfileData}>{props?.profile?.lookingForAJob ? 'Yes' : 'No'} </span>
      </div>
      <div className={`${s.jobDescription} ${s.itemProfileData}`}>
        <span className={s.titleProfileData}>My skills: </span>
        <span className={s.valueProfileData}>{props?.profile?.lookingForAJobDescription}</span>
      </div>
    </div>
    <div className={s.contactsBlock}>
      <p className={s.contactsText}>Contacts:</p>
      {props?.profile?.contacts ? (

        Object.keys(props.profile.contacts).map((key) => (
          <Contacts
            key={key}
            contactTitle={key}
            contactValue={props.profile!.contacts![key as keyof ContactsProfileType]}
          />
        ))
      ) : null}
    </div>
    {props.isOwner && <button className={s.button} onClick={props.editMode}>edit</button>}

  </div>
}

