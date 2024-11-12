import { Button, Link, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import React from "react";
import { GiSelfLove } from "react-icons/gi";
import NavLink from "./NavLink";

export default function TopNavbar() {
  return (
    <Navbar className="py-2 px-4 shadow-sm bg-white/70 backdrop-blur-md">
      <NavbarBrand>
        <div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <GiSelfLove size={28} className="text-primary" />
          <p className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cross Talk
          </p>
        </div>
      </NavbarBrand>

      <NavbarContent className="gap-6" justify="center">
        <NavLink 
          href="/matches"
          label="Matches"
        />
        <NavLink 
          href="/list"
          label="List"
        />
        <NavLink 
          href="/messages"
          label="Messages"
        />
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3">
        <Button
          as={Link}
          href="/login"
          color="primary"
          variant="light"
          className="font-medium transition-all duration-200 hover:opacity-80"
          radius="full"
        >
          Login
        </Button>
        <Button
          as={Link}
          href="/register"
          color="primary"
          variant="solid"
          className="font-medium transition-all duration-200 hover:opacity-90"
          radius="full"
        >
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
