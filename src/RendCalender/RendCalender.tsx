import * as React from 'react';
import * as moment from 'moment';
import Calender from '../Calender/Calender';
class RendCalender extends React.Component<AppState> {
    constructor(props: AppState) {
        super(props);
        console.log(props);
    }
    daysInMonth (month: number, year: number): number {
        return new Date(year, month, 0).getDate();
    }
    rendCal() {
        let calender = [];
        let ndays = parseInt(this.props.nofdays, 10);
        let sDate = moment(this.props.startDate).toDate();
        let key = 0;
        while ( ndays > 0) {
            console.log(ndays, sDate);
            console.log(sDate.getDay(), sDate.getMonth(), sDate.getFullYear());
            let lastDayInMonth =  this.daysInMonth(sDate.getMonth() + 1, sDate.getFullYear());
            let daysInCurMonth = lastDayInMonth - sDate.getDate() + 1;
            console.log('lastDayInMonth', lastDayInMonth);
            console.log('daysInCurMonth', daysInCurMonth);
            let eDate: Date = new Date();
            let rDays = (ndays) - daysInCurMonth;
            if ( rDays >= 0) {
                eDate = new Date(sDate.getFullYear() + '/' + (sDate.getMonth() + 1) + '/' + lastDayInMonth);
                console.log('inIf', rDays, lastDayInMonth, eDate);
            } else {
                eDate = moment(sDate).add(ndays - 1, 'day').toDate();
                console.log('inElse', rDays, eDate);
            }
            calender.push(<Calender key={key} startDate={sDate} endDate={eDate} ccode={this.props.ccode} />);
            ndays = rDays;
            // sDate = new Date(sDate.getFullYear() + '/' + (sDate.getMonth() + 2));
            let firstDayOfMonth = new Date(sDate.getFullYear() + '/' + (sDate.getMonth() + 1) );
            sDate = moment(firstDayOfMonth).add(1, 'month').toDate();
            key++;
        }
        return calender;
    }
    render() {
        return (
            <div>
                {this.rendCal()}
            </div>
        );
    }

}

export default RendCalender;