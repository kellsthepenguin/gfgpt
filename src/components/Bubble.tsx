export default function Bubble({
  self,
  message,
}: {
  self: boolean
  message: string
}) {
  return (
    <p
      className={`${self ? 'mr-auto' : 'ml-auto'} p-2 rounded-md`}
      style={{ backgroundColor: self ? '#fef01b' : '#ffffff' }}
    >
      {message}
    </p>
  )
}
