import { useSearchParams, Navigate } from 'react-router-dom'
import style from './style.module.css'
import beastLogo from '../../assets/dragon_round3.svg'
import weddingLogo from '../../assets/lm.svg'

export default function Groomsmen() {
  const [params] = useSearchParams() 
  function getMessage() {
    switch(params.get('recipient')) {
      case 'muhbestfriend':
        return (
          <section className={[style.announcement, 'container'].join(" ")}>
            <h2 className={style.friend}>Scott</h2>
            <h3>👽🗾🥷</h3>
            <p>Thanks for coming to my bachelor party.</p>
            <p>It sucks you can't come to the wedding, but it was so good to see you in Florida at the very least.</p>
            <p>It feels like a million years since we were in Western Pines and you were introducing me to Pokemon and Evangelion. I've got so many memories jogging around your house doing martial arts training, beating the shit out of each other with pool noodles, and watching Adult Swim until 4am or your Mom came in to scream at us to go to bed.</p>
            <p>I still want to make a manga, video game, or metal album together.</p>
            <p>I haven't given up on reading your book, it's just buried in a box in my basement and I haven't unpacked yet. I promise I will get through the whole thing one day.</p>
            <p>It sucks we don't live closer, but let's not make my bachelor party the last time we get together. Keep in touch dude. At the very least let's fucking play some computer games or something... GOD!</p>
          </section>
        )
      case 'thebaddude':
        return (
          <section className={[style.announcement, 'container'].join(" ")}>
            <h2 className={style.friend}>Matthew</h2>
            <h3>🤘🏍️🎸</h3>
            <p>Thanks for coming to my bachelor party.</p>
            <p>I hope you had a great time--I certainly did. I appreciate you putting the time and energy into making sure I had a good time at my bachelor party.</p>
            <p>You've been like an older brother to me growing up, and that's changed my life in many ways.</p>
            <p>I think if you weren't my cousin I would have grown up to be boring and incapable of having fun; you taught me to bend the rules a little.</p>
          </section>
        )
      case 'theroommate':
        return (
          <section className={[style.announcement, 'container'].join(" ")}>
            <h2 className={style.friend}>Oscar</h2>
            <h3>🍻🍗🤮</h3>
            <p>Thanks for coming to my bachelor party.</p>
            <p>I still feel bad I didn't make it to your wedding or bachelor party, but I'm glad you came with me to Colombia--it would have been a shit show without you.</p>
            <p>It has truly been a life since the days of sharing a dorm room and an apartment in Gainesville. I still can't drink or smell tequila without thinking about you beating my ass in Soul Calibur on your dreamcast and making me do a shot after each loss.</p>
            <p>It sucks we don't live closer, but let's not make my bachelor party the last time we get together. Keep in touch dude.</p>
          </section>
        )
      case 'thepaleontologist':
        return (
          <section className={[style.announcement, 'container'].join(" ")}>
            <h2 className={style.friend}>Matt</h2>
            <h3>🍕🦖🕹️</h3>
            <p>Thanks for coming to the wedding and agreeing to wear a suit on a boat.</p>
            <p>I appreciate you helping out around the house and just being a good roommate all around. I'm very happy you get to stand beside me and support me in marrying your sister.</p>
            <p>I'm also glad that you're so supportive of your sister in so many ways. It doesn't go unnoticed.</p>
            <p>Maya, however, is terrible and Elsa is the best.</p>
          </section>
        )
      case 'theweightlifter':
        return (
          <section className={[style.announcement, 'container'].join(" ")}>
            <h2 className={style.friend}>Ryan</h2>
            <h3>🏋️🥩💪</h3>
            <p>Thanks for coming to my wedding and bachelor party.</p>
            <p>We haven't known each other very long, but I appreciate you becoming a friend against your will at our wives behest.</p>
            <p>Also, thanks for helping me feel more sane about this family I'm marrying into.</p>
          </section>
        )
      case 'thedungeonmaster':
        return (
          <section className={[style.announcement, 'container'].join(" ")}>
            <h2 className={style.friend}>Zane</h2>
            <h3>🎲🦷🍕</h3>
            <p>Thanks for coming to my wedding and bachelor party.</p>
            <p>We haven't known each other very long, but I appreciate you becoming a friend against your will at our wives behest.</p>
            <p>Also, your D&D campaigns are dope.</p>
          </section>
        )
      case 'thecohost':
        return (
          <section className={[style.announcement, 'container'].join(" ")}>
            <h2 className={style.friend}>Eddie</h2>
            <h3>🎙️💻🍻</h3>
            <p>Thanks for coming to my bachelor party.</p>
            <p>It sucks you can't come to the wedding, but it was good to see you in Colombia at the very least.</p>
            <p>Side note: We shouldn't give up on the podcast, my dude.</p>
          </section>
        )
      case 'bigred':
        return (
          <section className={[style.announcement, 'container'].join(" ")}>
            <h2 className={style.friend}>Valarie</h2>
            <h3>❤️🧶🍨</h3>
            <p>Hey sis, I know you decided not to come to the wedding, but I decided to get you something anyway.</p>
            <p>I'm really going to miss you at the wedding.</p>
          </section>
        )
      case 'woowoo':
        return (
          <section className={[style.announcement, 'container'].join(" ")}>
            <h2 className={style.friend}>Chris</h2>
            <h3>🎮🚒🥷</h3>
            <p>It really sucks not having you at the wedding or Bachelor party.</p>
            <p>I would have had you in the wedding party as a groomsmen, so I decided to include you in that swag anyway.</p>
          </section>
        )
      default:
        const gift = params.get('gift')
        return <Navigate to={`/groomsmen${gift ? "?gift=" + gift : ""}`}/>
    }
  }
  return (
    <div className={style.groomsmenContainer}>
      <section className={[style.announcement, 'container'].join(" ")}>
        <div className={style.logoContainer}>
          {
            params.get('recipient') === 'bigred'
              ? <img style={{width: '100%', maxWidth: '800px', margin: '20px 0'}} className={style.weddingLogo} src={weddingLogo} alt="Groomsmen Logo" />
              : <img className={style.beastLogo} src={beastLogo} alt="Groomsmen Logo" />
          }
          
        </div>
        {
          (params.get('recipient') === 'bigred' || params.get('recipient') === 'woowoo')
          ? <>
          </>
          : <>
            <h1 className={style.title}>You Answered the Call ⚔️</h1>
            <p>In life, a lot of people will let you down. But you didn't let me down, you showed up.</p>
            <p>This is my small way of saying thanks.</p>
          </>
        }
      </section>
      {params.get('recipient') && getMessage()}
      {
        params.get('gift') === '1' &&
          <>
            <section className={[style.announcement, 'container'].join(" ")}>
              <h2>🎮</h2>
              <p>Video games have always been a big deal for me. I have a lot of fond memories centered around staring at a CRT and smashing buttons with my friends and family. I wanted to share some of those memories with you through this gift.</p>
              <p>Inside your box, (among the other knick-knacks) you'll find a portable game console and case.</p>
              <p>The case is a custom leather case that I designed myself and commissioned a leatherworker to build specifically for this occasion.</p>
              <p>The game console is a Miyoo Mini Plus, onto which I've installed a custom firmware called <a href="https://github.com/OnionUI/Onion">OnionOS</a>. I've also installed somewhere around 10,000 arcade and console games from Atari on up to Playstation 1.</p>
              <p>There's also some ports of PC games included under the PORTS folder. In there you'll find fun stuff like Doom, Duke Nukem, Cave Story, and even a port of Diablo 1 (<a href="https://github.com/diasurgical/devilutionX/wiki/Game-Controller-Scheme">here's the controls for that</a>).</p>
              <p>Outside of N64 (except for Mario 64 in the Ports section), if you enjoyed a game released before 2000, it's probably on there.</p>
              <p>For the most part, using the device is fairly straightforward. <a href="https://github.com/OnionUI/Onion/wiki/Global-Shortcuts">You can find the controls for Onion here</a>. If you want to dig deeper, <a href="https://github.com/OnionUI/Onion/wiki/Features">here's the feature list and more info</a>. In general though, you should just be able to power it on and jump into your favorite game without much fuss.</p>
              <p>Anyway, if you enjoy it (and I hope you do), let me know because I put a ton of hours into getting everything set up.</p>
            </section>
            <section className={[style.announcement, 'container', style.faq].join(" ")}>
              <h2 id="questions-and-answers">Q&A</h2> 
              <ul className="center">
                <li>
                  <p>How do I exit and/or save a game?</p>
                  <p>You can save games that have a save feature normally. However, if you use the power button and shut the device off, it will save and then resume the game when you power the device back on.<br/><br/>You can manually save/load game states by entering the Retroarch menu by holding the menu button and pressing select. You can get out of Retroarch by using the "resume" option in that menu.<br/><br/>If you want to exit a game, you can use the menu button to return to the menu, which should also create a save state (Note that this won't work for games in the "Arcade" category, which must be saved/loaded manually).</p>
                </li>
                <li>
                  <p>What are these leather cases?</p>
                  <p>I commissioned a leatherworker to create custom leather cases that I designed. <a href="https://www.etsy.com/shop/deathRATTLER">You can find his store here if you'd like to hire him.</a> Aside from looking cool, the case should protect the device from getting scuffed up in a bag or in your pocket. Just be careful not to forget it's in your back pocket and sit on it on accident or something.</p>
                </li>
                <li>
                  <p>Do I need a screen protector?</p>
                  <p>There should be one included in the box for you to apply. I would also recommend inserting the device into the case with the screen facing away from the magnetic enclosure just in case.</p>
                </li>
                <li>
                  <p>Why are there no Nintendo 64 games?</p>
                  <p>Unfortunately, the device doesn't really have enough horsepower to emulate N64. Also, the controls don't really support the N64 control scheme. <br/><br/>However, Super Mario 64 was compiled from source recently (with modified controls) and I was at least able to include that under the PORTs section.</p>
                </li>
                <li>
                  <p>Why is there an extra SD card included?</p>
                  <p>That is the original SD card the device came with. The quality control on those original cards is spotty and the included operating system leaves a lot to be desired. I upgraded the card on each device to a reputable brand and installed a custom linux firmware that is better supported and regularly updated.</p>
                </li>
              </ul>
            </section>

          </>
      }
      <footer className={style.footer}>
        <p>Cheers and Love,<br/>Lee</p>
        <img className={style.weddingLogo} src={weddingLogo} alt="wedding logo" />
      </footer>
    </div>
  )
}
