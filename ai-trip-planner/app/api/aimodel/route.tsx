import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';



export const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_AI_KEY,
});


export async function POST(req:NextRequest) {
const {messages} = await req.json();
try{
    const completion = await openai.chat.completions.create({
        model: 'deepseek/deepseek-r1:free',
        messages: [
            {
    role: 'system',
    content: 'You are a helpful assistant.',
            },
            ...messages
        ],
      });
      const reply = completion.choices[0].message.content;
      return NextResponse.json({content:reply});
}
catch(err){
  console.error(err);
    return NextResponse.json({content:"⚠️ Error generating response."});
}
}
