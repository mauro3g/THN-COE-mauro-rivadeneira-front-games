import React from 'react'
import useValues from '../hooks/value/useValues'
import Nav from '../Molecules/Nav/Nav'

const initialContactForm = {
    name: "",
    email: "",
    message: ""
}

const handleSubmit = () => {

}

const About = () => {
    const { values: contactFormValues, updateValue: handleChange, updateValues } = useValues(initialContactForm)

    return (
        <React.Fragment>
            <div className='about flex justify-center items-center'>
                <div>
                    <form className='flex flex-col' onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                        <h1>Contact Us</h1>
                        <label htmlFor="name">Name: </label>
                        <input
                            id="name"
                            type="text"
                            aria-label='name'
                            value={contactFormValues['name']}
                            onChange={(e) => handleChange('name', e.target.value)}
                            autoFocus
                            required
                        />
                        <br />
                        <label htmlFor="email">Email: </label>
                        <input
                            id="email"
                            type="email"
                            aria-label='email'
                            value={contactFormValues['email']}
                            onChange={(e) => handleChange('email', e.target.value)}
                            autoFocus
                            required
                        />
                        <br />
                        <label htmlFor="message">Message: </label>
                        <textarea
                            id="message"
                            aria-label='message'
                            value={contactFormValues['message']}
                            onChange={(e) => handleChange('message', e.target.value)}
                            autoFocus
                            required
                        />
                        <br />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About