import React, {Component} from 'react';
import axios from 'axios';

export default class EmailForm extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            content: this.props.content
        }
    }

    handleInputChange(event) {
        this.setState({
            content: {
                ...this.state.content,
                [event.target.name]: event.target.value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const self = this;

        axios.put('/api/emails/' + this.state.content.id, this.state.content).then(response => {
            self.props.onEmailFormInputChange(response.data);
        }).catch(error => {
            alert(error.response.data.message + ' ' + error.response.data.errors.value);
            console.log(error.response)
        });
    }

    render() {
        const id = this.state.content.id;
        const name = this.state.content.name;
        const value = this.state.content.value;

        return (<form className="form-inline mb-2" onSubmit={this.handleSubmit}>
            <div className="form-group col-md-12">
                <input className="form-control form-control-plaintext col-md-1" readOnly type="text" value={id} />
                <input className="form-control col-md-5" type="text" name="name" value={name} onChange={this.handleInputChange} />
                <input className="form-control col-md-5" type="email" name="value" value={value} onChange={this.handleInputChange} />
                <button type="submit" className="btn btn-primary col-md-1">Submit</button>
            </div>
        </form>);
    }
}