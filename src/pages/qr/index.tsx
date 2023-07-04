import style from './style.module.css'

export default function Qr() {
  const groomGiftRecipients = [
    {
      name: 'Matthew',
      url: '?recipient=the%20bad%20influence'
    },
    {
      name: 'Matt',
      url: '?recipient=the%20paleontologist'
    },
    {
      name: 'Ryan',
      url: '?recipient=the%20weight%20lifter'
    },
    {
      name: 'Oscar',
      url: '?recipient=the%20roommate'
    },
    {
      name: 'Zane',
      url: '?recipient=the%20dungeon%20master'
    },
    {
      name: 'Scott',
      url: '?recipient=muh%20best%20friend'
    },
    {
      name: 'Eddie',
      url: '?recipient=the%20co%20host'
    },
  ]
  return (
    <div className={style.qrContainer}>
      {groomGiftRecipients.map(({name, url}, i) => (
        <div key={i}>
          <p><a href={`https://warrickwedding.com/groomsmen${url}`}>{name}</a>, scan this:</p>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://warrickwedding.com/groomsmen${url}`} alt={`QR Code for URL for ${name}`}/>
        </div>
      ))}
    </div>
  )
}
