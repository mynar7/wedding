import style from './style.module.css'
import escapePic from '../../assets/escape_room.png'

export default function Home() {
  const goTime = new Date('09/05/2023 15:00 PDT')
  function daysToGo(d: Date) {
    // const now = Date.now()
    const days = Math.max(Math.floor((d.getTime() - Date.now()) / 1000 / 60 / 60 / 24), 0)
    return `${days} Day${days > 1 ? 's' : ''} to Go!`
  }
  return (
    <>
      <h1 className={style.title}>Makenna & Lee</h1>
      <p>SEPT 5<sup>th</sup>, 2023 at 3:00 PM aboard the Disney Wonder&trade;.</p>
      <p>{daysToGo(goTime)}</p>
      <div className={style.usPic}>
        <img src={escapePic} alt="Makenna & Lee" />
      </div>
    </>
  )
}