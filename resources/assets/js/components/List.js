import React, {Component} from 'react';
import EmailForm from './EmailForm';
import _ from "lodash";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.handleEmailFormInputChange = this.handleEmailFormInputChange.bind(this);
    }

    handleEmailFormInputChange(changedContent) {
        this.props.onListInputChange(changedContent);
    }

    render() {
        const list = (<div>
            <div className="p-3">
                <div className="form-control form-control-plaintext col-md-1 d-inline-block font-weight-bold text-center" readOnly>ID</div>
                <div className="form-control col-md-5 d-inline-block font-weight-bold text-center">Name</div>
                <div className="form-control col-md-5 d-inline-block font-weight-bold text-center">Email</div>
            </div>
            {_.map(this.props.emails, (email) => <EmailForm key={email.id} content={email} onEmailFormInputChange={this.handleEmailFormInputChange} />)}
        </div>);

        return list;
    }
}