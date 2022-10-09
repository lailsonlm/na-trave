import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircleNotch } from "phosphor-react";
import { useFormik } from "formik";
import * as yup from 'yup'

import { Header } from "../components/Header";
import { IconBack } from "../components/IconBack";
import { AuthContext } from "../context/AuthContext";

const validationSchema = yup.object({
  email: yup.string().email('Digite um e-email válido!').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
})

export function Login() {
  const { user, handleSignIn } = useContext(AuthContext)
  const navigate = useNavigate();

  const formik = useFormik({
    onSubmit: async values => {
      try {
        await handleSignIn(values)
      } catch (error) {
        formik.setStatus('Usuário ou senha inválido!')
      }
    },
    validationSchema,
    validateOnMount: true,
    initialValues: {
      email: '',
      password: '',
    }
  })

  useEffect(() => {
    if(user) {
      navigate('/dashboard')
    }
  }, [user])
  
  return (
    <div className="flex flex-col items-center w-full">
      <Header logo="/logo-login.svg" isLoginPage />

      <main className="py-8 px-5 gap-8 w-full max-w-[600px]">
        <div className="flex items-center gap-5">
          <Link to="/" className="text-red-500">
            <IconBack />
          </Link>
          <h2 className="text-red-700 font-bold text-xl">Entre na sua conta</h2>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-8 flex flex-col">
        {formik.status && <p className="text-red-500 text-sm text-center">{formik.status}</p>}
          <div className="flex flex-col gap-2">
            <label 
              htmlFor="email"
              className="text-sm text-gray-500"
            >
              Seu e-mail
            </label>
            <input 
              type="text" 
              id="email"
              placeholder="Digite seu e-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              className="border border-gray-500 p-3 rounded-2xl placeholder:text-gray-700 text-red-700 focus:outline-red-500"
            />
            {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p> }
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label 
              htmlFor="password"
              className="text-sm text-gray-500"
            >
              Sua senha
            </label>
            <input 
              type="password" 
              id="password"
              placeholder="Digite sua senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              className="border border-gray-500 p-3 rounded-2xl placeholder:text-gray-700 text-red-700 focus:outline-red-500"
              />
              {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p> }
          </div>

          <button 
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className="bg-red-500 rounded-2xl text-white px-5 py-3 md:px-6 md:py-4 mt-8 font-bold hover:bg-red-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {
            formik.isSubmitting ? 
              <CircleNotch 
                size={24}
                weight="bold" 
                className="animate-spin text-white mx-auto" 
              /> 
              : 'Entrar'
            } 
          </button>
        </form>
      </main>
    </div>
  )
}