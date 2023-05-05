export default function Bubble({
  isSelf,
  text,
}: {
  isSelf: boolean
  text: string
}) {
  return (
    <p
      className={`${
        isSelf ? 'ml-auto' : 'mr-auto'
      } text-left max-w-[300px] p-2 mb-2 rounded-md`}
      style={{ backgroundColor: isSelf ? '#fef01b' : '#ffffff' }}
    >
      {text}
    </p>
  )
}
