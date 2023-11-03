"use client";

import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Menu, Sparkle } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

import { Button } from "@/components/ui/button";
import MobileSidebar from "@/components/mobile-sidebar";



type Props = {};

const font = Poppins({
  weight: "600",
  subsets: ["latin"]
})

const Navbar = (props: Props) => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-prmary/10 bg-secondary h-16">
      <div className="flex items-center">
        {/* <Menu className="block md:hidden" /> */}
        <MobileSidebar />
        <Link href="/" >
          <h1 className={cn(
                    "hidden md:block text-xl md:text-3xl font-bold text-primary",
                    font.className
            )}>
            AIDynamiX + companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant="premium" size="sm" >
          Upgrade
          <Sparkle className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
