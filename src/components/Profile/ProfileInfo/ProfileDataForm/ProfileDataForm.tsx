import * as React from "react";
import {useFormik} from "formik";
import s from './ProfileDataForm.module.scss';
import {ProfileType, SubmitForm} from "../../../../type";

type FormikType = {
  isOwner: boolean
  profile: ProfileType | null
  submitForm: (values: Partial<SubmitForm>) => void
  editMode: () => void
}

export const ProfileDataForm = (props: FormikType) => {

  const {profile} = props

  console.log(props.profile)
  const formik = useFormik({
    initialValues: {
      aboutMe: profile?.aboutMe,
      lookingForAJob: profile?.lookingForAJob,
      lookingForAJobDescription: profile?.lookingForAJobDescription,
      fullName: profile?.fullName,
      contacts: {
        facebook: profile?.contacts?.facebook,
        vk: profile?.contacts?.vk,
        twitter: profile?.contacts?.twitter,
        instagram: profile?.contacts?.instagram,
        youtube: profile?.contacts?.youtube,
        github: profile?.contacts?.github,
        mainLink: profile?.contacts?.mainLink,
        website: profile?.contacts?.website,
      }
    },
    validate: (values) => {
      let errors: any = {}
      if (!values.fullName) {
        errors.fullName = 'Required'
      }
      if (!values.aboutMe) {
        errors.aboutMe = 'Required'
      }
      if (!values.lookingForAJobDescription) {
        errors.lookingForAJobDescription = 'Required'
      }
      return errors
    },
    onSubmit: values => {
      console.log(values)
      props.editMode()
      props.submitForm(values)
    },
  })

  return <div className={s.profileDataForm}>
    <form action="" onSubmit={formik.handleSubmit}>
      <div className={s.profileDataFormBlock}>
        <div className={s.profileDataFormItem}>
          <span className={s.titleProfileData}>Full Name:</span>
          <input
            className={formik.touched.fullName && formik.errors.fullName ? s.errorInput : s.input}
            type="fullName"
            {...formik.getFieldProps('fullName')}
          />
          {formik.touched.fullName && formik.errors.fullName &&
              <span className={s.errorText}>{formik.errors.fullName}</span>}
        </div>
        <div className={s.profileDataFormItem}>
          <span className={s.titleProfileData}>About me:</span>
          <input
            className={formik.touched.aboutMe && formik.errors.aboutMe ? s.errorInput : s.input}
            type="aboutMe"
            {...formik.getFieldProps('aboutMe')}
          />
          {formik.touched.aboutMe && formik.errors.aboutMe &&
              <span className={s.errorText}>{formik.errors.aboutMe}</span>}
        </div>
        <div className={s.profileDataFormItem}>
          <p className={s.titleProfileData}>lookingJob</p>
          <input
            className={`${s.input}  ${s.inputCheckbox}`}
            type="checkbox"
            checked={formik.values.lookingForAJob as boolean | undefined}
            {...formik.getFieldProps('lookingForAJob')}
          />
        </div>
        <div className={s.profileDataFormItem}>
          <p className={s.titleProfileData}>lookingDescription</p>
          <input
            className={formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription ? s.errorInput : s.input}
            type="lookingForAJobDescription"
            {...formik.getFieldProps('lookingForAJobDescription')}
          />
          {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
              <span className={s.errorText}>{formik.errors.lookingForAJobDescription}</span>}
        </div>
        <div className={s.profileDataFormItem}>
          <p className={s.titleProfileData}>facebook</p>
          <input
            className={formik.touched?.contacts?.facebook && formik.errors?.contacts?.facebook ? s.errorInput : s.input}
            type="facebook"
            {...formik.getFieldProps('contacts.facebook')}
          />
        </div>
        <div className={s.profileDataFormItem}>
          <p className={s.titleProfileData}>website</p>
          <input
            className={formik.touched?.contacts?.website && formik.errors?.contacts?.website ? s.errorInput : s.input}
            type="website"
            {...formik.getFieldProps('contacts.website')}
          />
        </div>
        <div className={s.profileDataFormItem}>
          <p className={s.titleProfileData}>vk</p>
          <input
            className={formik.touched?.contacts?.vk && formik.errors?.contacts?.vk ? s.errorInput : s.input}
            type="vk"
            {...formik.getFieldProps('contacts.vk')}
          />
        </div>
        <div className={s.profileDataFormItem}>
          <p className={s.titleProfileData}>twitter</p>
          <input
            className={formik.touched?.contacts?.twitter && formik.errors?.contacts?.twitter ? s.errorInput : s.input}
            type="twitter"
            {...formik.getFieldProps('contacts.twitter')}
          />
        </div>
        <div className={s.profileDataFormItem}>
          <p className={s.titleProfileData}>instagram</p>
          <input
            className={formik.touched?.contacts?.instagram && formik.errors?.contacts?.instagram ? s.errorInput : s.input}
            type="instagram"
            {...formik.getFieldProps('contacts.instagram')}
          />
        </div>
        <div className={s.profileDataFormItem}>
          <p className={s.titleProfileData}>youtube</p>
          <input
            className={formik.touched?.contacts?.youtube && formik.errors?.contacts?.youtube ? s.errorInput : s.input}
            type="youtube"
            {...formik.getFieldProps('contacts.youtube')}
          />
        </div>
        <div className={s.profileDataFormItem}>
          <p className={s.titleProfileData}>github</p>
          <input
            className={formik.touched?.contacts?.github && formik.errors?.contacts?.github ? s.errorInput : s.input}
            type="github"
            {...formik.getFieldProps('contacts.github')}
          />
        </div>
        <div className={s.profileDataFormItem}>
          <p className={s.titleProfileData}>mainLink</p>
          <input
            className={formik.touched?.contacts?.mainLink && formik.errors?.contacts?.mainLink ? s.errorInput : s.input}
            type="mainLink"
            {...formik.getFieldProps('contacts.mainLink')}
          />
        </div>
      </div>
      <button type={'submit'} className={s.saveProfileDataBtn}>Save</button>
    </form>
  </div>
}