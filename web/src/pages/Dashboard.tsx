import { Header } from "../components/Header";
import { IconArrowLeft } from "../components/IconArrowLeft";
import { IconArrowRight } from "../components/IconArrowRight";

export function Dashboard() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col w-full bg-red-500 items-center justify-center text-white">
        <div className="w-full max-w-[600px] px-5 md:px-0">
          <Header logo="/logo-dashboard.svg" isDashboardPage />
        </div>

        <div className="flex flex-col w-full h-36 px-2 py-4 md:px-0 md:py-4 gap-4 max-w-[600px]">
          <p>Olá, Lailson</p>
          <h2 className="text-2xl font-bold">Qual é o seu palpite?</h2>
        </div>
      </div>

      <div className="flex flex-col py-4 w-full max-w-[600px] px-5 md:px-0 gap-4">
        <div className="flex p-4 gap-8 text-red-300 items-center justify-center">
          <IconArrowLeft />
          <strong className="text-black">04/10/2022</strong>
          <IconArrowRight />
        </div>

        <div className="flex flex-col p-4 md:px-0">
          <div className="flex flex-col p-4 md:px-8 md:py-5 items-center justify-center border border-gray-300 rounded-2xl">
            <p className="text-xs md:text-base mb-4">07:00</p>

            <div className="flex items-center justify-center w-full gap-5 md:gap-6">
              <div className="flex gap-2 items-center">
                <p className="text-sm md:text-base">SUI</p>
                <img src="/flags/sui.png" className="w-8 md:w-10" />
              </div>

              <div className="flex gap-2 items-center">
                <input type="number" placeholder="-" className="bg-red-300/[0.15] w-8 md:w-10 h-8 md:h-10 text-red-300 font-bold placeholder:text-red-300"/>
                <strong className="font-bold text-red-300">X</strong>
                <input type="number" placeholder="-" className="bg-red-300/[0.15] w-8 md:w-10 h-8 md:h-10 text-red-300 font-bold placeholder:text-red-300"/>
              </div>

              <div className="flex gap-2 items-center">
                <img src="/flags/cam.png" className="w-8 md:w-10" />
                <p className="text-sm md:text-base">CAM</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}