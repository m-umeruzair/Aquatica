import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from '../styles/main.module.css'
import logo from '../public/logo2.png'
import Image from 'next/image'
import axios from "axios";
import { useRouter } from 'next/router'
import React, { useState } from 'react';



export default function Main(){
    const [totalProducts,setTotalProducts]=useState()

    const router = useRouter();
    const data = router.query;
    console.log(data.companyName)
     
        axios.get('http://localhost:4000/readProduct',{params:{x:data.companyName}})
        .then((response)=>{
            
            var a=response.data
            setTotalProducts(a.length)
            var c= document.getElementById('tbody');
            c.innerHTML='';
        for(var i=0;i<a.length;i++){
            var b= a[i]
            
            c.innerHTML += `<tr>
            <th>${i+1} </th>
            <th>${b['productName']}</th>
            <th>${b['productQuantity']}</th>
            <th>${b['productPrice']}</th>
            <th>${b['productType']}</th>
            </tr>`
        }
        })
       
  function redirect(){
    router.push({
        pathname:'/products',
        query:{companyName:data.companyName,companySales:data.companySales,companyObject:data.companyObject}

    })
  }

  function redirect2(){
    
    router.push({
        pathname:'/profile',
        query:{companyObject:data.companyObject}

    })
  }
      
    
    return(
    <div>
    <Head>
    <title>Aquatica Company Portal</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    
 

 </Head>
 <div id="body" className={styles.mainDiv}>
  <div className={styles.leftDiv}>
    <div className={styles.logo}>
        <div className={styles.logoImg}>
    <Image className='mt-1' src={logo} alt="logo"></Image>
    </div>
    <h2>Aquatica</h2>
    </div>
    <div  className='col-md-12 mt-5'>
          <div className={`row ${styles.row}`}>
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi-bar-chart-fill"><a  href='#'><h5 className={styles.ch5}>Dashboard</h5></a></i>
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi-box-seam-fill mt-4"><a  onClick={redirect}><h5 className={styles.ch5}>Products</h5></a></i>
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi-person-square mt-4"><a  onClick={redirect2}><h5 className={styles.ch5}>Profile</h5></a></i>
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi bi-box-arrow-right mt-5 "><a  href='/log-in'><h5 className={styles.ch5}>Log Out</h5></a></i>
          </div>
    </div>
  </div>
  <div className={styles.hamburger} name="hamburger">
  <div className={styles.patty}></div>
  <div className={styles.patty}></div>
  <div className={styles.patty}></div>
  </div>
  <div className={styles.mobileLeftDiv}>
     <div className={styles.logo}>
        <div className={styles.logoImg}>
        <Image src={logo} alt="logo"></Image>
    </div>
    <div>

    </div>
    </div>
  </div>

  <div className='containter-fluid mx-auto' style={{width:'80vw'}}>
    <div className='row mx-auto'> 
    <h1 className={styles.cname}>{data.companyName}</h1>
    <div className={`col-lg-4 mx-auto ${styles.totalProducts}`}>
         <h3>Total Products:</h3>
         <h3>{totalProducts}</h3>
    </div>
    <div className={`col-lg-3 mx-auto ${styles.totalSales}`}>
         <h3>Total Sales:</h3>
         <h3>{data.companySales} RS</h3>
    </div>  
    <div className={`col-lg-4 mx-auto ${styles.totalRating}`}>
         <h3>Rating:</h3>
         <h3>5</h3>
    </div>  
  </div>
  <div className='row mx-auto mt-5'>
     <table className={`table ${styles.table}`} >
        <thead  className='thead'>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Quantity</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product type</th></tr>
        </thead>
        <tbody id='tbody'>
           
        </tbody>
     </table>
  </div>
 </div>
 </div>

 </div>
 
    )
}

