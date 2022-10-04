import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface HeaderProps {
  logo: string;
  isLoginPage?: boolean;
  isDashboardPage?: boolean;
}

export function Header({ logo, isLoginPage, isDashboardPage }: HeaderProps) {
  return (
    <header className={`py-6 flex w-full items-center justify-center ${isLoginPage && "border-b border-red-300"} ${isDashboardPage && "bg-red-500 justify-between"}`}>
      <img src={logo} alt="" className="w-32 md:w-40" />
      {isDashboardPage && 
        <Link to="/profile">
          <Avatar className="w-6 md:w-8" />
        </Link>
      }
    </header>
  )
}