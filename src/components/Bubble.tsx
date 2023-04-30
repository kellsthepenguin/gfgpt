export default function Bubble({
  isSelf,
  message,
}: {
  isSelf: boolean
  message: string
}) {
  return (
    <p
      className={`${isSelf ? 'ml-auto' : 'mr-auto'} p-2 rounded-md`}
      style={{ backgroundColor: isSelf ? '#fef01b' : '#ffffff' }}
    >
      {message}
    </p>
  )
}
