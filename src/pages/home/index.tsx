import style from './style.module.css'
import gross from '../../assets/lee_and_kenna.jpg'
import weddingLogo from '../../assets/lm.svg'
// Disney Wonder
// Monday, September 4-Monday, September, 11th, 2023 to Alaska out of Vancouver, BC Canada Cruise Terminal
// **Website: 7-Night Alaskan Cruise from Vancouver on Disney Wonder on September 4, 2023 | Disney Cruise Line
// https://disneycruise.disney.go.com/cruises-destinations/list/DW1989/7-Night-Alaskan-Cruise-from-Vancouver/2023-09-04-Disney-Wonder/
// Departure at 4pm, September 4th, 2023 from Vancouver
// Arrival and disembarkation at 8am Vancouver, BC Canada

// Point of Contact for Disney Wedding: Stephanie Flaherty, Disney Cruise Line Wedding Services Manager, Phone: 1-866-325-6336 option #1
// Please include Cruise Reservation # with Disney Cruise with RSVP.

// Travel (Flights):
// Destination Airport Vancouver, BC Canada (YVR):
// *Alaskan Airlines (Couple's Airline)
// American Airlines
// United Airlines
// Southwest Airlines

// Accommodations (Recommended Sunday, September 3-Monday, 4th, 2023; Shuttle to cruise Terminal can be scheduled depending on hotel location):

// *Hampton Inn By Hilton Vancouver-Airport/Richmond ($296/night; couple's hotel) - [https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=YVRRHHX&arrivalDate=2023-09-03&departureDate=2023-09-04&room1NumAdults=2&displayCurrency=CAD&brandCode=HH&inputModule=HOTEL_SEARCH&srpName=]

// -Hilton Vancouver Metrotown ($290/night) - [https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=YVRVMHF&arrivalDate=2023-09-03&departureDate=2023-09-04&room1NumAdults=2&displayCurrency=CAD&brandCode=HH&inputModule=HOTEL_SEARCH&srpName=]

// -Barclay Hotel ($130/night): [https://www.booking.com/hotel/ca/barclay.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaKgCiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALjvdudBsACAdICJGI2MWJjNjRkLWEwNGQtNGY5Yi1iZWFkLTExMGYzYmZhOTI3YtgCBeACAQ&sid=8df9b49473252e95950852a422a81f30&all_sr_blocks=53456402_272360714_2_0_0;checkin=2023-09-03;checkout=2023-09-04;dest_id=-575268;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=3;highlighted_blocks=53456402_272360714_2_0_0;hpos=3;matching_block_id=53456402_272360714_2_0_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=53456402_272360714_2_0_0__14900;srepoch=1672929020;srpvid=c74165fd6ce50186;type=total;ucfs=1&#hotelTmpl]

// -Four Points by Sheraton Vancouver Airport ($272/night): [https://www.marriott.com/search/hotelQuickView.mi?propertyId=YVRFP&brandCode=FP&marshaCode=YVRFP]

// **Recommend Booking.com for other hotel selections.

export default function Home() {
  const goTime = new Date('09/05/2023 15:00 PDT')
  function daysToGo(d: Date) {
    // const now = Date.now()
    const days = Math.max(Math.floor((d.getTime() - Date.now()) / 1000 / 60 / 60 / 24), 0)
    return `${days} Day${days > 1 ? 's' : ''} to Go!`
  }
  return (
    <>
      <section className={[style.announcement, 'container'].join(" ")}>
        <h1 className={style.title}>Makenna & Lee</h1>
        <p>SEPT 5<sup>th</sup>, 2023 at 3:00 PM aboard the Disney Wonder&trade;.</p>
        <p>{daysToGo(goTime)}</p>
        <div className={style.usPic}>
          <img src='/escape_room.png' alt="Makenna & Lee" />
        </div>
      </section>
      <section className={[style.cruise, 'container-fluid'].join(" ")}>
        <h2 className={style.heading}>Venue</h2>
      </section>
      <section className={'container'}>
        <p>Join us aboard the Disney Wonder&trade; on a 7-night Alaskan Cruise from Vancouver.</p>
        <p>Dates: Monday, September 4<sup>th</sup> through Monday, September 11<sup>th</sup>, 2023.</p>
        <a href="https://disneycruise.disney.go.com/cruises-destinations/list/DW1989/7-Night-Alaskan-Cruise-from-Vancouver/2023-09-04-Disney-Wonder/">Details and booking information for the cruise can be found at this link.</a>
      </section>
      <section className={[style.details, 'container-fluid'].join(" ")}>
        <div className={style.col}></div>
        <div className={style.col}></div>
        <div className={style.col}></div>
      </section>
      <section className={'container'}>
        <h2 className={style.heading}>Reception</h2>
        <img src={gross} className={style.gross} alt="Kenna and I making a face telling you NO" />
        <p>Did you make a face after you clicked the cruise link?</p>
        <p>Did you think:</p>
        <blockquote><em>Wow, they think we can afford a cruise just to see them get married? They've lost their little minds.</em></blockquote>
        <p>It's OK. We made a similar face looking at cruise prices, flights, and hotels.</p>
        <p>We don't expect everyone is going to want to fly across the country, get a passport, and float to Juneau just to see us get hitched.</p>
        <p>We wanted to do something special, and we realize it's not something everyone can attend.</p>
        <p>So for that reason, we plan to have a reception sometime in January or February 2024 so everyone can come and celebrate our marriage. It will probably be in Orlando, FL so Kenna can take pictures at Disney. We'll post details here on the site when we have them.</p>
      </section>
      <footer className={style.footer}>
        <p>Made with love by Lee because Kenna told me to.</p>
        <img className={style.weddingLogo} src={weddingLogo} alt="wedding logo" />
      </footer>
    </>
  )
}
