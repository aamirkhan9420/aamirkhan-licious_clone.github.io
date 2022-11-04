import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartDelete, cartGet, cartPatch, cartPatchQuantiy, cartPost, getRequestData } from '../../redux/AppReducer/action'
import style from "./Fish.module.css"
export default function Fish({handleQuantityIncreament,handleQuantityDecreament,handlePost}) {

    let foodData = useSelector((state) => {
        return state.AppReducer.foodData
    })
    let cartData = useSelector((state) => {
        return state.AppReducer.cartData
    })
    console.log(cartData)
    let dispatch = useDispatch()
    const handleGetCart = () => {
        cartGet(dispatch)

    }
    let checkQuantity=(el)=>{
        let ans= cartData.length>0&&cartData.map((item)=>{
           
 
             if(item.id===el.id){
                
                return item.quantity
             }
         })
         return ans
     }
     let fishFunction = () => {
         getRequestData(dispatch, "fish")
         handleGetCart()
     }
 
 
     useEffect(() => {
         handleGetCart()
         fishFunction()
         
     }, [dispatch, cartGet])
    // const handleDelete=(id)=>{
    //     cartDelete(id)
    // }

    // const handleQuantityIncreament = (id) => {
    //     cartData.map((item)=>{
    //         if(item.id===id){
    //          cartPatchQuantiy(item.quantity + 1, id)
    //          handleGetCart()
    //         }
            
    //     })
       
      
    // }
    // const handleQuantityDecreament = (id) => {

    //     cartData.map((item)=>{
    //         if(item.id===id&&item.quantity>1){
    //          cartPatchQuantiy(item.quantity - 1, id)
    //          handleGetCart()
           
    //         }
    //         else if(item.id===id&&item.quantity<2){
    //             handleDelete(id)
    //              handleGetCart()
    //         }
    //     })
      

    // }
   
    // const handlePost = (el) => {

    //     cartPost(el).then((res) => {
    //         handleGetCart()
    //         console.log(res)

    //         // handlePatch(el.id, el.status)
    //     }).catch((er) => {
    //         console.log(er)
    //     })

    // }


  
    return (
        <div className={style.fish_container}>
            <div className={style.fish_filter_nav}></div>

            <div className={style.fish_main_parent}>
                <div className={style.fish_parent_grid_div}>
                    {foodData.length > 0 && foodData.map((el) => (

                        <div key={el.index} className={style.single_div}>
                            <Link to={"/SinglePage"} state={el} className={style.link}>
                                <img src={el.imgUrl} alt="fish" />
                            </Link>

                            <div className={style.prod_detail}>
                               

                                    <h2>{el.name}</h2>
                                    <p>{el.des}</p>
                                    <h2>{el.gross}{el.unit}</h2>
                             

                                <div className={style.prod_price_btn_div}>
                                    <Link to={"/SinglePage"} state={el} className={style.link}>

                                        <h1>{el.price_tag}{el.cuurency}{el.price}</h1>
                                    </Link>

                                    {cartData.length>0&&cartData.find(({ id }) => id === el.id) !== undefined ?
                                     <div className={style.add_remove_btn_div}><button onClick={() => handleQuantityDecreament(el.id)}>-</button><h1>{checkQuantity(el)}</h1><button onClick={() => handleQuantityIncreament(el.id)}>+</button></div>
                                      : <button onClick={() => handlePost(el)}>ADD TO CART</button>}
                                </div>

                            </div>
                        </div>

                    ))


                    }
                </div>
            </div>


        </div>
    )
}
