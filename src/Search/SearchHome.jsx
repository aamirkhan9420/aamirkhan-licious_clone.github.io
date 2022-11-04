import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Category from '../components/categories/Category'
import { getsearchData } from '../redux/AppReducer/action'
import style from "./SearchHome.module.css"
export default function SearchHome({text}) {
  let dispatch=useDispatch()
   let [filterd,setFilterd]=useState([])
   let foodData=useSelector((state)=>{
  return state.AppReducer.foodData
   })
   
   
    let handlesearch=()=>{
      let newValue=[]
      if(text){
      if(text.length>2){
          foodData.map((el,index)=>{
            if(el.name.toLowerCase().includes(text)){
              newValue.push(el)
            }
            else{
              newValue.splice(index,1)
            }
          })
      }
  
    }
    setFilterd(newValue)
    }
      
   useEffect(()=>{
    getsearchData(dispatch)
    handlesearch()
   },[dispatch,text])
   console.log(filterd)

  return (
    <div className={style.searchHome_container}>
      {console.log(filterd)}
  {text&& <div className={style.searh_parent}>
     {
      filterd&&filterd.map((el)=>(
        <div  className={style.search_single_div}>
             <div className={style.single_img_div}>
              <img src={el.imgUrl} alt="" />
             </div>
             <div className={style.single_prod_parent}>
                <h2>{el.name}</h2>
                <div className={style.price_btn_container}>
                  <div className={style.price_waight}>
                    <h3>{el.gross}{el.unit}</h3>
                  <h3>{el.cuurency}{el.price} <span className={style.cutprice}>{el.cuurency}{el.strikedPrice}</span></h3>
                  </div>
                  <div className={style.btnadd_tocart}>  <button>ADD TO CART</button></div>
                </div>
             </div>
        </div>
      ))
     }
    </div>}
   {!text&&<Category filterd={filterd}/>}
    

    </div>
  )
}

