import s from './ProfileData.module.scss'
import {ContactsProfileType} from "../../../../type";
import * as React from "react";
import {Contacts} from "./Contacts";


export const ProfileData = (props: any) => {
  return <div className={s.profileData}>
    {props.isOwner && <button onClick={props.editMode}>EDIT</button>}
    <div className={s.profileDataInfo}>
      <div className={`${s.fullName} ${s.itemProfileData}`}>
        <span className={s.titleProfileData}>Full Name: </span>
        <span className={s.valueProfileData}>{props.profile.fullName}</span>
      </div>
      <div className={`${s.aboutMe} ${s.itemProfileData}`}>
        <span className={s.titleAboutMe}>About me: </span>
        <span className={s.valueProfileData}>{props.profile.aboutMe} </span>
      </div>
      <div className={`${s.lookingJob} ${s.itemProfileData}`}>
        <span className={s.titleLookingJob}>Looking for a job: </span>
        <span className={s.valueProfileData}>{props.profile.lookingForAJob ? 'yes' : 'no'} </span>
      </div>
      <div className={`${s.jobDescription} ${s.itemProfileData}`}>
        <span className={s.titleJobDescription}>My skills: </span>
        <span className={s.valueProfileData}>{props.profile.lookingForAJobDescription}</span>
      </div>
    </div>
    <div className={s.contactsBlock}>
      <p className={s.contactsText}>Contacts:</p>
      {props.profile.contacts ? (
        Object.keys(props.profile.contacts).map((key) => (
          <Contacts
            key={key}
            contactTitle={key}
            contactValue={props.profile!.contacts![key as keyof ContactsProfileType]}
          />
        ))
      ) : null}

    </div>
  </div>
}

