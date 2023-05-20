import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../authprovidr/Authprovider';
// import withReactContent from 'sweetalert2-react-content'

function MyToy() {
    const {user}= useContext(AuthContext)
    console.log(user?.email);

    const [toy, setToy] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/singleuser/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
            })
    }, [])

    const handelDelete = (id) => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )


                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(dat => {
                        console.log(dat);
                    })





            }
        })





    }
    return (
        <div className="bg_color">
            <h3 className="text-bold text-center py-4"> My <span className="tomato_color">Toys</span></h3>
            <div className='container'>

                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Imaige</th>
                            <th>Toy Name</th>

                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details </th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toy.map((x, i) => <tr key={i}>
                                <td>{i + 1}</td>
                                <td><img style={{ widows: '80px', height: '80px' }} src={x.photo} alt="" /></td>
                                <td>{x.title}</td>

                                <td>{x.category}</td>
                                <td>{x.price}</td>
                                <td>{x.quantity}</td>
                                <td> <Link to={`/viewdetails/${x._id}`} className='btn btn-secondary'>Details</Link></td>
                                <td> <button onClick={() => handelDelete(x._id)} className='btn btn-secondary'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MyToy