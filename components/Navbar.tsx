import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

export default function CustomNavbar() {
  return (
    <NextUINavbar className="w-screen bg-transparent">
      <NavbarBrand>
        <p className="font-bold text-inherit">Embedify</p>
      </NavbarBrand>
      
      <NavbarContent justify="end">
        <NavbarItem>
        <button onClick={() => signIn("github")} className='bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg shadow hover:bg-purple-100 transition duration-300'>Get Started</button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
