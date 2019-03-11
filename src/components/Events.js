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
    <div className="title_wrapper layout">
      <h3 className="title">Horario</h3>
    </div>

    <div className="content_wrapper layout">
      {EventList.map((item, i) =>
        item.part === 1 ? <Event data={item} key={i} /> : null
      )}
    </div>

    <div className="parada layout">
      <p>Parada a comer</p>
    </div>
    <div className="content_wrapper layout">
      {EventList.map((item, i) =>
        item.part === 2 ? <Event data={item} key={i} /> : null
      )}
    </div>
  </section>
)

export default EventsBlock
