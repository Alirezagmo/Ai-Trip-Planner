"use client";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { Loader, Send } from 'lucide-react';
import React, { useState } from 'react'
import EmptyBoxState from './EmptyBoxState';


type Message = {
    role:string
    content:string
}
function ChatBox() {
const [message, setMessage] = useState<Message[]>([]);
const [userInput, setUserInput] = useState<string>();
const [loading, setLoading] = useState(false);

const onSend = async() =>{
    if (!userInput?.trim()) return;

setLoading(true);
    const newMessage:Message = {
role:'user',
content:userInput
    };
    setMessage((prev) => [...prev, newMessage]);
    setUserInput('');
try{
    const res = await axios.post('/api/aimodel', {
      messages: [...message, newMessage]
    });

    // If API returns { content: "..." }
    const assistantMessage: Message = {
      role: 'assistant',
      content: res.data.content
    };

    setMessage(prev => [...prev, assistantMessage]);
}
catch(err){
    console.log(err);
   setMessage(prev => [...prev, {
      role: 'assistant',
      content: '⚠️ Something went wrong.'
    }]);
}

setLoading(false);
}

  return (
    <div className='h-[85vh] flex flex-col'>
        {
            message?.length == 0 &&
            <EmptyBoxState onSelectOption={(val:string) => { setUserInput(val); onSend()}}/>
        }
        {/* display messages */}
        <section className='flex-1 overflow-y-auto p-4'>
            {message.map((message:Message, index) => (
               message.role === 'user' ? (
                <div key={index} className='flex justify-end mt-2'>
                    <div className='bg-primary text-white rounded-lg px-4 py-2'>
                        {message.content}
                    </div>
                </div>
               ) : 
                <div key={index} className='flex justify-start mt-2'>
                    <div className='bg-gray-100 text-black rounded-lg px-4 py-2'>
                        {message.content}
                    </div>
                </div>
               
            ))}
                {loading &&
                <div className='flex justify-start mt-4'>
                    <div className='bg-gray-100 text-black rounded-lg px-4 py-2'>
                        {<Loader className='animate-spin'/> }
                    </div>
                </div>
                }
        </section>

        {/* user input */}
        <section>
 <div className='border rounded-2xl p-4 relative'>
<Textarea onChange={(e) => setUserInput(e.target.value)} value={userInput}
placeholder='Tell me where you want to go ... '
className='w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none'/>
<Button size={'icon'} className='absolute bottom-6 right-6' onClick={() => onSend()} >
    <Send className='h-4 w-4'/>
</Button>
        </div>
        </section>
    </div>
  )
}

export default ChatBox;