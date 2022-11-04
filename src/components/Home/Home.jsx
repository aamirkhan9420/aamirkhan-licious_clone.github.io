import React from 'react'
import { useLocation } from 'react-router-dom'
import BestSeller from '../BestSeller/BestSeller'
import BreakfastSnacking from '../BreakfastSnacking/BreakfastSnacking'
import Category from '../categories/Category'

import ControlledCarousel from './Carousel'
import style from "./Home.module.css"
export default function Home() {
 
  return (
    <div className={style.home_container}>
 
   <ControlledCarousel />
   <Category />
   <BestSeller />
   <BreakfastSnacking />
   <div className={style.big_bottom_img_div}>
   <img src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db" alt="" />
   </div>
    </div>
  )
}
