import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './Home.css'

function Galery() {
    const [cardData, setCardData] = useState([])
    useEffect(() => {
        fetch('https://toycra-server-side-mdraihanali.vercel.app/galery')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])
    
    return (
        <div className='bg-light pb-2 pb-md-5'>
            <h2 className='text-center text-tomato py-2 pt-md-5 mb-3 fw-bold'> Our <span className="tomato_color">Collections</span></h2>
            <div className='container'>
                <div className="row g-3">
                    {
                        cardData.slice(0, 8).map(x => <div key={x._id} className="col-md-4 col-lg-3">
                            <Card className="bg-ligth main_card text-datk">
                                <Card.Img src={x.photo} alt="Card image" />
                                <Card.ImgOverlay>
                                    <div className='galery_text bg-dark'>
                                        <Card.Title className='tomato_color'>{x.title}</Card.Title>
                                        <Card.Text className='text-muted'>
                                            {x.detail}
                                        </Card.Text>

                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}

export default Galery