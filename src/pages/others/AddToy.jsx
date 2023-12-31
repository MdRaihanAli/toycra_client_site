import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { AuthContext } from '../../authprovidr/Authprovider';
import { Link } from 'react-router-dom';




function AddToy() {

    const handelTitle=()=>{
        document.title = 'AddToy--Toycra'
    }
    handelTitle()

    const { user } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const seler = form.name.value
        const email = form.email.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const detail = form.detail.value
        const category = form.category.value
        const photo = form.photo.value

        const users = {
            title, seler, email, price, rating, quantity, detail, category, photo
        }

        fetch('https://toycra-server-side-mdraihanali.vercel.app/addtoy', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your toy added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
    }

    const [toy, setToy] = useState([])
    useEffect(() => {
        fetch(`https://toycra-server-side-mdraihanali.vercel.app/singleuser/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
                console.log(data);
            })
    }, [])


    return (
        <div className='bg_color'>
            <div className='container py-5 '>
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="text-center fw-bold mb-4">Add a <span className='tomato_color'>Toy</span></h2>
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationFormik01">
                                    <Form.Label>Toy Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="title"
                                        placeholder='Give a toy name'

                                    />

                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik02">
                                    <Form.Label>Seler Name</Form.Label>
                                    <Form.Control
                                        defaultValue={user?.displayName}
                                        type="text"
                                        name="name"
                                        placeholder='Name'

                                    />


                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control
                                            value={user?.email}
                                            type="email"
                                            placeholder="Enter a email"
                                            aria-describedby="inputGroupPrepend"
                                            name="email"

                                        />

                                    </InputGroup>
                                </Form.Group>
                            </Row>





                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationFormik03">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Price"
                                        name="price"
                                    />
                                </Form.Group>


                                <Form.Group as={Col} md="3" controlId="validationFormik04">
                                    <Form.Label>Raring</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Rating"
                                        name="rating"
                                        max='5'
                                        min='0'
                                    />
                                </Form.Group>


                                <Form.Group as={Col} md="3" controlId="validationFormik05">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Quantity"
                                        name="quantity"

                                    />

                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} md="6" className="mb-3">
                                    <Form.Label>Details</Form.Label>
                                    <Form.Control
                                        required
                                        name="detail"
                                        as="textarea"
                                        rows={2}

                                    />
                                </Form.Group>

                                <Form.Group md="3" as={Col} className="mb-3">
                                    <Form.Label>Select Categoris</Form.Label>
                                    <Form.Select name='category' aria-label="Default select example">
                                        <option value="sports">Sports</option>
                                        <option value="truck">Truck</option>
                                        <option value="regular">Regular</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="validationFormik05">
                                    <Form.Label>Photo Url</Form.Label>
                                    <Form.Control
                                        type="url"
                                        placeholder="Photo Link"
                                        name="photo"
                                    />

                                </Form.Group>
                            </Row>
                            <button className='btn bg_tomato' type="submit ms-auto">Submit form</button>
                        </Form>




                    </div>

                    <div className="col-md-4">
                        <h4 className='mb-4'>Your  <span className='tomato_color'>Items</span> :-</h4>
                        {
                            toy.slice(0, 2).map(data => <div key={data._id} className="mb-3">
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
        </div>
    )
}

export default AddToy