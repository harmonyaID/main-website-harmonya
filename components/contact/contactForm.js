import { Component } from "react";
import FormInput from "./FormInput";
import FormSelectInput from "./FormSelectInput";
import FormSelectionOptions from "./FormSelectionOptions";
import FormTextArea from "./FormTextArea";

import { ContactPreference, ServiceOptions } from "../../config/const";

const opt = ["Website Development", "Mobile App Development", "UI/UX Design"]

class ContactForm extends Component {
    state={
        formRequest: {
            name: "",
            email: "",
            topic: "",
            contact: "",
            message: "",
        },

        isLoading: false,
    }

    _onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked ? 1 : 0 : target.value;
        const name = target.name;

        console.log(value, name)

        this._handleChangeInputManual(name, value)
    }

    _handleChangeInputManual = (name, value, callBack = null) => {
        this.setState((prevState) => {
            const newFormRequest = prevState.formRequest
            newFormRequest[name] = value

            return {formRequest: newFormRequest}
        }, () => {
            return callBack
        })
    }

    _handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {

        const { formRequest, isLoading } = this.state

        return (
            <div className="w-100">
                <form onSubmit={this._handleSubmit}>
                    <div className="form-group mb-6">
                        <FormInput 
                            label="Name"
                            name="name"
                            type="text"
                            change={this._onChange}
                            placeholder="Your name"
                            value={formRequest.name}
                        />
                    </div>

                    <div className="form-group mb-6">
                        <FormInput 
                            label="Email"
                            name="email"
                            type="email"
                            change={this._onChange}
                            placeholder="Your email address"
                            value={formRequest.email}
                        />
                    </div>

                    <div className="form-group mb-6">
                        <FormSelectionOptions label="Topic to discuss"
                            options={ServiceOptions}
                            value={formRequest.topic}
                            unshift="Select topic"
                            other={{ required: 'required' }}
                            change={this._onChange}
                            name="topic"
                        />
                    </div>

                    <div className="form-group mb-6">
                        <FormSelectionOptions label="Contact preference"
                            options={ContactPreference}
                            value={formRequest.contact}
                            unshift="Select option"
                            other={{ required: 'required' }}
                            change={this._onChange}
                            name="contact"
                        />
                    </div>

                    <div className="form-group mb-6">
                        <FormTextArea label="Your messages"
                            name="message"
                            change={this._onChange}
                            placeholder="Your message"
                            value={formRequest.message}
                        />
                    </div>

                    <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-500 ease-in-out">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;