import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface HeaderProps {
  logo: string;
  isLoginPage?: boolean;
  isDashboardPage?: boolean;
  isProfilePage?: boolean;
}

export function Header({ logo, isLoginPage, isDashboardPage, isProfilePage }: HeaderProps) {
  return (
    <header className={`py-6 flex w-full ${isLoginPage ? "border-b border-red-300 items-center justify-center" : isDashboardPage ? "bg-red-500 justify-between items-center" : isProfilePage ? "justify-start items-center" : "items-center justify-center"}`}>
      <img src={logo} alt="" className="w-32 md:w-40" />
      {isDashboardPage && 
        <Link to="/profile">
          <Avatar className="w-6 md:w-8" />
        </Link>
      }
    </header>
  )
}