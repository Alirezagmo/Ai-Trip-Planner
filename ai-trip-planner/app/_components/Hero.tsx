import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Globe2, icons, Send } from 'lucide-react'
import React from 'react'


const Suggestion = [
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
<Button size={'icon'} className='absolute bottom-6 right-6'>
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
</div>
    </div>
  )
}

export default Hero