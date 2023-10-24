"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Header = () => {

  return (
   <nav className="flex-between sticky top-0 w-full mb-16 pt-3">
<Link href="/" className="flex gap-2 flex-center">
    <Image src="/assets/images/logo.svg"
    alt="Shared Prompts Logo" className="object-contain"
    width={30} height={30} />
    <h1 className="logo_text">Shared Prompts</h1>
</Link>
   </nav>
  )
}

export default Header
