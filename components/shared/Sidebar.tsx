'use client';

import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';

const Sidebar = () => {

    const pathname = usePathname();

  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href='/' className='sidebar-logo'>
                <Image src='/assets/icons/home.svg' 
                    width={30} 
                    height={30}
                    alt='Logo' />
                <span className='text-3xl p-2-semibold text-gray-600'>NIX HEALTH</span>
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        {navLinks.slice(0, 5).map((item) => {
                            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                            return (
                                <li key={item.label} 
                                    className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`} >
                                        <Link className='sidebar-link' href={item.route}>
                                            <Image 
                                                src={item.icon}
                                                width={24}
                                                height={24}
                                                alt={item.label}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })}
                    </ul>
                    <ul className='sidebar-nav_elements'>
                        {navLinks.slice(5).map((item) => {
                            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                            return (
                                <li key={item.label} 
                                    className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`} >
                                        <Link className='sidebar-link' href={item.route}>
                                            <Image 
                                                src={item.icon}
                                                width={24}
                                                height={24}
                                                alt={item.label}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        <li className='flex-center cursor-pointer gap-2 p-4'>
                            <UserButton showName />
                        </li>
                    </ul>
                </SignedIn>

                <SignedOut>
                    <Button asChild className='button bg-purple-50'>
                        <Link href='/sign-in'>
                        </Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar