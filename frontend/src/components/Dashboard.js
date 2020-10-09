import React from 'react'
import LearningList from './LearningList'
import LearningListFilters from './LearningListFilters'
import Chart from './Chart'

const Dashboard = () => (
    <div className='dashboard'>
        <LearningListFilters />
        <LearningList />
        <Chart />
    </div>
)

export default Dashboard