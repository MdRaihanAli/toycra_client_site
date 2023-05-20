import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../authprovidr/Authprovider';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function MyToy() {
    const { user } = useContext(AuthContext)
    console.log(user?.email);
    const [modalData, setModalData] = useState(null);

    const openModal = (data) => {
        setModalData(data);
    };
    const closeModal = () => {
        setModalData(null);
    };




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
                        
                    })
            }
        })
    }

    const updateHandel = (event) => {
        event.preventDefault()
        const form = event.target 
        const id = form.id.value
        const price = form.price.value
        const quantity = form.quantity.value
        const detail = form.detail.value
        const updateUser={price, quantity, detail}
        // console.log(id, price, quantity, detail);

        fetch(`http://localhost:5000/update/${id}`,{
            method: 'PATCH',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(fol=>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your Item Updated',
                showConfirmButton: false,
                timer: 1500
              })
            console.log(fol);
            closeModal()
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
                                <td> <button onClick={() => openModal(x)} className='btn btn-secondary'>Edite</button></td>
                                <td> <button onClick={() => handelDelete(x._id)} className='btn btn-secondary'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>


            <div>
                <Modal show={modalData !== null} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update This Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={updateHandel}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationFormik03">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Price"
                                        name="price"
                                        defaultValue={modalData?.price}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationFormik05">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Quantity"
                                        name="quantity"
                                        defaultValue={modalData?.quantity}

                                    />

                                </Form.Group>
                            </Row>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <Form.Label>Details</Form.Label>
                                <Form.Control
                                    name="detail"
                                    as="textarea"
                                    rows={2}
                                    defaultValue={modalData?.detail}

                                />
                            </Form.Group>
                            <input className='d-none' name='id' type="text" value={modalData?._id} />
                            <button  className='btn bg_tomato' type="submit ms-auto">Submit form</button>
                        </Form>
                        
                    </Modal.Body>
                    
                </Modal>
            </div>


        </div>
    )
}

export default MyToy