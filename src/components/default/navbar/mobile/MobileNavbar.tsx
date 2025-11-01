"use client"

import Link from "next/link";
import { useTranslations } from "next-intl";
import { 
  Menu, 
  Settings, 
  User as UserIcon, 
  HelpCircle, 
  LogOut, 
  CreditCard, 
  MoreHorizontal,
  Sliders
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { cn } from "@/lib/utils/utils";
import { User } from "@/lib/types/user";

import ThemeToggle from "@/components/default/navbar/components/ThemeToggle";
import LanguageDropdown from "@/components/default/navbar/components/LanguageDropdown";

interface MobileNavbarProps {
  user: User;
  logout: () => void;

  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({ user, logout, isOpen, setIsOpen }) => {
  const t = useTranslations("Component.Default.Navbar");

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col space-y-4 px-2 py-8 w-[300px] sm:w-[400px]">
        {user.isLogin && (
          <>
            {/* User info */}
            <div className="flex items-center space-x-3 pb-4 border-b mb-0">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-linear-to-br from-blue-500 to-green-500 text-white">
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
            </div>

            {/* Other pages */}
            <div className="space-y-2 mb-0">
              <div className="flex items-center gap-2">
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                <p className="text-xs font-medium text-muted-foreground">{t("Others")}</p>
              </div>

              <Button variant="ghost" asChild className="justify-start">
                <Link href="/user/profile" onClick={() => setIsOpen(false)}>
                  <UserIcon className="mr-2 h-4 w-4" />
                  {t("Profile")}
                </Link>
              </Button>

              <Button variant="ghost" asChild className="justify-start">
                <Link href="/user/settings" onClick={() => setIsOpen(false)}>
                  <Settings className="mr-2 h-4 w-4" />
                  {t("Settings")}
                </Link>
              </Button>

              <Button variant="ghost" asChild className="justify-start">
                <Link href="/user/plans" onClick={() => setIsOpen(false)}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  {t("Plans")}
                </Link>
              </Button>

              <Button variant="ghost" asChild className="justify-start">
                <Link href="/help" onClick={() => setIsOpen(false)}>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  {t("HelpFeedback")}
                </Link>
              </Button>
            </div>

            {/* Preferences */}
            <div className="border-t pt-4 mb-0">
              <div className="px-2 space-y-3">
                <div className="flex items-center gap-2">
                  <Sliders className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs font-medium text-muted-foreground">{t("Preferences")}</p>
                </div>
                <ThemeToggle />
                <LanguageDropdown />
              </div>
            </div>

            {/* Logout */}
            <div className="border-t pt-4 mb-0">
              <Button 
                variant="ghost" 
                className="w-full justify-start border-t text-red-600 hover:text-red-600 hover:bg-red-50" 
                onClick={logout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                {t("Logout")}
              </Button>
            </div>
          </>
        )}

        {!user.isLogin && (
          <div className={cn("pt-4 px-2 space-y-2", user.isLogin && "border-t")}>
            <Button variant="outline" asChild className="w-full">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                {t("Login")}
              </Link>
            </Button>

            <Button asChild className="w-full">
              <Link href="/signin" onClick={() => setIsOpen(false)}>
                {t("Signin")}
              </Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar;