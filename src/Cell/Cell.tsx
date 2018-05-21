import * as React from 'react';
import './Cell.css';

class Cell extends React.Component<CellState> {
    constructor(props: CellState) {
        super(props);
    }
    render() {
        const style = {
            color: this.props.color ,
            background: this.props.background
        };
        return (
            <div className="App-cell" style={style} title={this.props.info ? this.props.info.info : ''} >
                {this.props.data}
            </div>
        );
    }
}

export default Cell;