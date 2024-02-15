"use client"
import { useState, useEffect } from 'react';
import React from 'react'
import styles from './Hotsale.module.css'
import { FaStar } from "react-icons/fa";

const Card6 = () => {

    const [product, setProduct] = useState([])
    // const [title, setTitle] = useState("")
    // const [subtitle, setSubTitle] = useState("")

    useEffect(()=>{
        const getProducts = async () => {
            const query = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount')
            const response = await query.json()
            const data = response.items
            //console.log(data);

            let hotDealItems;


            for(let i = 0; i < data.length; i++){
                if(data[i].title === '맥북 클리어런스 세일!') {
                    hotDealItems = data[i];
                    break;
                }
            }

            //console.log(hotDealItems);
          
            if(hotDealItems){
                //const firstFour = hotDealItems.slice(0, 4)
                setProduct(hotDealItems)
 
            }
        }
        getProducts()
    },[]);

    let pData = product.items
    //console.log(pData);
 
    // const scrollers = document.querySelectorAll(".right")

  return (
    <div className={styles.container}>
                    <div className={styles.left}>
                        
                            <p className={styles.title}>{product.title}</p>
                            < p className={styles.sub}>{product.subtitle}</p>
                            
                        
                    </div>
    <div className={styles.right}>
        <div className={styles.products}>

                {
                
                pData && pData.length && pData.map((prod, index)=>{
                    return (
                        
                            <div  key={index}>
                                
                                        <img src={prod.publication.media[0].uri} alt="Products" />
                                        <div className={styles.details}>
                                            <div className={styles.name}>
                                                {prod.publication.productName}
                                            </div>
                                            <div className={styles.priceinfor}>

                                                <div className={styles.more}>
                                                    <p className={styles.disc}>{prod.publication.priceInfo.discountRate ? prod.publication.priceInfo.discountRate : 0}%</p>
                                                    <p className={styles.discPrice}>{prod.publication.priceInfo.discountPrice ? prod.publication.priceInfo.discountPrice : 0}오직</p>
                                                </div>

                                            </div>
                                            <div className={styles.tags}>
                                                <p className={styles.tag}>{prod.publication.tagsOnDesc[0] }</p>
                                            </div>
                                            <div className={styles.rating}>
                                                <p className={styles.rate}><FaStar className={styles.rate}/>{prod.publication.rating ? prod.publication.rating  : 0}  </p>
                                            </div>
                                        </div>
                                        {/* <img src={prod.publication.media[0].uri} alt="Products" /> */}
                                
                            </div>
              
                    )
                })
            }
        </div>
    </div>
    </div>
  )
}

export default Card6
