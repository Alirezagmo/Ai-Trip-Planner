import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const menuOptions = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Pricing',
        href: '/pricing'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
]
function Header() {
  return (
    <div className='flex gap-2 items-center justify-between'>
        {/* logo */}
        <div className='flex items-center gap-2'>
<Image src={'/logo.svg'} alt='svg' width={30} height={30}/>
            <h2 className='text-2xl font-medium'>Air Trip Planner</h2>
        </div>
        {/* menu items */}
        <div className='flex items-center gap-7 font-medium'>
{menuOptions.map((option) => (
    <Link href={option.href} key={option.label}> 
    <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{option.label}</h2>
    </Link>
))}
        </div>
        {/* get Started button */}
        <Button>Get Started</Button>
    </div>
  )
}

export default Header