import { useState } from "react";
import { IonRouterLink } from "@ionic/react";
import { useTranslation } from "react-i18next";

import {
  Menu,
  Settings,
  User as UserIcon,
  HelpCircle,
  LogOut,
  CreditCard,
  MoreHorizontal,
  Sliders,
} from "lucide-react";

import { cn } from "@/lib/utils/utils";

import useSession from "@/hooks/useSession";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import Logo from "@/components/default/navbar/components/Logo";
import ThemeToggle from "@/components/default/navbar/components/ThemeToggle";
import LanguageDropdown from "@/components/default/navbar/components/LanguageDropdown";
import Separator from "@/components/ui/custom/Separator";

const Navbar = () => {
  const { user, logout } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  const text = (key: string) => t(`Component.Default.Navbar.${key}`);

  return (
    <nav className="sticky flex flex-col items-center justify-between gap-y-4 top-0 z-50 h-full w-full h-20 p-5 pb-0">
      <div className="flex items-center justify-between w-full">
        <Logo />

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu className="h-5 w-5" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="flex flex-col justify-between gap-y-4 px-2 py-8 w-[300px] sm:w-[400px]"
          >
            {user.isLogin && (
              <>
                <div className="flex flex-col gap-y-4">
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
                  <div className="space-y-2 mb-0 border-b pb-4">
                    <div className="flex items-center gap-2">
                      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      <p className="text-xs font-medium text-muted-foreground">
                        {text("Others")}
                      </p>
                    </div>

                    <Button variant="ghost" asChild className="justify-start">
                      <IonRouterLink
                        routerLink="/user/profile"
                        onClick={() => setIsOpen(false)}
                      >
                        <UserIcon className="mr-2 h-4 w-4" />
                        {text("Profile")}
                      </IonRouterLink>
                    </Button>

                    <Button variant="ghost" asChild className="justify-start">
                      <IonRouterLink
                        routerLink="/user/settings"
                        onClick={() => setIsOpen(false)}
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        {text("Settings")}
                      </IonRouterLink>
                    </Button>

                    <Button variant="ghost" asChild className="justify-start">
                      <IonRouterLink
                        routerLink="/user/plans"
                        onClick={() => setIsOpen(false)}
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        {text("Plans")}
                      </IonRouterLink>
                    </Button>

                    <Button variant="ghost" asChild className="justify-start">
                      <IonRouterLink
                        routerLink="/help"
                        onClick={() => setIsOpen(false)}
                      >
                        <HelpCircle className="mr-2 h-4 w-4" />
                        {text("HelpFeedback")}
                      </IonRouterLink>
                    </Button>
                  </div>

                  {/* Preferences */}
                  <div className="mb-0">
                    <div className="px-2 space-y-3">
                      <div className="flex items-center gap-2">
                        <Sliders className="h-4 w-4 text-muted-foreground" />
                        <p className="text-xs font-medium text-muted-foreground">
                          {text("Preferences")}
                        </p>
                      </div>
                      <ThemeToggle />
                      <LanguageDropdown />
                    </div>
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
                    {text("Logout")}
                  </Button>
                </div>
              </>
            )}

            {!user.isLogin && (
              <>
                {/* Preferences */}
                <div className="mb-0">
                  <div className="px-2 space-y-3">
                    <div className="flex items-center gap-2">
                      <Sliders className="h-4 w-4 text-muted-foreground" />
                      <p className="text-xs font-medium text-muted-foreground">
                        {text("Preferences")}
                      </p>
                    </div>
                    <ThemeToggle />
                    <LanguageDropdown />
                  </div>
                </div>

                {/* Login / Signin */}
                <div
                  className={cn(
                    "pt-4 px-2 space-y-2",
                    user.isLogin && "border-t"
                  )}
                >
                  <Button variant="outline" asChild className="w-full">
                    <IonRouterLink
                      routerLink="/login"
                      onClick={() => setIsOpen(false)}
                    >
                      {text("Login")}
                    </IonRouterLink>
                  </Button>

                  <Button asChild className="w-full">
                    <IonRouterLink
                      routerLink="/signin"
                      onClick={() => setIsOpen(false)}
                    >
                      {text("Signin")}
                    </IonRouterLink>
                  </Button>
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>

      <Separator />
    </nav>
  );
};

export default Navbar;
