import React, {Component} from 'react';

export default class EmailForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<tr>
            <td>{this.props.content.id}</td>
            <td>{this.props.content.name}</td>
            <td>{this.props.content.value}</td>
        </tr>);
    }
}