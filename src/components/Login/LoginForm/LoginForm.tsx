import * as React from 'react';
import {useFormik} from 'formik';
import {LoginFormType} from '../Login';
import s from './LoginForm.module.scss'

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
  captcha?: string
}

type LoginPropsFormType = {
  onSubmit: (formData: LoginFormType) => void
  error: string
  captcha: any
}

export const LoginForm = (props: LoginPropsFormType) => {


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length < 4) {
        errors.password = 'Invalid password'
      }
      return errors
    },
    onSubmit: values => {
      props.onSubmit(values)
    },
  })

  return (
    <div className={s.contactForm}>
      <form action="" onSubmit={formik.handleSubmit} className={props.captcha ? s.formWithCaptcha : s.form}>
        <div className={s.inputName}>
          <div className={s.loginBlock}>
            <span>Login</span>
            <input
              className={formik.touched.email && formik.errors.email ? s.emailError : s.email}
              type="email"
              {...formik.getFieldProps('email')}
            />
            <div className={s.errorTextEmail}>
              {formik.touched.email && formik.errors.email &&
                <span className={s.errorText}>{formik.errors.email}</span>}
            </div>
          </div>
          <div className={s.passwordBlock}>
            <span>Password</span>
            <input
              className={formik.touched.password && formik.errors.password ? s.passwordError : s.password}
              type="password"
              {...formik.getFieldProps('password')}
            />
            <div className={s.errorTextPassword}>
              {formik.touched.password && formik.errors.password &&
                <span className={s.errorText}>{formik.errors.password}</span>}
            </div>
          </div>
          <div className={s.submitBlock}>
            <div className={s.rememberMe}>
              <input
                className={s.checkbox}
                type="checkbox"
                checked={formik.values.rememberMe}
                {...formik.getFieldProps('rememberMe')}
              />
              <span>Remember me</span>
            </div>

            <button className={s.buttonSend} type={'submit'}>Submit</button>
          </div>
          <div>
            {props.error}
          </div>
          <div>
            <div className={s.setCaptcha}>
              {props.captcha &&
                <>
                  <img className={s.captchaImg} src={props.captcha} alt=""/>
                  <input
                    className={s.captcha}
                    placeholder={'captcha'}
                    type="text"
                    {...formik.getFieldProps('captcha')}
                  />
                </>
              }
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

