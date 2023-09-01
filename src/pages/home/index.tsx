import style from './style.module.css'
import gross from '../../assets/lee_and_kenna.jpg'
import weddingLogo from '../../assets/lm.svg'

export default function Home() {
  const goTime = new Date('09/05/2023 15:00 PDT')
  const weAreMarriedNow = Date.now() > goTime.getTime() 
  function daysToGo() {
    if (weAreMarriedNow) 
      return <a target="__BLANK" href="https://leewarrick.com/confetti">Click here to celebrate!</a>
    const days = Math.max(Math.floor((goTime.getTime() - Date.now()) / 1000 / 60 / 60 / 24), 0)
    return `${days} Day${days > 1 ? 's' : ''} to Go!`
  }
  return (
    <>
      <section className={[style.announcement, 'container'].join(" ")}>
        <h1 className={style.title}>Makenna & Lee</h1>
        <p>{weAreMarriedNow && <>We did it! We're married!<br/><br/>It happened on </>}SEPT 5<sup>th</sup>, 2023 at 3:00 PM aboard the Disney Wonder&trade;.</p>
        <p>{daysToGo()}</p>
        <div className={style.usPic}>
          <img src='/escape_room.png' alt="Makenna & Lee" />
        </div>
      </section>
      <section className={[style.cruise, 'container-fluid'].join(" ")}>
        <h2 className={style.heading}>Venue</h2>
      </section>
      <section className={'container'}>
        <p>{weAreMarriedNow ? `It all happened`: `Join us`} aboard the Disney Wonder&trade; on a 7-night Alaskan Cruise from Vancouver.</p>
        <p>Dates: Monday, September 4<sup>th</sup> through Monday, September 11<sup>th</sup>, 2023.</p>
        {
          !weAreMarriedNow && 
          <a href="https://disneycruise.disney.go.com/cruises-destinations/list/DW1989/7-Night-Alaskan-Cruise-from-Vancouver/2023-09-04-Disney-Wonder/">Details and booking information for the cruise can be found at this link.</a>
        }
      </section>
      <section className={[style.details, 'container-fluid'].join(" ")}>
        <div className={style.col}></div>
        <div className={style.col}></div>
        <div className={style.col}></div>
      </section>
      <section className={'container'}>
        <h2 className={style.heading}>Reception</h2>
        <img src={gross} className={style.gross} alt="Kenna and I making a face telling you NO" />
        {
          weAreMarriedNow
        }
        {
          weAreMarriedNow
          ? <>
              <p>Did you not go on the cruise?</p>
              <p>It's okay, we forgive you for not tagging along.</p>
              <p>(Although we must say, you missed out! It was great!)</p>
              <p>We wanted to do something special, and we knew it wasn't something everyone could attend.</p>
            </>
          : <>
              <p>Did you make a face after you clicked the cruise link?</p>
              <p>Did you think:</p>
              <blockquote><em>Wow, they think we can afford a cruise just to see them get married? They've lost their little minds.</em></blockquote>
              <p>It's OK. We made a similar face looking at cruise prices, flights, and hotels.</p>
              <p>We don't expect everyone is going to want to fly across the country, get a passport, and float to Juneau just to see us get hitched.</p>
              <p>We wanted to do something special, and we realize it's not something everyone can attend.</p>
            </>
        }
        <p>So for that reason, we might have a reception sometime in January or February 2024 so everyone can come and celebrate our marriage.</p>
        <p>It will probably be in Orlando, FL so Kenna can take pictures at Disney. We'll post details here on the site when we have them.</p>
      </section>
      <footer className={style.footer}>
        <p>Made with love by Lee because Kenna told me to.</p>
        <img className={style.weddingLogo} src={weddingLogo} alt="wedding logo" />
      </footer>
    </>
  )
}
