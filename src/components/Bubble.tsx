export default function Bubble({
  isSelf,
  text,
}: {
  isSelf: boolean
  text: string
}) {
  return (
    <p
      className={`${isSelf ? 'ml-auto' : 'mr-auto'} p-2 rounded-md`}
      style={{ backgroundColor: isSelf ? '#fef01b' : '#ffffff' }}
    >
      {text}
    </p>
  )
}
