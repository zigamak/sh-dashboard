import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import "./featuredinfo.css";

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className='featuredTitle'> Revenue </span>
            <div className="featuredMoneyContainer">
                <span className='featuredMoney'>$2,342</span>
                <span className='featuredMoneyRate'>-11.4 <ArrowDownward/></span>
                
            </div>
            <span className='featuredSub'> Compared to Last month</span>
        </div>
        <div className="featuredItem">
            <span className='featuredTitle'> Sales </span>
            <div className="featuredMoneyContainer">
                <span className='featuredMoney'>$4,342</span>
                <span className='featuredMoneyRate'>-1.4 <ArrowDownward/>
                </span>
            </div>
            <span className='featuredSub'> Compared to Last month</span>
        </div>
        <div className="featuredItem">
            <span className='featuredTitle'>Cost</span>
            <div className="featuredMoneyContainer">
                <span className='featuredMoney'>$2,342</span>
                <span className='featuredMoneyRate'>3 <ArrowUpward/>
                </span>
            </div>
            <span className='featuredSub'> Compared to Last month</span>
        </div>
    </div>
  )
}
