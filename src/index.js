import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './index.css';
import 'react-datepicker/dist/react-datepicker.css';

class MeetupClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      fromDate: date
    });
  }
  render() {
    console.log("fromDate: ", this.state.fromDate)
    return <div>
        <DatePicker selected={this.state.fromDate} onChange={this.handleChange} />
        <p>Picked {this.state.fromDate.toLocaleString()}</p>
      </div>
  }
}

ReactDOM.render(
  <MeetupClient />,
  document.getElementById('root')
);
