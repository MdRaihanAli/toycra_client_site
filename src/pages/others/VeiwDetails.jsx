import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Link, useLoaderData } from 'react-router-dom'

function VeiwDetails() {
    const [carCategori, setCarCategori] = useState([])
    const singleData = useLoaderData()

    useEffect(() => {
        fetch(`https://toycra-server-side-mdraihanali.vercel.app/alltoy`)
            .then(res => res.json())
            .then(dat => {
                setCarCategori(dat)
                setSot(dat)
            })
    }, [])
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <div className="col-8">
                            <Card>
                                <Card.Img variant="top" src={singleData.photo} />
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4">
                            <h4 className="card-title">{singleData.title}</h4>
                            <hr />
                            <h6>Raring: <span className=''>{singleData.rating}</span></h6>
                            <hr />
                            <p>{singleData.detail}</p>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                <h4 className='mb-4'>See More  <span className='tomato_color'>Items</span> :-</h4>
                    {
                        carCategori.slice(0, 3).map(data => <div key={data._id} className="mb-3">
                            <div className="card p-2">
                                <div className="row gap-0">
                                    <div className="col-5">
                                        <img className='w-100' src={data.photo} alt="" />
                                    </div>
                                    <div className="col-7">
                                        <h5 className="card-title">{data.title}</h5>
                                        <span>{data.rating}</span>
                                        <p> price : ${data.price}</p>
                                        <div className='text-end'>
                                            <Link to={`/viewdetails/${data._id}`}><button className='btn btn-outline-danger ms-auto'> Details</button></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default VeiwDetails