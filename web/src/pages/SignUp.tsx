import { Link, useNavigate } from "react-router-dom";
import { CircleNotch, Eye, EyeSlash } from "phosphor-react";
import { useFormik } from "formik";
import * as yup from 'yup'

import { Header } from "../components/Header";
import { IconBack } from "../components/IconBack";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const validationSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  username: yup.string().required('Nome de usuário obrigatório'),
  email: yup.string().email('Digite um e-email válido!').required('E-mail obrigatório'),
  password: yup.string().required('A senha é obrigatória').min(6, 'Mínimo de 6 caracteres'),
  confirmPassword: yup.string().required('A senha é obrigatória').oneOf([yup.ref('password')], 'As senhas não correspondem').min(6, 'Mínimo de 6 caracteres'),
}).required();

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { user, handleSignUp } = useContext(AuthContext)
  const navigate = useNavigate();
  
  const formik = useFormik({
    onSubmit: async values => {
      try {
        await handleSignUp(values)
      } catch (error: any) {
        console.log(error)
        if(error.response.status === 422) {
          formik.setStatus(error.response.data)
        } else if(error.response.status === 409) {
          formik.setStatus('Username ou e-mail já existe!')
        } else {
          formik.setStatus('Erro ao realizar o cadastro, tente novamente!')
        }
      }
    },
    validationSchema,
    validateOnMount: true,
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
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
          <h2 className="text-red-700 font-bold text-xl">Crie sua conta</h2>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-8 flex flex-col">
        {formik.status && <p className="text-red-500 text-sm text-center">{formik.status}</p>}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="name"
                className="text-sm text-gray-500"
              >
                Seu nome
              </label>
              <input 
                type="text" 
                id="name"
                placeholder="Digite seu nome"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                className="border border-gray-500 p-3 rounded-2xl placeholder:text-gray-700 text-red-700 focus:outline-red-500"
              />
              {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p> }
            </div>

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="username"
                className="text-sm text-gray-500"
              >
                Seu nome de usuário
              </label>
              <input 
                type="text" 
                id="username"
                placeholder="Digite seu username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                className="border border-gray-500 p-3 rounded-2xl placeholder:text-gray-700 text-red-700 focus:outline-red-500"
              />
              {formik.touched.username && formik.errors.username && <p className="text-red-500 text-sm">{formik.errors.username}</p> }
            </div>

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

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="password"
                className="text-sm text-gray-500"
              >
                Sua senha
              </label>
              <div className="relative flex w-full rounded-md shadow-sm">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Digite sua senha"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className="block w-full border border-gray-500 p-3 rounded-2xl placeholder:text-gray-700 text-red-700 focus:outline-red-500"
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 
                    <EyeSlash className="text-red-300" weight="bold" size={20}/>
                    : 
                    <Eye className="text-red-300" weight="bold" size={20}/>
                  }
                  
                </button>
              </div>
              {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p> }
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label 
                htmlFor="confirmPassword"
                className="text-sm text-gray-500"
              >
                Confirme sua senha
              </label>
              <div className="relative flex w-full rounded-md shadow-sm">
                <input 
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  placeholder="Confirme sua senha"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className="block w-full border border-gray-500 p-3 rounded-2xl placeholder:text-gray-700 text-red-700 focus:outline-red-500"
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 outline-none"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? 
                    <EyeSlash className="text-red-300" weight="bold" size={20}/>
                    : 
                    <Eye className="text-red-300" weight="bold" size={20}/>
                  }
                  
                </button>
              </div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p> }
            </div>
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
              : 'Criar minha conta'
            } 
          </button>
        </form>
      </main>
    </div>
  )
}