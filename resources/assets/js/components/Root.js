import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import axios from 'axios';
import _ from "lodash";

export default class Root extends Component {
    constructor() {
        super();
        this.handleListInputChange = this.handleListInputChange.bind(this);
        this.state = {
            emails: []
        }
    }

    componentDidMount() {
        axios.get('/api/emails').then(response => {
            let data = _.mapKeys(response.data, "id");
            this.setState({
                emails: data
            })
        }).catch(error => {
            console.log(error.response)
        });
    }

    handleListInputChange(changedContent) {
        this.setState({
            emails: {
                ...this.state.emails,
                [changedContent.id]: changedContent
            }
        });
    }

    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-md-12">
                    <List emails={this.state.emails} onListInputChange={this.handleListInputChange} />
                </div>
            </div>
        </div>);
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
