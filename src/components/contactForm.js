import React from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
}

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state
            })
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => alert(error));
    };

    render() {
        return (
            <div className="contact">
                <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    action="/thanks/"
                    onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>
                            Don’t fill this out:{' '}
                            <input
                                name="bot-field"
                                onChange={this.handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your name:<br />
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your email:<br />
                            <input
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message:<br />
                            <textarea
                                name="message"
                                onChange={this.handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <button type="submit" id="submit">
                            Send
                        </button>
                    </p>
                </form>
            </div>
        );
    }
}
