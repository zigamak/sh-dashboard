import React from 'react'
import "./home.css"
import Charts from '../../components/charts/charts'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import {userData} from '../../dummyData';

export default function home() {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets"></div>
    </div>
  )
}
