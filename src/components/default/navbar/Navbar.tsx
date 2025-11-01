"use client";

import { useState } from "react";

import useSession from "@/hooks/useSession";

import MobileNavbar from "@/components/default/navbar/mobile/MobileNavbar";

const Navbar = () => {
  const { user, logout } = useSession();
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <nav className="sticky flex top-0 z-50 w-full h-20 items-center justify-between p-5 border-b bg-brand-bg-primary">
      <MobileNavbar
        user={user}
        logout={logout}

        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
};

export default Navbar;
