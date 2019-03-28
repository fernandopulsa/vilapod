import React from "react"
import { EventList } from "../shared/Events_list"
// import { Link } from "gatsby"

const Event = props => (
  <div className="event_item">
    <p className="type">
      {props.data.type} / {props.data.time} h
    </p>
    <h4>{props.data.title}</h4>
    {/* <p>{props.data.description}</p> */}
  </div>
)

const EventsBlock = props => (
  <section id="events">
    <p className="title layout">Mañana</p>
    <div className="content_wrapper layout">
      {EventList.map((item, i) =>
        item.part === 1 ? <Event data={item} key={i} /> : null
      )}
    </div>

    <p className="title layout">Tarde </p>
    <div className="content_wrapper layout tarde">
      {EventList.map((item, i) =>
        item.part === 2 ? <Event data={item} key={i} /> : null
      )}
    </div>
    <p className="title layout">Noche</p>
    <div className="content_wrapper layout noche">
      {EventList.map((item, i) =>
        item.part === 3 ? <Event data={item} key={i} /> : null
      )}
    </div>
  </section>
)

export default EventsBlock
