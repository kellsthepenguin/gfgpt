export default function Bubble({
  isSelf,
  message,
}: {
  isSelf: boolean
  message: string
}) {
  return (
    <p
      className={`${isSelf ? 'mr-auto' : 'ml-auto'} p-2 rounded-md`}
      style={{ backgroundColor: isSelf ? '#ffffff' : '#fef01b' }}
    >
      {message}
    </p>
  )
}
