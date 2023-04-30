import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction, useRef, useState } from 'react'

export default function ChatInput({
  setMessages,
}: {
  setMessages: Dispatch<
    SetStateAction<
      {
        isSelf: boolean
        message: string
      }[]
    >
  >
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isSelf, setIsSelf] = useState(false)

  const sendNonAIMessage = ({
    isSelf,
    message,
  }: {
    isSelf: boolean
    message: string
  }) => setMessages((messages) => [...messages, { isSelf, message }])
  const handleSendEvent = () => {
    console.log(isSelf)
    sendNonAIMessage({ message: inputRef.current!.value!, isSelf })
  }

  return (
    <div className='self-start w-full bottom-0 mt-auto'>
      <input
        type='radio'
        id='lover'
        value='lover'
        name='sender'
        onChange={() => {
          setIsSelf(false)
          console.log('asdfasdf')
        }}
        defaultChecked
      />
      <label htmlFor='lover'>&nbsp;상대방&nbsp;</label>
      <input
        type='radio'
        id='self'
        value='self'
        name='sender'
        onChange={() => {
          setIsSelf(true)
          console.log('aaas')
        }}
      />
      <label htmlFor='self'>&nbsp;본인</label>
      <div className='pt-2 p-5 flex gap-2 items-center'>
        <input
          className={
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2 w-full'
          }
          size={35}
          autoComplete='off'
          ref={inputRef}
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          className='w-[25px] h-[25px]'
          color='#3b82f6'
          onClick={handleSendEvent}
        />
      </div>
    </div>
  )
}
