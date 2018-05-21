// <reference path="../interfaces/Json" />
// <reference path="../interfaces/AppState" />

import * as React from 'react';
import './App.css';
import RendCalender from '../RendCalender/RendCalender';

class App extends React.Component<{}, AppState> {
  constructor(props: Json) {
    super(props);
    this.state = {
      'nofdays': '100',
      'startDate': '2018-04-08',
      'ccode': 'US'
    };
    this.handleDays = this.handleDays.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleCCode = this.handleCCode.bind(this);
  }
  handleDays(event: any): void {
    this.setState({ 'nofdays': event.target.value });
  }
  handleStartDate(event: any): void {
    this.setState({ 'startDate': event.target.value });
  }
  handleCCode(event: any): void {
    this.setState({ 'ccode': event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><i className="glyphicon glyphicon-calendar" /> Custom Calendar</h1>
        </header>
        <div className="container App-content">
          <form className="form-inline Date-form" >
            <div className="form-group">
              <label htmlFor="exampleInputName2"> Start date&nbsp;</label>
              <input type="date" className="form-control" value={this.state.startDate} onChange={this.handleStartDate} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail2">&nbsp;&nbsp;Number of days&nbsp;</label>
              <input type="number" className="form-control" value={this.state.nofdays} onChange={this.handleDays} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail2">&nbsp;&nbsp;Country Code&nbsp;</label>
              <select className="form-control" onChange={this.handleCCode} value={this.state.ccode}>
                <option value="INDIA">INDIA</option>
                <option value="US">US</option>
              </select>
            </div>
          </form>
          <hr />
          <RendCalender startDate={this.state.startDate} nofdays={this.state.nofdays}  ccode={this.state.ccode} />
        </div>

      </div>
    );
  }
}

export default App;
