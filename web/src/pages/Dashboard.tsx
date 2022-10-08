import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DateSelect } from "../components/DateSelect";
import { Header } from "../components/Header";
import { ScoreboardCard } from "../components/ScoreboardCard";
import { AuthContext } from "../context/AuthContext";

export function Dashboard() {
  const { user, handleSignOut } = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col w-full bg-red-500 items-center justify-center text-white">
        <div className="w-full max-w-[600px] px-5 md:px-0">
          <Header logo="/logo-dashboard.svg" isDashboardPage />
        </div>

        <div className="flex flex-col w-full h-36 px-5 md:px-0 py-4 md:py-4 gap-4 max-w-[600px]">
          <p>Olá, Lailson</p>
          <h2 className="text-2xl font-bold">Qual é o seu palpite?</h2>
        </div>
      </div>

      <div className="flex flex-col py-4 w-full max-w-[600px] px-5 md:px-0 gap-4">
        <DateSelect />

        <div className="flex flex-col p-4 md:px-0 gap-3 md:gap-4">
          <ScoreboardCard />
          <ScoreboardCard />
          <ScoreboardCard />
          <ScoreboardCard />
        </div>
        
      </div>
    </div>
  )
}