import { faCircleUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Bubble from './Bubble'

export default function ChatBox() {
  return (
    <div className='mt-6 w-[450px] h-[600px] bg-slate-200 flex flex-col border-2 rounded-md'>
      <div className='items-center flex bg-white h-12 w-full gap-2'>
        <FontAwesomeIcon className='ml-2' icon={faCircleUser} size='2x' />
        <p>❤️</p>
        <p>(성별:</p>
        <input type='radio' id='male' value='male' name='gender' checked />
        <label htmlFor='male'>남자</label>
        <input type='radio' id='female' value='female' name='gender' />
        <label htmlFor='female'>여자)</label>
      </div>

      <div className='flex flex-col mx-2 mt-3'>
        <Bubble self={true} message='i love you' />
        <Bubble self={false} message='i dont love u' />
      </div>

      <div className='self-start w-full bottom-0 mt-auto'>
        <input type='radio' id='lover' value='lover' name='sender' checked />
        <label htmlFor='lover'>&nbsp;상대방&nbsp;</label>
        <input type='radio' id='self' value='self' name='sender' />
        <label htmlFor='self'>&nbsp;본인</label>
        <div className='pt-2 p-5 flex gap-2 items-center'>
          <input
            className={
              'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2 w-full'
            }
            size={35}
            autoComplete='off'
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className='w-[25px] h-[25px]'
            color='#3b82f6'
          />
        </div>
      </div>
    </div>
  )
}
