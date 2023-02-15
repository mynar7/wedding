import style from './style.module.css'
import escapePic from '../../assets/escape_room.png'


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
          <img src={escapePic} alt="Makenna & Lee" />
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
    </>
  )
}