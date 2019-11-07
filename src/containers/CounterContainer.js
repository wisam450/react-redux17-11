import React, { Component } from 'react'
import { connect } from 'react-redux';
import Counter from '../component/Counter';
import CounterOutput from '../component/CounterOutput'


export class CounterContainer extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <Counter label='INCREMENT' clicked={this.props.onIncrement} />
                <Counter label='DECREMENT' clicked={this.props.onDecrement} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter

    }
}

const mapDispathToProps = (dispatsh) => {
    return {
        onIncrement: () => { dispatsh({ type: 'CTR_INCREMENT' }) },
        onDecrement: () => { dispatsh({ type: 'CTR_DECREMENT' }) }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(CounterContainer)