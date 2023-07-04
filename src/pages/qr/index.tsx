import style from './style.module.css'

export default function Qr() {
  const groomGiftRecipients = [
    {
      name: 'Matthew',
      url: '?recipient=thebadinfluence'
    },
    {
      name: 'Matt',
      url: '?recipient=thepaleontologist&gift=1'
    },
    {
      name: 'Ryan',
      url: '?recipient=theweightlifter'
    },
    {
      name: 'Oscar',
      url: '?recipient=theroommate&gift=1'
    },
    {
      name: 'Zane',
      url: '?recipient=thedungeonmaster&gift=1'
    },
    {
      name: 'Scott',
      url: '?recipient=muhbestfriend&gift=1'
    },
    {
      name: 'Eddie',
      url: '?recipient=thecohost&gift=1'
    },
  ]
  return (
    <div className={style.qrContainer}>
      {groomGiftRecipients.map(({name, url}, i) => (
        <div key={i}>
          <p><a href={`https://warrickwedding.com/groomsmen${url}`}>{name}</a>, scan this:</p>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://warrickwedding.com/groomsmen' + url)}`} alt={`QR Code for URL for ${name}`}/>
        </div>
      ))}
    </div>
  )
}
