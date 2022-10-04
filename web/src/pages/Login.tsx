import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { IconBack } from "../components/IconBack";

export function Login() {
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

        <form className="mt-8 flex flex-col">
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
              className="border border-gray-500 p-3 rounded-2xl placeholder:text-gray-700 text-red-700 focus:outline-red-500"
            />
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
              className="border border-gray-500 p-3 rounded-2xl placeholder:text-gray-700 text-red-700 focus:outline-red-500"
            />
          </div>

          <button className="bg-red-500 rounded-2xl text-white px-5 py-3 md:px-6 md:py-4 mt-8 font-bold hover:bg-red-300">
            Entrar
          </button>
        </form>
      </main>
    </div>
  )
}