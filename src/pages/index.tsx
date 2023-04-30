import ChatBox from '../components/ChatBox'

export default function Home() {
  return (
    <div className='text-center flex flex-col justify-center items-center'>
      <p className='mt-12 font-extrabold text-6xl'>연인 반응 시뮬레이터</p>
      <p className='text-md inline'>with ChatGPT</p>
      <ChatBox />
    </div>
  )
}
