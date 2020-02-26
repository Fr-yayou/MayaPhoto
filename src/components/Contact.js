import React,{ Component } from 'react'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class Contact extends Component {


    state = {
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        networking: '',
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
         const { firstName, email, lastName,description,networking } = this.state;
        return (
            <div className='contact-container'>
                <div className='container-description-text'>
                    <p>Thank you for taking interest in working with me! My sessions start at <span>$250.00.</span>. Please tell me a little more about yourself and what you hope to capture. You may either fill out the contact form or email me at <span>mayacmartin@gmail.com</span></p>
                </div>
                <div className='container-form'>
                    <form className='container-form__submit' onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field" >
                        <div id='containerName'>
                            <label>First Name *</label>
                            <input id="name" type='text' name='firstName' value={firstName} onChange={this.handleChange} />
                            <label>Last Name *</label>
                            <input id='lastName' trype='text' name='lastName' value={lastName} onChange={this.handleChange} />
                        </div>
                        <div className='container-form__submit__containerLabel'>
                            <label>Email Address *</label>
                            <input id='email' trype='text' name='email' value={email} onChange={this.handleChange} />
                        </div>
                        <div className='container-form__submit__containerLabel'>
                            <label>Your Story *</label>
                            <input id='yourStory' trype='text' name='description' value={description} onChange={this.handleChange} />
                        </div>
                        <div className='container-form__submit__containerLabel'>
                            <label>How did you hear about me ?</label>
                            <input id='HowDidYou' trype='text' name='networking' value={networking} onChange={this.handleChange} />
                        </div>
                        <div className='container-form__submit__containerLabel__btn'>
                            <input id='submitBtn' type='submit' name='btn' />
                        </div>
                    </form>
                </div>
            </div>
        )
        
    }
}

export default Contact;