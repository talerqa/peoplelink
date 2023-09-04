import * as React from 'react';

import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import {ProfileNameAndPhoto} from "./ProfileNameAndPhoto";

type ProfileInfoProps = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}


const ProfileInfo = (props: ProfileInfoProps) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.item}>
            <ProfileNameAndPhoto name={props.profile.fullName} photo={props.profile.photos}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>)
}

export default ProfileInfo;
