import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { loginApi } from "../../../api/user"
import { useAuth } from '../../../hooks'
import './LoginForm.scss'

export function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    validateOnChange: false,
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    }),
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue)
        //console.log(response)
        const { access } = response
        login(access)
        //console.log(access)
      } catch (error) {
        toast.error(error.message)
      }
    }
  })
  return (
    <div>
        <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
            <Form.Input
              name="email"
              placeholder="Correo electronico"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            <Button type="submit" content="Iniciar Sesion" primary fluid />
        </Form>
    </div>
  )
}

function initialValues(){
  return {
    email: "",
    password: "",
  }
}
