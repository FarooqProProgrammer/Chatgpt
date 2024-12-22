import React from 'react'
import { Input } from '../ui/input'
import { AnalyzeIocn, AttachIcon, HelpMeWrite, ImageIcon, ViewTools, VoiceNoteIcon } from '@/lib/Icon'
import { WebcamIcon } from 'lucide-react'

const Hero = () => {
    return (
        <div className='w-full py-24 flex gap-5 justify-center items-center flex-col'>
            <h2 className='text-4xl font-bold'>What can I help with?</h2>
            <div className='sm:w-[80%] rounded-xl p-3 space-y-4 bg-[#f4f4f4]'>
                <Input placeholder="Message Chatgpt" className="rounded-xl focus-visible:border-0 border-0 focus:outline-none focus:border-0" />
                <div className='w-full flex justify-between items-center'>
                    <div className='flex justify-center items-center gap-3'>
                        <AttachIcon  className={'cursor-pointer'}/>
                        <ViewTools className={'cursor-pointer'} />
                        <WebcamIcon className={'cursor-pointer'} />
                    </div>
                    <VoiceNoteIcon className={'cursor-pointer'} />
                </div>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-5'>
                <div className='flex justify-center px-2 py-2 rounded-3xl gap-3 items-center border border-gray-400'>
                    <ImageIcon />
                    <h6 className='text-sm text-gray-700'>Create Image</h6>
                </div>
                <div className='flex justify-center px-2 py-2 rounded-3xl gap-3 items-center border border-gray-400'>
                    <AnalyzeIocn />
                    <h6 className='text-sm text-gray-700'>Analyze data</h6>
                </div>
                <div className='flex justify-center px-2 py-2 rounded-3xl gap-3 items-center border border-gray-400'>
                    <HelpMeWrite />
                    <h6 className='text-sm text-gray-700'>Help me Write</h6>
                </div>


            </div>
        </div>
    )
}

export default Hero
