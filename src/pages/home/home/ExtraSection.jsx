import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Form } from 'react-router-dom'

function ExtraSection() {
    return (
        <div className='bg_image' >
            <div className="bg_home_color ">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="login_home_contaienr mt-lg-5 mt-md-3 mt-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="card-title text-light text-center mb-2">You can trust us!!</h2>
                                    <p>
                                        statement that implies the speaker or the group they represent is trustworthy. However, trust is something that is built over time through consistent and reliable actions. Without any specific <span className="d-md-block d-none">context or supporting information, it is difficult to determine the credibility or trustworthiness of the speaker or group making the statement. Trust is typically established through a combination of factors, such as honesty,
                                        </span>
                                    </p>

                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <Form>
                                            <textarea name="" placeholder='Messege Here' className="form-control mb-3" id="" cols="30" rows="2"></textarea>
                                            <input type="text" placeholder='Enter Your Email' className="form-control mb-3" />
                                            <p className='text-end'><button className='btn btn-light' type="submit ms-auto">Send Message</button></p>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtraSection