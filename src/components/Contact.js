import React from 'react'

function Contact() {
    return (
        <div className='contact-container'>
            <div className='container-description-text'>
                <p>Hello from text container</p>
            </div>
            <div className='container-form'>
                <form className='container-form__submit'>
                    <div id='containerName'>
                        <label>First Name *</label>
                        <input type='text' name='firstName' />
                        <label>Last Name *</label>
                        <input trype='text' name='familyName' />
                    </div>
                    <div className='container-form__submit__containerLabel'>
                        <label>Email Address *</label>
                        <input trype='text' name='email' />
                    </div>
                    <div className='container-form__submit__containerLabel'>
                        <label>Your Story *</label>
                        <input trype='text' name='description' />
                    </div>
                    <div className='container-form__submit__containerLabel'>
                        <label>How did you hear about me ?</label>
                        <input trype='text' name='networking' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;