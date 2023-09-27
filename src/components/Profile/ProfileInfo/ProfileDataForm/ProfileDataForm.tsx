import * as React from "react";
import {useFormik} from "formik";
import s from "../../../Login/LoginForm/LoginForm.module.scss";

export const ProfileDataForm = (props: any) => {

  const formik = useFormik({
    initialValues: {
      aboutMe: '',
      lookingJob: '',
      lookingDescription: '',
      fullName: '',
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: '',
      mainLink: '',
    },
    validate: (values) => {
      // const errors: FormikErrorType = {}
      // if (!values.email) {
      //   errors.email = 'Required'
      // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      //   errors.email = 'Invalid email address'
      // }
      // if (!values.password) {
      //   errors.password = 'Required'
      // } else if (values.password.length < 4) {
      //   errors.password = 'Invalid password'
      // }
      // return errors
    },
    onSubmit: values => {
      props.editMode()
      debugger
      console.log(values)

    },
  })

  return <div className={s.contactForm}>
    <form action="" onSubmit={formik.handleSubmit}>
      <button type={'submit'}>Save</button>
      <div className={s.inputName}>
        <div className={s.loginBlock}>

          <p className={s.loginPassword}>Full Name:</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="fullName"
            {...formik.getFieldProps('fullName')}
          />
          <p className={s.loginPassword}>About me:</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="aboutMe"
            {...formik.getFieldProps('aboutMe')}
          />
          <p className={s.loginPassword}>lookingJob</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="lookingJob"
            {...formik.getFieldProps('lookingJob')}
          />
          <p className={s.loginPassword}>lookingDescription</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="lookingDescription"
            {...formik.getFieldProps('lookingDescription')}
          />
          <p className={s.loginPassword}>facebook</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="facebook"
            {...formik.getFieldProps('facebook')}
          />
          <p className={s.loginPassword}>website</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="website"
            {...formik.getFieldProps('website')}
          />
          <p className={s.loginPassword}>vk</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="vk"
            {...formik.getFieldProps('vk')}
          />
          <p className={s.loginPassword}>twitter</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="twitter"
            {...formik.getFieldProps('twitter')}
          />
          <p className={s.loginPassword}>instagram</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="instagram"
            {...formik.getFieldProps('instagram')}
          />
          <p className={s.loginPassword}>youtube</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="youtube"
            {...formik.getFieldProps('youtube')}
          />
          <p className={s.loginPassword}>github</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="github"
            {...formik.getFieldProps('github')}
          />
          <p className={s.loginPassword}>mainLink</p>
          <input
            // className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
            type="mainLink"
            {...formik.getFieldProps('mainLink')}
          />

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