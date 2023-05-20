import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function AllToy() {
    const [toy, setToy] = useState([])
    useEffect(() => {
        fetch('https://toycra-server-side-mdraihanali.vercel.app/alltoy')
            .then(res => res.json())
            .then(data => {
                setToy(data)
            })
    }, [])
    return (
        <div className="bg_color pb-4">
            <h3 className="text-bold text-center py-4"> All <span className="tomato_color">Toys</span></h3>
            <div className='container'>

                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Imaige</th>
                            <th>Toy Name</th>
                            <th>Sheler Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toy.map((x, i) => <tr key={i}>
                                <td>{i + 1}</td>
                                <td><img style={{ widows: '80px', height: '80px' }} src={x.photo} alt="" /></td>
                                <td>{x.title}</td>
                                <td>{x.seler}</td>
                                <td>{x.category}</td>
                                <td>{x.price}</td>
                                <td>{x.quantity}</td>
                                <td> <Link to={`/viewdetails/${x._id}`} className='btn btn-secondary'>Details</Link></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AllToy