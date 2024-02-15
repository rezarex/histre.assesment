"use client"
import { useEffect, useState } from 'react'
import styles from './Slider.module.css'
import Image from 'next/image'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const Slider = () => {


    const [current, setCurrent] = useState(0)
    const [banner, setBanner] = useState([])

    useEffect(()=>{
        const getBanners = async () => {
            const query = await fetch('https://api.testvalley.kr/main-banner/all')
            const response = await query.json()
            //console.log(response);
            setBanner(response)
        }
        getBanners()
    },[]);


    const slideRight = () => {
        setCurrent(current === banner.length - 1 ? 0 : current + 1)
    
    }
    console.log(current);
    const slideLeft = () => {
        setCurrent(current === 0 ? banner.length - 1 : current - 1);
    }

  return (
    <div className={styles.carousel}>
      <div className={styles.wrapper}>
      {
        banner && banner.length && banner.map((pic, index)=>{
            return (
                <div key={index} className={index == current ? `${styles.carouselCard} ${styles.carouselCardActive}` : styles.carouselCard}>
                    {/* <Image src={pic.pcImageUrl} width={1200} height={850} className={styles.img}/> */}
                    <img src={pic.pcImageUrl} alt="" className={styles}/>
                    <div className={styles.cardOverlay}>

                    </div>
                    
                </div>
            )
        })
      }
      <div className={styles.arrowLeft} onClick={slideLeft}><IoIosArrowDropleftCircle /></div>
      <div className={styles.arrowRight} onClick={slideRight}><IoIosArrowDroprightCircle /></div>
      </div>
    </div>
  )
}

export default Slider
