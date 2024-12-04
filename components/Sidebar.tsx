'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants' // Doğru yoldan import edildiğinden emin olun.
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


const Sidebar = ({ user }: SiderbarProps) => {

    const pathname = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4 p-4 bg-gray-50 shadow-md h-full">
                {/* Logo ve Başlık */}
                <Link href="/" className="flex mb-12 items-center gap-2 cursor-pointer">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                        className="size-[30px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>

                {/* Sidebar Linkleri */}
                {sidebarLinks.map((item) => {
                    const isActive =
                        pathname === item.
                            route || pathname.
                                startsWith(`${item.route}/`)


                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn
                                ('sidebar-link', {
                                    'bg-bank-gradient':
                                        isActive
                                })
                            }
                        >
                           <div
                           className="relative
                           size-6">
                            <Image
                            src={item.imgURL}
                            alt={item.label}
                            fill 
                            className={cn({
                                'brightness-[3] invert-0':
                                isActive
                            })}
                           />
                            </div>
                            <p className={cn
                                ('sidebar-label',{'!text-white' : isActive})}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}

                USER
            </nav>
                FOOTER
        </section>
    )
}

export default Sidebar
