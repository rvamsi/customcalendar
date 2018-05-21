import * as React from 'react';
import * as moment from 'moment';
import './Calender.css';
import Cell from '../Cell/Cell';
import HList from '../Globals/HolidayList';
let _ =  require('lodash');

class Calender extends React.Component<CalState> {
    private headerBlocks: Array<String>;
    constructor(props: CalState) {
        super(props);
        console.log(props);
        this.headerBlocks = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        this.rendDates = this.rendDates.bind(this);
    }
    rendDates() {
        let dates = [];
        let momentStartDay = moment(this.props.startDate);
        let startDay = this.props.startDate.getDate();
        let endDay = this.props.endDate.getDate();
        let ccode = this.props.ccode;
        let prvMonthDays = moment(this.props.startDate).add(-1, 'month').daysInMonth() + 1;
        let firstDay = new Date(this.props.startDate.getFullYear() + '/' + ( this.props.startDate.getMonth() + 1 ) + '/01');
        let firstDayofMonth = firstDay.getDay();
        console.log('firstDay', firstDay, 'endDate', this.props.endDate.getDate(), 'firstDayofMonth', firstDayofMonth);
        let cList = _.filter(HList, { ccode : ccode }).filter((hol: Holiday) => hol.date.substring(0, 6) === momentStartDay.format('YYYYMM') );
        console.log('cList', cList);
        let cday = 0;
        
        for (let i = firstDayofMonth; i > 0; i--) {
            cday++;    
            dates.push(<Cell key={cday} data={String(prvMonthDays - i)} color={'#cdcdcd'} background={'transparent'} />);
        }
        for (let i = 1; i < startDay; i++) {
            cday++;
            dates.push(<Cell key={cday} data={String(i)} color={'#cdcdcd'} background={'transparent'} />);
        }
        for (let i = startDay; i <= endDay; i++) {
            cday++;
            let hol: Holiday = _.find(cList, {date: momentStartDay.format('YYYYMM' + i)});
            if ( hol !== undefined ) {
                dates.push(<Cell key={cday} data={String(i)} background={'orange'} info={hol} />);
            }  else if (cday % 7 === 0 || (cday % 7 ) === 1) {
                console.log(cday);
                dates.push(<Cell key={cday} data={String(i)} background={'yellow'} />);
            } else {
                dates.push(<Cell key={cday} data={String(i)} background={'transparent'} />);
            }
        }
        return dates;
    }
    render() {
        return (
            <div className="App-calender">
                <div className="App-calender-info"> {moment(this.props.startDate).format('MMMM')} - {this.props.startDate.getUTCFullYear()} </div>
                {this.headerBlocks.map((value, index) => <Cell key={index} data={String(value)} />)}
                {this.rendDates()}
            </div>
        );
    }
}

export default Calender;