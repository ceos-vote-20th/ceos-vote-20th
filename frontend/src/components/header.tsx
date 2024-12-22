"use client"

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Header({title} : {title: string}) {
    const router = useRouter()
    const goBack = () => {
        router.back()
    }
    return (
        <div className="relative w-full flex justify-center items-center py-4 text-big text-grey450 shadow-md">
            <span 
                className="absolute left-0 cursor-pointer"
                onClick={goBack}
                >
                <ArrowLeft size={36} />
            </span>
            <p>
                {title}
            </p>
        </div>
    )
}
