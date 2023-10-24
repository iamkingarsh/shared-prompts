"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();


    const [providers, setProviders] = useState()
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProvidersList = async () => {
            const providers = await getProviders();
            setProviders(providers);
        };
        setProvidersList();
    }, []);

    return (
        <nav className="flex-between sticky top-0 w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image src="/assets/images/logo.svg"
                    alt="Shared Prompts Logo" className="object-contain"
                    width={30} height={30} />
                <h1 className="logo_text">Shared Prompts</h1>
            </Link>

            {/* Desktop Navigation  */}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">
                            Create Prompt
                        </Link>

                        <button type="button" onClick={signOut}>
                            Sign Out
                        </button>
                        <Link href="/profile" >
                            <Image src={session?.user?.image}
                                alt="Profile" className="object-contain bg-black border-2 border-gray-700 rounded-full"
                                width={37} height={37} />

                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && (Object.values(providers).map((provider) => (
                            <button
                                key={provider.name}
                                type="button"
                                className="black_btn"
                                onClick={() => signIn(provider.id)}
                            >
                                Sign In
                            </button>
                        )))}
                    </>
                )}
            </div>

            {/* Mobile Navigation  */}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex ">


<Image src={session?.user?.image}
                            alt="Profile" className="object-contain rounded-full cursor-pointer bg-black border-2 border-gray-500"
                            width={37} height={37}   onClick={() => setToggleDropdown((prev) => !prev)} />
 {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}

                    </div>
                ) : (
                    <>
                        {providers && (Object.values(providers).map((provider) => (
                            <button
                                key={provider.name}
                                type="button"
                                className="black_btn"
                                onClick={() => signIn(provider.id)}
                            >
                                Sign In
                            </button>
                        )))}
                    </>
                )}
            </div>

        </nav>
    )
}

export default Header
