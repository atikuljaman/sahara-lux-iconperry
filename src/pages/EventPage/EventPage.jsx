import { Navigation } from "../../components";
import event_1 from "../../assets/event-1.jpg";
import event_2 from "../../assets/event-2.jpg";
import event_3 from "../../assets/event-3.jpg";
import event_4 from "../../assets/event-4.jpg";
import event_5 from "../../assets/event-5.jpg";
import event_6 from "../../assets/event-6.jpg";
import "./EventPage.css";
import { useState } from "react";

const EventPage = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);
  const [showDropdown7, setShowDropdown7] = useState(false);

  return (
    <div>
      <Navigation />

      <div className="events_wrapper">
        <div className="container">
          <h2>Events</h2>

          <div className="content">
            <div className="box">
              <div className="left">
                <img src={event_1} alt="" className="img-fluid h-100 w-100" />
              </div>
              <div className="right">
                <h3>Karasoul</h3>
                <p>Friday January 5th</p>
                <p>Every Friday</p>
                <p>
                  Karasoul party! Sing, Dance, celebrate! Every Friday with DJ
                  Layne
                </p>
                <p>08:00 PM - 12:00 AM</p>

                <div
                  className="dropdown"
                  onClick={() => setShowDropdown1(!showDropdown1)}
                >
                  <span>Add To Calendar</span>

                  {showDropdown1 && (
                    <ul>
                      <li>
                        <a href="">iCalendar</a>
                      </li>
                      <li>
                        <a href="">Google Calendar</a>
                      </li>
                      <li>
                        <a href="">Outlook</a>
                      </li>
                      <li>
                        <a href="">Outlook Online</a>
                      </li>
                      <li>
                        <a href="">Yahoo! Calendar</a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="box">
              <div className="left">
                <img src={event_2} alt="" className="img-fluid h-100 w-100" />
              </div>
              <div className="right">
                <h3>Liquid Crystal Live</h3>
                <p>Saturday January 6th</p>
                <p>Live Music</p>
                <p>07:00 PM - 10:00 PM</p>

                <div
                  className="dropdown"
                  onClick={() => setShowDropdown2(!showDropdown2)}
                >
                  <span>Add To Calendar</span>

                  {showDropdown2 && (
                    <ul>
                      <li>
                        <a href="">iCalendar</a>
                      </li>
                      <li>
                        <a href="">Google Calendar</a>
                      </li>
                      <li>
                        <a href="">Outlook</a>
                      </li>
                      <li>
                        <a href="">Outlook Online</a>
                      </li>
                      <li>
                        <a href="">Yahoo! Calendar</a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="box">
              <div className="left">
                <img src={event_3} alt="" className="img-fluid h-100 w-100" />
              </div>
              <div className="right">
                <h3>C J's Soul Food Presents</h3>
                <p>Sunday January 7th</p>
                <p>C J's Soul Food Presents Sassy Bow Flow Live</p>
                <p>01:00 PM - 04:00 PM</p>

                <div
                  className="dropdown"
                  onClick={() => setShowDropdown3(!showDropdown3)}
                >
                  <span>Add To Calendar</span>

                  {showDropdown3 && (
                    <ul>
                      <li>
                        <a href="">iCalendar</a>
                      </li>
                      <li>
                        <a href="">Google Calendar</a>
                      </li>
                      <li>
                        <a href="">Outlook</a>
                      </li>
                      <li>
                        <a href="">Outlook Online</a>
                      </li>
                      <li>
                        <a href="">Yahoo! Calendar</a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="box">
              <div className="left">
                <img src={event_4} alt="" className="img-fluid h-100 w-100" />
              </div>
              <div className="right">
                <h3>Tibby Porter Presents</h3>
                <p>Saturday January 13th</p>
                <p>Special Guest: Saxtone Live!</p>
                <p>07:00 PM - 10:00 PM</p>

                <div
                  className="dropdown"
                  onClick={() => setShowDropdown4(!showDropdown4)}
                >
                  <span>Add To Calendar</span>

                  {showDropdown4 && (
                    <ul>
                      <li>
                        <a href="">iCalendar</a>
                      </li>
                      <li>
                        <a href="">Google Calendar</a>
                      </li>
                      <li>
                        <a href="">Outlook</a>
                      </li>
                      <li>
                        <a href="">Outlook Online</a>
                      </li>
                      <li>
                        <a href="">Yahoo! Calendar</a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="box">
              <div className="left">
                <img src={event_5} alt="" className="img-fluid h-100 w-100" />
              </div>
              <div className="right">
                <h3>CJ's Soulfood Presents</h3>
                <p>Saturday January 27th</p>
                <p>Rick Sexton Live</p>
                <p>07:00 PM - 10:00 PM</p>

                <div
                  className="dropdown"
                  onClick={() => setShowDropdown5(!showDropdown5)}
                >
                  <span>Add To Calendar</span>

                  {showDropdown5 && (
                    <ul>
                      <li>
                        <a href="">iCalendar</a>
                      </li>
                      <li>
                        <a href="">Google Calendar</a>
                      </li>
                      <li>
                        <a href="">Outlook</a>
                      </li>
                      <li>
                        <a href="">Outlook Online</a>
                      </li>
                      <li>
                        <a href="">Yahoo! Calendar</a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="box">
              <div className="left">
                <img src={event_6} alt="" className="img-fluid h-100 w-100" />
              </div>
              <div className="right">
                <h3>CJ's Soulfood Presents</h3>
                <p>Sunday January 28th</p>
                <p>Jimmy Mcgee Live</p>
                <p>01:00 PM - 04:00 PM</p>

                <div
                  className="dropdown"
                  onClick={() => setShowDropdown6(!showDropdown6)}
                >
                  <span>Add To Calendar</span>

                  {showDropdown6 && (
                    <ul>
                      <li>
                        <a href="">iCalendar</a>
                      </li>
                      <li>
                        <a href="">Google Calendar</a>
                      </li>
                      <li>
                        <a href="">Outlook</a>
                      </li>
                      <li>
                        <a href="">Outlook Online</a>
                      </li>
                      <li>
                        <a href="">Yahoo! Calendar</a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="box box_2">
              <div className="right">
                <h3>Valentine's Day</h3>
                <p>Wednesday February 14th</p>
                <p>
                  Join us on Valentine's Day for the perfect romantic evening!
                </p>
                <p>11:00 AM - 11:00 PM</p>

                <div
                  className="dropdown"
                  onClick={() => setShowDropdown7(!showDropdown7)}
                >
                  <span>Add To Calendar</span>

                  {showDropdown7 && (
                    <ul>
                      <li>
                        <a href="">iCalendar</a>
                      </li>
                      <li>
                        <a href="">Google Calendar</a>
                      </li>
                      <li>
                        <a href="">Outlook</a>
                      </li>
                      <li>
                        <a href="">Outlook Online</a>
                      </li>
                      <li>
                        <a href="">Yahoo! Calendar</a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
