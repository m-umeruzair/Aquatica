import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo1.png'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/sign-up.module.css';
import React, {  useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';




export default function Signup() {
    const [companyName, setCompanyName] = useState(null)
    const [companyAddress, setCompanyAddress]= useState(null)
    const [companyRegistration, setCompanyRegistration]= useState(null)
    const [companyEmail, setCompanyEmail]= useState(null)
    const [companyNumber, setCompanyNumber]= useState(null)
    const [companyPassword, setCompanyPassword]= useState(null)   
    const [companyTotalSales, setCompanyTotalSales]= useState(0)


    const x= useRouter()
    function postData(e){

        e.preventDefault()
        axios({
            method:"POST",
            url : "http://localhost:4000/sign-up",
            data:{
                companyName:companyName,
                companyAddress:companyAddress,
                companyRegistration:companyRegistration,
                companyEmail:companyEmail,
                companyNumber:companyNumber,
                companyPassword:companyPassword,
                companyTotalSales:companyTotalSales


            }})
            window.alert("Sign Up Successfull")
            x.push({pathname:'/main'})
    }
    return(
    <div className={styles.body} >    
     <Head>
        <title>Aquatica Company Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
     </Head>
     <div className='container'>
      <div className='row'  style={{ borderRadius:"10px" }}>
        <div  className=' col-md-6' style={{height:'500px',backgroundColor:"white", marginTop : "9%" , paddingLeft:'-2%',textAlign:"center" ,borderRadius:"10px 0px 0px 10px", }}>
         <div className={styles.mt}>
          <Image    src={logo} alt="logo" ></Image>
      
          </div>
        
          
        </div>
        <div className='col-md-6' style={{backgroundColor:"white", marginTop:"9%", borderRadius:'0px 10px 10px 0px'  }} >
          
          <h1 className={styles.h1}>Sign Up</h1>
          <form onSubmit={postData} className='form-control' style={{backgroundColor : 'white' , border:' 0px solid' }}>
            <div className='row'>
           
                <div className='col-md-6'>
                <label className={styles.label}> Company Name</label>
                <input className='form-control mt-2' required id='companyName' placeholder='Enter Full Company Name' onChange={(e) => {setCompanyName(e.target.value)}}></input>
                </div>
                <div className='col-md-6'>
                <label className={styles.label1}> Company email</label>
                <input className='form-control mt-2' id='companyEmail' required type='mail' placeholder='Enter Company Email' onChange={(e) => {setCompanyEmail(e.target.value)}}></input>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>
                <label className={styles.label}> Company Number</label>
                <input className='form-control mt-2' type='phone' required id='companyNumber' placeholder='Enter Contact Number' onChange={(e) => {setCompanyNumber(e.target.value)}}></input>
                </div>
                <div className='col-md-6'>
                <label className={styles.label1}> Company Address </label>
                <input className='form-control mt-2' required type='text' id='companyAddress' placeholder='Enter Company Address' onChange={(e) => {setCompanyAddress(e.target.value)}}></input>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>
                <label className={styles.label}> Registration No.</label>
                <input className='form-control mt-2' type='phone' required id='companyRegistration' placeholder='Enter Company Registration Number' onChange={(e) => {setCompanyRegistration(e.target.value)}}></input>
                </div>
                <div className='col-md-6'>
                <label className={styles.label1}> Password </label>
                <input className='form-control mt-2' required type='password'  id='companyPassword' placeholder='Enter Password' onChange={(e) => {setCompanyPassword(e.target.value)}}></input>
                </div>
            </div>
            <a href='/log-in'><label className={styles.label2} style={{marginLeft:'5px'}}>Already have an account? Sign in Now</label></a>
            <button className={`btn btn-submit btn-lg btn-block mt-2 ${styles.btnSubmit} `} >
              Submit</button>
          </form>
          
        
        </div>
      </div>

     </div>
    </div>
    )

}