import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Bubble from './Bubble'
import { useEffect, useRef, useState } from 'react'
import ChatInput from './ChatInput'
import Message from '@/types/Message'

export default function ChatBox() {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [isAI, setIsAI] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className='mt-6 w-[450px] h-[600px] bg-slate-200 flex flex-col border-2 rounded-md'>
      <div className='items-center flex bg-white h-12 w-full gap-2'>
        <FontAwesomeIcon className='ml-2' icon={faCircleUser} size='2x' />
        <p>❤️</p>
        <p>(성별:</p>
        <input
          type='radio'
          id='male'
          value='male'
          name='gender'
          disabled={isAI}
          defaultChecked
        />
        <label htmlFor='male'>남자</label>
        <input
          type='radio'
          id='female'
          value='female'
          name='gender'
          disabled={isAI}
        />
        <label htmlFor='female'>여자)</label>
      </div>

      <div className='flex flex-col mx-2 mt-3 overflow-auto max-h-[440px]'>
        {messages.map(({ isSelf, text }) => (
          <Bubble isSelf={isSelf} text={text} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput isAI={isAI} setIsAI={setIsAI} setMessages={setMessages} />
    </div>
  )
}
