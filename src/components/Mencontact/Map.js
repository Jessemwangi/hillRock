import React from 'react'

function Map() {
    return (
        <div>
            <section className="contact-map">
                <div className="container">
                    <div className="google-map google-map__contact">
                        <iframe
                            title="Kenya map"
                            className="map__contact"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8171114.070898746!2d32.61206587722788!3d0.1649188195584281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2sfi!4v1716800143938!5m2!1sen!2sfi"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    {/* /.google-map */}
                </div>
                {/* /.container-fluid */}
            </section>

        </div>
    )
}

export default Map