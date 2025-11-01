"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LanguageSVG from "@/public/icons/action/language.svg";

const GuestMenu: React.FC = () => {
  const t = useTranslations("Component.Default.Navbar");

  return (
    <>
      {/* Host link for non-logged users */}
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

      {/* Login menu */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 border border-gray-300 rounded-full px-0 py-5 hover:cursor-pointer hover:shadow-md transition-shadow"
          >
            <Menu className="h-4 w-4" />

            <span className="h-7 w-7 bg-gray-500 rounded-full flex items-center justify-center">
              <UserIcon className="text-white" />
            </span>

          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-48" align="end">
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            <Link href="/login" className="font-medium">
              {t("Login")}
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            <Link href="/signin">
              {t("Signin")}
            </Link>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default GuestMenu;
