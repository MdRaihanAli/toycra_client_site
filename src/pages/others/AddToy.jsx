import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function AddToy() {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target 
        const title = form.title.value 
        const name = form.name.value 
        const email = form.email.value 
        const price = form.price.value 
        const rating = form.rating.value 
        const quantity = form.quantity.value 
        const detail = form.detail.value 
        const category = form.category.value 
        const photo = form.photo.value 
        
        const user ={
            title, name, email, price, rating, quantity, detail, category, photo
        }
       
        fetch('https://toycra-server-side-mdraihanali.vercel.app/addtoy',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }



    return (
        <div className='container my-5 bg-light'>
            <div className="col-md-8">
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Label>Toy Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder='Give a toy name'

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Seler Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder='Name'

                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
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
                                <option value="Sports">Sports</option>
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
                    <Button type="submit">Submit form</Button>
                </Form>




            </div>
            <div className="col-md-4"></div>
        </div>
    )
}

export default AddToy