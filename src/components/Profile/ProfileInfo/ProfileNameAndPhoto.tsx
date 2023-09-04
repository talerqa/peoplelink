import * as React from 'react';
import profileLogo from "../../../img/profileLogo.png";
import s from './ProfileInfo.module.css';

type  ProfileNameAndPhotoType = {
    name: string | null
    photo: { small: string | null, large: string | null }
}

export const ProfileNameAndPhoto = (props: ProfileNameAndPhotoType) => {
    return (<>
            <span className={s.firstName}> {props.name} </span>
            < img className={s.avatar}
                  src={props.photo.large ? props.photo.large : profileLogo}
                  alt={'profileLogo'}
            />
        </>
    );
};

