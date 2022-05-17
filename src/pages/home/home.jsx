import React from 'react'
import "./home.css"
import Charts from '../../components/charts/Charts'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import {userData} from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function home() {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets"></div>
        <WidgetSm />
        <WidgetLg />
    </div>
  )
}
