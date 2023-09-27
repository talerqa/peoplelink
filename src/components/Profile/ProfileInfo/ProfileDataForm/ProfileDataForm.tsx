import * as React from "react";
import {useFormik} from "formik";
import s from './ProfileDataForm.module.scss';

type FormikErrorsType = {
  fullName?: string
  aboutMe?: string
  lookingForAJobDescription?: string
  contacts?: {
    facebook?: string
  }
}

export const ProfileDataForm = (props: any) => {



  const formik = useFormik({
    initialValues: {
      aboutMe: props.profile.aboutMe,
      lookingForAJob: props.profile.lookingForAJob,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      fullName: props.profile.fullName,
      contacts: {
        facebook: 'https://facebook.com/',
        website: '',
        vk: 'https://vk.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
        github: 'https://github.com',
        mainLink: '',
      }
    },
    validate: (values) => {
      let errors: FormikErrorsType = {}

      if (!values.fullName) {
        errors.fullName = 'Required'
      }
      if (!values.aboutMe) {
        errors.aboutMe = 'Required'
      }
      if (!values.lookingForAJobDescription) {
        errors.lookingForAJobDescription = 'Required'
      }

      // if (values.contacts.facebook.length > 5) {
      //   errors.contacts.facebook = 'reqeqweqw'
      // }

      // if (values.aboutMe) {
      //   errors.email = 'Required'
      // } else if (values.aboutMe.length > 5) {
      //   errors.email = 'Invalid email address'
      // }
      // if (!values.fullName) {
      //   errors.password = 'Required'
      // } else if (values.fullName.length < 4) {
      //   errors.password = 'Invalid password'
      // }
      return errors
    },
    onSubmit: values => {
      console.log(values)
      props.editMode()
      props.submitForm(values)
    },
  })

  return <div className={s.contactForm}>
    <form action="" onSubmit={formik.handleSubmit}>
      <button type={'submit'}>Save</button>
      <div className={s.inputName}>
        <div className={s.loginBlock}>
          <div>
            <span className={s.loginPassword}>Full Name:</span>
            <input
              className={formik.touched.fullName && formik.errors.fullName ? s.errorInput : s.email}
              type="fullName"
              {...formik.getFieldProps('fullName')}
            />
            <div className={s.errorTextPassword}>
              {formik.touched.fullName && formik.errors.fullName &&
                  <span className={s.errorText}>{formik.errors.fullName}</span>}
            </div>
          </div>

          <div>
            <span className={s.loginPassword}>About me:</span>
            <input
              className={formik.touched.aboutMe && formik.errors.aboutMe ? s.errorInput : s.email}
              type="aboutMe"
              {...formik.getFieldProps('aboutMe')}
            />
            <div className={s.errorTextPassword}>
              {formik.touched.aboutMe && formik.errors.aboutMe &&
                  <span className={s.errorText}>{formik.errors.aboutMe}</span>}
            </div>
          </div>

          <div>
            <p className={s.loginPassword}>lookingJob</p>
            <input
              className={s.email}
              type="checkbox"
              checked={formik.values.lookingForAJob}
              {...formik.getFieldProps('lookingForAJob')}
            />
          </div>

          <div>
            <p className={s.loginPassword}>lookingDescription</p>
            <input
              className={formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription ? s.errorInput : s.email}
              type="lookingForAJobDescription"
              {...formik.getFieldProps('lookingForAJobDescription')}
            />

            <div className={s.errorTextPassword}>
              {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
                  <span className={s.errorText}>{formik.errors.lookingForAJobDescription}</span>}
            </div>
          </div>

          {/*<p className={s.loginPassword}>facebook</p>*/}
          {/*<input*/}
          {/*  className={formik.touched.contacts?.facebook && formik.errors.contacts?.facebook ? s.errorInput : s.email}*/}
          {/*  type="facebook"*/}
          {/*  {...formik.getFieldProps('contacts.facebook')}*/}
          {/*/>*/}

          {/*<p className={s.loginPassword}>website</p>*/}
          {/*<input*/}
          {/*className={formik.touched.contacts.website && formik.errors.contacts.website ? s.errorInput : s.email}*/}
          {/*  type="website"*/}
          {/*  {...formik.getFieldProps('contacts.website')}*/}
          {/*/>*/}
          {/*<p className={s.loginPassword}>vk</p>*/}
          {/*<input*/}
          {/*className={formik.touched.contacts.vk && formik.errors.contacts.vk ? s.errorInput : s.email}*/}
          {/*  type="vk"*/}
          {/*  {...formik.getFieldProps('contacts.vk')}*/}
          {/*/>*/}
          {/*<p className={s.loginPassword}>twitter</p>*/}
          {/*<input*/}
          {/*   className={formik.touched.contacts.twitter && formik.errors.contacts.twitter ? s.errorInput : s.email}*/}
          {/*  type="twitter"*/}
          {/*  {...formik.getFieldProps('contacts.twitter')}*/}
          {/*/>*/}
          {/*<p className={s.loginPassword}>instagram</p>*/}
          {/*<input*/}
          {/*   className={formik.touched.contacts.instagram && formik.errors.contacts.instagram ? s.errorInput : s.email}*/}
          {/*  type="instagram"*/}
          {/*  {...formik.getFieldProps('contacts.instagram')}*/}
          {/*/>*/}
          {/*<p className={s.loginPassword}>youtube</p>*/}
          {/*<input*/}
          {/*  className={formik.touched.contacts.youtube && formik.errors.contacts.youtube ? s.errorInput : s.email}*/}
          {/*  type="youtube"*/}
          {/*  {...formik.getFieldProps('contacts.youtube')}*/}
          {/*/>*/}
          {/*<p className={s.loginPassword}>github</p>*/}
          {/*<input*/}
          {/* className={formik.touched.contacts.github && formik.errors.contacts.github ? s.errorInput : s.email}*/}
          {/*  type="github"*/}
          {/*  {...formik.getFieldProps('contacts.github')}*/}
          {/*/>*/}
          {/*<p className={s.loginPassword}>mainLink</p>*/}
          {/*<input*/}
          {/* className={formik.touched.contacts.mainLink && formik.errors.contacts.mainLink ? s.errorInput : s.email}*/}
          {/*  type="mainLink"*/}
          {/*  {...formik.getFieldProps('contacts.mainLink')}*/}
          {/*/>*/}


          {/*  */}
          {/*  <input*/}
          {/*    className={formik.touched.email && formik.errors.email ? s.emailError : s.email}*/}
          {/*    type="email"*/}
          {/*    {...formik.getFieldProps('email')}*/}
          {/*  />*/}
          {/*  <div className={s.errorTextEmail}>*/}
          {/*    {formik.touched.email && formik.errors.email &&*/}
          {/*        <span className={s.errorText}>{formik.errors.email}</span>}*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className={s.passwordBlock}>*/}
          {/*  <p className={s.loginPassword}>Password</p>*/}
          {/*  <input*/}
          {/*    className={formik.touched.password && formik.errors.password ? s.passwordError : s.password}*/}
          {/*    type="password"*/}
          {/*    {...formik.getFieldProps('password')}*/}
          {/*  />*/}
          {/*  <div className={s.errorTextPassword}>*/}
          {/*    {formik.touched.password && formik.errors.password &&*/}
          {/*        <span className={s.errorText}>{formik.errors.password}</span>}*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className={s.submitBlock}>*/}
          {/*  <div className={s.rememberMe}>*/}
          {/*    <label>*/}
          {/*      <input*/}
          {/*        className={s.checkbox}*/}
          {/*        type="checkbox"*/}
          {/*        checked={formik.values.rememberMe}*/}
          {/*        {...formik.getFieldProps('rememberMe')}*/}
          {/*      />*/}
          {/*      Remember me*/}
          {/*    </label>*/}
          {/*  </div>*/}
          {/*  <button className={s.buttonSend} type={'submit'}>*/}
          {/*      <span className={s.buttonSendLink}>*/}
          {/*        Submit</span>*/}
          {/*  </button>*/}
        </div>
      </div>
    </form>
  </div>
}