
import { addDays, subDays, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from "react";
import { IconArrowLeft } from './IconArrowLeft';
import { IconArrowRight } from './IconArrowRight';

export function DateSelect() {
  const initialDate = new Date(2022, 10, 20)
  const finalDate = new Date(2022, 11, 18)
  const [currentDate, setCurrentDate] = useState(initialDate)
  const formatDate = format(currentDate, "dd' de 'MMMM", {
    locale: ptBR
  })

  function prevDay() {
    const prevDate = subDays(currentDate, 1)

    if(prevDate <= initialDate) {
      setCurrentDate(initialDate)

      return
    }

    setCurrentDate(prevDate)
  }

  function nextDay() {
    const nextDate = addDays(currentDate, 1)

    if(nextDate >= finalDate) {
      setCurrentDate(finalDate)

      return
    }
    
    setCurrentDate(nextDate)
  }

  return (
    <div className="flex p-4 gap-8 text-red-300 items-center justify-center">
      <button onClick={prevDay}>
        <IconArrowLeft />
      </button>
      <strong className="text-black">{formatDate}</strong>
      <button onClick={nextDay}>
        <IconArrowRight />
      </button>
    </div>
  )
}