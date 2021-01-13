import React, { useState} from 'react'
import * as emailjs from 'emailjs-com'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email || !message) {
            alert("Please fill out whole form")
        }
        else {
            const template = {
                sender_name: name,
                sender_email: email,
                message: message
            }

            emailjs.send(
                'service_wq5bs3f',
                'template_33jh54i',
                template,
                'user_4VLHrFXNYi3NswZxuFCVx'
            ).then(response => {
                alert("Form succesfully submited!")
            }, error => {
                alert("Sorry something went wrong")
                console.log(`Error: ${error}`)
            })
        }
        
        resetForm(e)
    }

    const handleChange = (e) => {
        let form = e.target.name
        let value = e.target.value

        if (form === "name") {
            setName(value)
        }
        if (form === "email") {
            setEmail(value)
        }
        if (form === "message") {
            setMessage(value)
        }
    }

    const resetForm = (e) => {
        setName("")
        setEmail("")
        setMessage("")
        e.target.reset()
    }


    return (
        <div className="cust-form">
            <h2 className="lg-text">Contact Me</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    className="bg-transparent mt-2 cust-form-border "
                    name="name"
                    size="sm"
                    type="text"
                    placeholder="Name*"
                    onChange={handleChange}
                />
                <Form.Control
                    className="bg-transparent mt-2 cust-form-border"
                    name="email"
                    size="sm"
                    type="email"
                    placeholder="Email*"
                    onChange={handleChange}
                />
                <Form.Control
                    className="bg-transparent mt-2 cust-form-border"
                    name="message"
                    size="sm"
                    as="textarea"
                    rows="5"
                    placeholder="Message*"
                    onChange={handleChange}
                />

                <Button size="sm" className="bg-transparent mt-2 text-secondary cust-form-border cust-form-button" type="submit"> Submit </Button>
            </Form>
        </div>
    )
}
