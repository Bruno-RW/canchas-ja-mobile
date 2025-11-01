"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Settings,
  UserIcon,
  HelpCircle,
  LogOut,
  CreditCard,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import LanguageSVG from "@/public/icons/action/language.svg";

import type { User } from "@/lib/types/user";

import ThemeToggle from "@/components/default/navbar/components/ThemeToggle";
import LanguageDropdown from "@/components/default/navbar/components/LanguageDropdown";

interface UserMenuProps {
  user: User;
  logout: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, logout }) => {
  const t = useTranslations("Component.Default.Navbar");

  return (
    <>
      {/* Host link */}
      <Button
        variant="ghost"
        className="text-sm font-medium hover:cursor-pointer hover:bg-gray-100 rounded-full px-3 py-2 gap-2"
      >
        {t("BecomeHost")}
        <Image
          src={LanguageSVG || "/placeholder.svg"}
          alt="Language icon"
          width={22}
        />
      </Button>

      {/* User menu */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 border border-gray-300 rounded-full px-0 py-5 hover:cursor-pointer hover:shadow-md transition-shadow"
          >
            <Menu className="h-4 w-4" />

            <Avatar className="h-7 w-7">
              <AvatarFallback className="bg-gray-500 text-white text-xs">
                {user.initials}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-64" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          {/* Other pages */}
          <DropdownMenuItem
            asChild
            className="flex items-center hover:cursor-pointer"
          >
            <Link href="/user/profile">
              <UserIcon className="mr-2 h-4 w-4" />
              <span>{t("Profile")}</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="flex items-center hover:cursor-pointer"
          >
            <Link href="/user/settings">
              <Settings className="mr-2 h-4 w-4" />
              <span>{t("Settings")}</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="flex items-center hover:cursor-pointer"
          >
            <Link href="/user/plans">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>{t("Plans")}</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="flex items-center hover:cursor-pointer"
          >
            <Link href="/help">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>{t("HelpFeedback")}</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Preferences */}
          <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
            {t("Preferences")}
          </DropdownMenuLabel>

          <div className="px-2 py-1.5 space-y-3">
            <ThemeToggle />
            <LanguageDropdown />
          </div>

          <DropdownMenuSeparator />

          {/* Logout */}
          <DropdownMenuItem className="text-red-600 focus:text-red-600 hover:cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span onClick={logout}>{t("Logout")}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserMenu;
