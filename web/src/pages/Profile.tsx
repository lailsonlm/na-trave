import { Link } from "react-router-dom";
import { DateSelect } from "../components/DateSelect";
import { Header } from "../components/Header";
import { IconArrowLeft } from "../components/IconArrowLeft";
import { IconArrowRight } from "../components/IconArrowRight";
import { IconBack } from "../components/IconBack";
import { ScoreboardCard } from "../components/ScoreboardCard";

export function Profile() {
  

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col w-full bg-red-500 items-center justify-center text-white">
        <div className="w-full max-w-[600px] px-5 md:px-0">
          <Header logo="/logo-dashboard.svg" isProfilePage />
        </div>

        <div className="flex flex-col w-full h-36 px-5 md:px-0 py-4 md:py-4 gap-4 max-w-[600px]">
          <Link to="/dashboard" className="text-white">
            <IconBack />
          </Link>
          <h2 className="text-xl md:text-2xl font-bold">Lailson Sobral</h2>
        </div>
      </div>

      <div className="flex flex-col py-4 w-full max-w-[600px] px-5 md:px-0 gap-4">
      <h2 className="text-xl md:text-2xl font-bold text-red-300 mt-10">Seus palpites</h2>
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