'use client';
import { Button } from '@/components/ui/button'
import { HeroVideoDialog } from '@/components/ui/heroVideoDialog'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import { ArrowDown, Globe2, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'


export const Suggestion = [
    {
        title:'Create New trip',
        icon: <Globe2 className='text-blue-400 w-5 h-5'/>
    },
    {
        title:'Inspire Me Where To Go',
        icon: <Globe2 className='text-green-400 w-5 h-5'/>
    },
    {
        title:'Discover Hidden Gems',
        icon: <Globe2 className='text-orange-400 w-5 h-5'/>
    },
    {
        title:'Adventure Times',
        icon: <Globe2 className='text-yellow-400 w-5 h-5'/>
    },
]
function Hero() {
const {user} = useUser();
const router = useRouter();
const onSend = () => {
   if (!user) {
    router.push('/sign-in');
    return;
   }
   // Navigate user to create new trip
   router.push('/create-new-trip');
}
  return (
    <div className='mt-24 w-full flex justify-center'>
        {/* Content */}
<div className='max-w-3xl w-full text-center space-y-6'>
<h1 className='text-xl md:text-5xl font-semibold'>Hey, I'm your personal 
    <span className='text-primary'>Trip Planner</span>
</h1>
<p className='text-lg '>Tell me what you want, I'll plan a trip for you</p>
        {/* Input Box */}
        <div className='border rounded-2xl p-4 relative'>
<Textarea placeholder='Tell me what you want... '
className='w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none'/>
<Button size={'icon'} className='absolute bottom-6 right-6' onClick={() => onSend()} >
    <Send className='h-4 w-4'/>
</Button>
        </div>
        {/* Suggestion List */}
<div className='flex gap-5'>
    {Suggestion.map((suggest, index) => (
        <div key={index} className='flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white'>
            {suggest.icon}
            <h2 className='text-sm'>{suggest.title}</h2>
        </div>
    ))}
</div>

        {/* Video Section */}
<div className='flex items-center justify-center flex-col'>
<h2 className='my-7 mt-14 flex gap-2 text-center'>Not sure where to start? <strong>See how it works</strong><ArrowDown/></h2>
            <HeroVideoDialog
  className="block dark:hidden"
  animationStyle="from-center"
  videoSrc="https://www.example.com/dummy-video"
  thumbnailSrc="https://mma.prenwswire.com/media/1832506/Video_Thumbnail.jpg"
  thumbnailAlt="Dummy Video Thumbnail"
/>
        </div>
</div>
    </div>
  )
}

export default Hero;