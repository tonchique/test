import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './List'
import axios from 'axios';

export default class Root extends Component {
    constructor() {
        super();
        this.state = {
            emails: []
        }
    }

    componentDidMount() {
        axios.get('/api/emails').then(response => {
            this.setState({
                emails: response.data
            })
        })
    }

    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-md-12">
                    <List emails={this.state.emails} />
                </div>
            </div>
        </div>);
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
