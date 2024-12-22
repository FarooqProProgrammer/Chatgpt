import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eraser } from 'lucide-react'
import { ErrorIcon } from '@/lib/Icon'


const Header = () => {
    return (
        <div className='w-full flex p-3 justify-between  border-b-2 border-gray-200 items-center'>
            <SidebarTrigger />
            <div className='flex justify-center items-center gap-2'>
                <h5>Memory Full</h5>
                <ErrorIcon />
            </div>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Header
