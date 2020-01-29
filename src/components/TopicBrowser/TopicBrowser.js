import React from 'react'
// Topics 
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObjects from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

class TopicBrowser extends React.Component {

    render() {
        return (
            <div>
                <EvenAndOdd />
                <FilterObjects />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )

    }

}

export default TopicBrowser