import { Link } from "react-router-dom"
import { Header } from "../components/Header"

export function Home() {
  return (
    <div className="min-h-screen h-full bg-red-700 text-white flex flex-col items-center px-5 pb-5">
      <Header logo="/logo-home.svg" />
      <div className="max-w-5xl w-full flex-1 flex flex-col gap-4 md:flex-row items-center justify-center md:justify-between mx-auto">
        <div className="max-w-[486px] w-full">
          <img src="/bg-home.png" alt="" />
        </div>
        
        <div className="flex flex-col space-y-4 max-w-[504px] w-full">
          <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>

          <Link to="/signup" className="flex items-center justify-center text-red-700 bg-white font-bold md:text-xl px-8 py-4 rounded-xl hover:bg-red-500 hover:text-white transition-colors">
            Criar minha conta
          </Link>

          <Link to="/login" className="flex items-center justify-center text-white border border-white font-bold md:text-xl px-8 py-4 rounded-xl hover:bg-red-500 hover:border-red-500 transition-colors">
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  )
}

