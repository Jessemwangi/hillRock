import React from 'react'

function Teamform() {
    return (
        <>
            <section className="team-form-one background-white">
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Contact with us</h6>
                        <h3 className="sec-title__title">
                            Have Any Questions? Feel <br />
                            Free to Write us
                        </h3>
                    </div>
                    <form
                        className="form-one team-form-one__form contact-form-validated "
                        action="inc/sendemail.php"
                    >
                        <div className="form-one__group">
                            <div className="form-one__control ">
                                <input type="text" name="name" placeholder="Your name" />
                            </div>
                            <div className="form-one__control">
                                <input type="email" name="email" placeholder="Email address" />
                            </div>
                            <div className="form-one__control form-one__control--full">
                                <textarea
                                    name="message"
                                    placeholder="Write  a message"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="form-one__control form-one__control--full text-center">
                                <button type="submit" className="hiredots-btn hiredots-btn--base">
                                    <span>Send a message</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="result" />
                </div>
            </section>
        </>
    )
}

export default Teamform