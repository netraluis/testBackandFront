import React from 'react'
import Expedients from '../../components/expedients/expedients.component'
import Substitutes from '../../components/substitutes/substitutes.components'

const HomePage = () =>(
    <div className = 'homePage'>
    <Expedients/>
    <Substitutes/>
    </div>
)

export default HomePage