import { Suggestion } from '@/app/_components/Hero';
import { div } from 'motion/react-client';
import React from 'react'

function EmptyBoxState({onSelectOption}:any) {
  return (
    <div className='mt-7'>
        <h2 className='font-bold text-xl text-center'>
            Start Planning new <strong className='text-primary'>trip</strong> using AI
            </h2>
        <p className='text-center text-gray-400 mt-2'>
            "Discover the world your way — from hidden gems to iconic landmarks, we bring you inspiring guides, insider tips, and unforgettable journeys to make every trip extraordinary."
        </p>

<div className='flex flex-col gap-5'>
{Suggestion.map((suggestions, index) =>(
<div key={index} 
onClick={() => onSelectOption(suggestions.title)}
className='flex items-center gap-2 border rounded-xl p-3 
cursor-pointer hover:border-primary hover:text-primary mt-3'
>
{suggestions.icon}
<h2 className='text-lg'>{suggestions.title}</h2>
</div>
))}
</div>
    </div>
  )
}

export default EmptyBoxState;