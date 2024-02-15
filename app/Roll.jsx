"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './Roll.module.css'
import Link from 'next/link';

const Roll = () => {

    const [logo, setLogo] = useState([])

    useEffect(()=>{
        const getLogos = async () => {
            const query = await fetch('https://api.testvalley.kr/main-shortcut/all')
            const response = await query.json()
            //console.log(response);
            setLogo(response)
        }
        getLogos()
    },[]);


  return (
    <div className={styles.container}>
      <div className={styles.slide}>
      {
        logo && logo.length && logo.map((shortcut, index)=>{
            return (
                <div key={index} >
                    {/* className={index == current ? `${styles.carouselCard} ${styles.carouselCardActive}` : styles.carouselCard} */}
                    
                    {/* <Image src={shortcut.imageUrl} width={50} height={50} className={styles.img}/> */}
                    <div className={styles.item}>
                    <Link href={shortcut.linkUrl} passHref={true}>
                    <img src={shortcut.imageUrl} alt=""/>
                    <p>{shortcut.title}</p>
                    </Link>
                    </div>
                    
                </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Roll
