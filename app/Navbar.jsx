import React from 'react'
import styles from'./Navbar.module.css'
import {MdMenu, MdSearch } from 'react-icons/md'
import Image from 'next/image'


const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
       <div className={styles.leftside}>
       <h2 className={styles.logo}>
            Testvalley
        </h2>
        <h1 className={styles.sublogo}><MdMenu/></h1>
        <h1 className={styles.sublogo}>
         카테고리
        </h1>
       </div>

        <div className={styles.search}>
                    <MdSearch/>
                    <input type='text' placeholder='search...' className='input'/>
        </div>

      <div className={styles.rightside}>
        <Image className={styles.img} src='/pdown.jpg' height={10} width={10} alt='percentage'/>
        <h2> | 로그인 / 회원가입</h2>
      </div>
      </div>
    </>
  )
}

export default Navbar
