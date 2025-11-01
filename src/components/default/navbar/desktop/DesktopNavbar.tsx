"use client";

import { useTranslations } from "next-intl";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { User } from "@/lib/types/user";

import Logo from "@/components/default/navbar/components/Logo";
import UserMenu from "@/components/default/navbar/desktop/components/UserMenu";
import GuestMenu from "@/components/default/navbar/desktop/components/GuestMenu";

interface DesktopNavbarProps {
  user: User;
  logout: () => void;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ user, logout }) => {
  const t = useTranslations("Component.Default.Navbar");

  return (
    <>
      {/* Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      <div className="hidden md:flex justify-center items-center w-full max-w-xs bg-brand-bg-primary border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
        <Input
          type="text"
          placeholder={t("SearchPlaceholder")}
          className="flex-1 border-0 shadow-none rounded-full p-5 text-sm focus:outline-none focus:ring-0 bg-transparent placeholder:text-gray-500"
        />

        <Button
          size="sm"
          className="rounded-full h-7 w-7 bg-brand-primary hover:cursor-pointer hover:bg-brand-primary-hover text-white border-0 mr-2"
          children={<Search className="h-1 w-1" />}
        />
      </div>

      <div className="hidden md:flex flex-shrink-0 items-center gap-4">
        {user.isLogin ? 
          <UserMenu user={user} logout={logout} /> : 
          <GuestMenu />
        }
      </div>
    </>
  );
};

export default DesktopNavbar;
