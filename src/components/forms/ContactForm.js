import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default function ContactForm() {
    let defualtForm = {
        name: "",
        email: "",
        message: ""
    }
    const [formData, setFormData] = useState(defualtForm)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData.name)
    }


    return (
        <div className="cust-form">
            <h2 className="lg-text">Contact Me</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    className="bg-transparent mt-2 cust-form-border "
                    size="sm"
                    type="text"
                    placeholder="Name*"
                    onChange={(e) => setFormData({ name: e.target.value })}
                />
                <Form.Control
                    className="bg-transparent mt-2 cust-form-border"
                    size="sm"
                    type="email"
                    placeholder="Email*"
                    onChange={(e) => setFormData({ email: e.target.value })}
                />
                <Form.Control
                    className="bg-transparent mt-2 cust-form-border"
                    size="sm"
                    as="textarea"
                    rows="5"
                    placeholder="Message*"
                    onChange={(e) => setFormData({ message: e.target.value })}
                />

                <Button size="sm" className="bg-transparent mt-2 text-secondary cust-form-border" type="submit"> Submit </Button>
            </Form>
        </div>
    )
}
