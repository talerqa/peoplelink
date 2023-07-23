import * as React from 'react';
import {useFormik} from 'formik';
import {LoginFormType} from '../Login';

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

type LoginPropsFormType = {
  onSubmit: (formData: LoginFormType) => void
}


export const LoginForm = (props: LoginPropsFormType) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
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

      // formik.resetForm()
    },
  })

  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <input type="email"
               {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
        <input type="password"
               {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
        <input
          type="checkbox"
          checked={formik.values.rememberMe}
          {...formik.getFieldProps('rememberMe')}
        />
        <button type={'submit'}>Submit</button>
      </form>
    </div>
  );
};

