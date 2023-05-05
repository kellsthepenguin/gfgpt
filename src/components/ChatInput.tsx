import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, RefObject, SetStateAction, useRef } from 'react'

export default function ChatInput({
  isAI,
  setIsAI,
  setIsSelf,
  handleSendEvent,
  innerRef,
}: {
  isAI: boolean
  setIsAI: Dispatch<SetStateAction<boolean>>
  setIsSelf: Dispatch<SetStateAction<boolean>>
  handleSendEvent: () => void
  innerRef: RefObject<HTMLInputElement>
}) {
  return (
    <div className='self-start w-full bottom-0 mt-auto'>
      <div className='ml-5 flex justify-start'>
        <div style={isAI ? { display: 'none' } : undefined}>
          <input
            type='radio'
            id='lover'
            value='lover'
            name='sender'
            onChange={() => setIsSelf(false)}
            defaultChecked
          />
          <label htmlFor='lover'>&nbsp;상대방&nbsp;</label>
          <input
            type='radio'
            id='self'
            value='self'
            name='sender'
            onChange={() => setIsSelf(true)}
          />
          <label htmlFor='self' className='mr-2'>
            &nbsp;본인
          </label>
        </div>
        <button
          className='bg-emerald-400 px-3 py-0.5 rounded text-white'
          style={isAI ? { display: 'none' } : undefined}
          onClick={() => {
            setIsAI(true)
            setIsSelf(true)
          }}
        >
          Start AI
        </button>
      </div>
      <div className='pt-2 p-5 flex gap-2 items-center'>
        <input
          className={
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2 w-full'
          }
          size={35}
          autoComplete='off'
          onKeyUp={({ key }) => {
            key === 'Enter' && handleSendEvent()
          }}
          ref={innerRef}
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          className='w-[25px] h-[25px]'
          color={isAI ? '#34d399' : '#3b82f6'}
          onClick={handleSendEvent}
        />
      </div>
    </div>
  )
}
