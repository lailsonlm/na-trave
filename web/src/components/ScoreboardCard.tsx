export function ScoreboardCard() {
  return (
    <div className="flex flex-col p-4 md:px-8 md:py-5 items-center justify-center border border-gray-300 rounded-2xl">
      <p className="text-xs md:text-base mb-4">07:00</p>

      <div className="flex items-center justify-center w-full gap-5 md:gap-6">
        <div className="flex gap-2 items-center">
          <p className="text-sm md:text-base uppercase">SUI</p>
          <img src="/flags/sui.png" className="w-8 md:w-10" />
        </div>

        <div className="flex gap-2 items-center">
          <input 
            type="number" 
            placeholder="-" 
            min={0}
            className="text-center bg-red-300/[0.15] w-8 md:w-10 h-8 md:h-10 text-red-300 font-bold placeholder:text-red-300"
          />
          <strong className="font-bold text-red-300">X</strong>
          <input 
            type="number" 
            placeholder="-" 
            min={0}
            className="text-center bg-red-300/[0.15] w-8 md:w-10 h-8 md:h-10 text-red-300 font-bold placeholder:text-red-300"
          />
        </div>

        <div className="flex gap-2 items-center">
          <img src="/flags/cam.png" className="w-8 md:w-10" />
          <p className="text-sm md:text-base uppercase">CAM</p>
        </div>
      </div>
    </div>
  )
}