import React from 'react'

function Contact() {
    return (
        <div className='contact-container'>
            <div className='container-description-text'>
                <p>Thank you for taking interest in working with me! My sessions start at <span>$250.00.</span>. Please tell me a little more about yourself and what you hope to capture. You may either fill out the contact form or email me at <span>mayacmartin@gmail.com</span>
</p>
            </div>
            <div className='container-form'>
                <form className='container-form__submit'data-netlify="true" method="POST" >
                    <div id='containerName'>
                        <label>First Name *</label>
                        <input id="name" type='text' name='firstName' />
                        <label>Last Name *</label>
                        <input  id='lastName'trype='text' name='familyName' />
                    </div>
                    <div className='container-form__submit__containerLabel'>
                        <label>Email Address *</label>
                        <input id='email' trype='text' name='email' />
                    </div>
                    <div className='container-form__submit__containerLabel'>
                        <label>Your Story *</label>
                        <input id='yourStory' trype='text' name='description' />
                    </div>
                    <div className='container-form__submit__containerLabel'>
                        <label>How did you hear about me ?</label>
                        <input id='HowDidYou' trype='text' name='networking' />
                    </div>
                    <div className='container-form__submit__containerLabel__btn'>
                        <input id='submitBtn' type='submit' name='btn'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;