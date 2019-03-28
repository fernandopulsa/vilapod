import React from "react"

const ContactoBlock = props => (
  <section id="contacto">
    <div className="content_wrapper layout">
      <div className="title_wrapper">
        <h3 className="title">Contacto</h3>
      </div>
      <div className="rrss_wrapper">
        <div className="rrss_item">
          <a href="https://twitter.com/vilapod" target="blank">
            Twitter
          </a>
        </div>
        <div className="rrss_item">
          <a href="https://www.facebook.com/VilaPodcast/" target="blank">
            Facebook
          </a>
        </div>
      </div>
    </div>
    <div className="map_block">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.3555230871852!2d-0.09944288436088057!3d39.93343657942423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6006e693913eeb%3A0x57c6bd9a86ee496a!2sEspai+Jove!5e0!3m2!1ses!2ses!4v1552340301769"
        width="100%"
        height="350"
        frameborder="0"
        allowfullscreen
      />
    </div>
  </section>
)

export default ContactoBlock
