"use client"

import { cn } from "@/lib/utils"
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: "text-sky-500"
    },
    {
        label: 'Courses',
        icon: MessageSquare,
        href: '/dashboard/courses',
        color: "text-violet-500",
    },
    {
        label: 'Profile',
        icon: ImageIcon,
        color: "text-pink-700",
        href: '/dashboard/profile',
    },
    {
        label: 'Password Management',
        icon: VideoIcon,
        color: "text-orange-700",
        href: '/dashboard/password-management',
    },


];

const Sidebar = () => {

    const pathName = usePathname();
    return (
        <div className="space-y-4 
        py-4 
        flex 
        flex-col 
        h-full 
         text-white bg-white">


            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-28 h-8 mr-4">
                        <Image
                            width={800}
                            height={35}
                            alt="logo"
                            src={"/assets/images/training/logo_dark.png"}
                            className="" />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        ischyrós
                    </h1>
                </Link>




                <div className="space-y-1">
                    {
                        routes.map((route) => (
                            <Link
                                href={route.href}
                                key={route.href}
                                className={cn("text-sm text-[#344054] group flex p-3 w-full justify-start  cursor-pointer hover:bg-[#F2F4F7] transition rounded-lg",
                                    pathName === route.href ? " bg-[#F2F4F7] font-bold" : "font-normal")}
                            >


                                <div className="flex items-center flex-1">
                                    <route.icon
                                        className={cn("h-5 w-5 mr-3", route.color)}
                                    />
                                    {route.label}
                                </div>

                            </Link>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar