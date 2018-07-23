import React, {Component} from 'react';
import EmailForm from './EmailForm'

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = (<table className="table table-striped table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {this.props.emails.map((email) => <EmailForm key={email.id} content={email} />)}
            </tbody>
        </table>);

        return list;
    }
}