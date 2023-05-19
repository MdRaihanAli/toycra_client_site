import React, { useEffect, useState } from 'react'
import '../Home.css'
import { Link } from 'react-router-dom';

function Categori3() {
  const [carCategori, setCarCategori] = useState([])
  const [forSot, setSot] = useState([])


  useEffect(() => {
    fetch(`https://toycra-server-side-mdraihanali.vercel.app/categoris/regular`)
      .then(res => res.json())
      .then(dat => {
        setCarCategori(dat)
        setSot(dat)
      })
  }, [])

  const selectCategoris = (text) => {

    if (text == "low") {
      const result = carCategori.filter(x => x.price < 2000)
      setSot(result)
    }
    else if (text == 'mid') {
      const result = carCategori.filter(x => x.price > 2000 && x.price < 5000)
      setSot(result)
    }
    else if (text == 'heigh') {
      const result = carCategori.filter(x => x.price > 5000)
      setSot(result)
    }

  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-2">
          <p onClick={() => selectCategoris('low')} className='bg_tomato'>Low Price</p>
          <p onClick={() => selectCategoris('mid')} className='bg_tomato'>Mid Price</p>
          <p onClick={() => selectCategoris('heigh')} className='bg_tomato'>Heigh Price</p>
        </div>
        <div className="col-md-10">
          <div className="row g-3">
            {
              forSot.slice(0, 4).map(data => <div key={data._id} className=" col-md-6">
                <div className="card p-2">
                  <div className="row gap-0">
                    <div className="col-5">
                      <img style={{maxWidth:'165px', maxHeight:'165px'}} className='w-100' src={data.photo} alt="" />
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
    </div>
  )
}

export default Categori3