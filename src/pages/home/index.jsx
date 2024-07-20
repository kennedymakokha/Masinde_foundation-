import React from 'react'
import Courasel from './components/courasel'
import Statistics from '../about/statiscs'

function index() {
    return (
        <div>
            <Courasel />
            <div className="py-2 sm:px-20 px-2 w-full h-auto flex-wrap flex">
                <Statistics />
            </div>
        </div>
    )
}

export default index