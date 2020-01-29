import React from 'react'


class Sum extends React.Component {

    render() {

        return (
            <div className='puzzleBox sumPB'>
                <h4> Sum </h4>
                <input className='inputLine' type='number' onChange={(event) => this.updatedNumber1(event.target.value)} />
                <input className='inputLine' type='number' onChange={(event) => this.updatedNumber2(event.target.value)} />
                <button className='confirmationButton' onClick={() => this.add(this.state.number1, this.state.number2)} > Add </button>
                <span className='resultsBox'> Sum: {this.state.sum} </span>
            </div>
        )
    }

    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updatedNumber1(val) {
        this.setState({ number1: parseInt(val, 10) })
    }

    updatedNumber2(val) {
        this.setState({ number2: parseInt(val, 10) })
    }

    add(num1, num2) {
        this.setState({ sum: num1 + num2 })
    }
}

export default Sum