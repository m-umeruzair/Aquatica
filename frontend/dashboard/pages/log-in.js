import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo1.png'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/log-in.module.css';
import axios from "axios";
import React, { useState } from 'react';
import { useRouter } from 'next/router';


export default function LogIn() {
  const [companyName,setCompanyName]=useState()
  
  
  const x= useRouter()
  async function  get(e){
    
    e.preventDefault()
     await axios.get('http://localhost:4000/log-in',{
      params:{
        companyEmail: document.getElementById('companyEmail').value ,
        companyPassword:document.getElementById('companyPassword').value,
      }
    })
    .then((response)=>{
      if(response.status == 200){
       
        var a=response.data[0]
        setCompanyName(a.companyName)
        var b= JSON.stringify(a)
       
        
       redirect(a.companyName,a.companyTotalSales,b)
        //  x.push({pathname:'/main',
        //  query:{companyName:companyName}
        //  })
        window.alert("Log in Successfull")
        // window.location = 'main'
      }
    })
    .catch( (error)=>{    
       if(error.response.status==401){
        window.alert("Wrong Password")
      }
      else if(error.response.status==404){
        window.alert("This Email does not has an account with us")
      }
    })
    
  

  }

  function redirect(companyName,companySales,a){
      x.push({pathname:'/main',
          query:{companyName:companyName,companySales:companySales,companyObject:a}
          })
  }
   
    return(
    <div className={styles.body} >    
     <Head>
        <title>Aquatica Company Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
     </Head>
     <div className='container'>
      <div className='row'  style={{ borderRadius:"10px 0px 0px 10px" }}>
        <div className='col-md-6' style={{backgroundColor:"white", marginTop : "120px" , paddingLeft:'-200px',textAlign:"center"  }}>
         <div className={styles.mt}>
          <div className={styles.logo}>
          <Image    src={logo} alt="logo" ></Image></div>
          </div>       
          
        </div>
        <div className='col-md-6' style={{backgroundColor:"white", marginTop:"120px", height:"70vh" }} >
          
          <h1 className={styles.h1}>Log In</h1>
          <form  className='form-control' style={{backgroundColor : 'white' , border:' 0px solid',borderRadius:"10px" }}>
            <div className='mb-2'>  
            <label className={styles.label}> E-Mail</label>
            </div>
            <div className='mb-2'>  
            <input className='form-control' id='companyEmail' placeholder='Enter E-mail'></input>
            </div>
            <div className='mb-2'>  
            <label className={styles.label1}> Password</label>
            </div>
            <div  className='mb-2'>  
            <input className='form-control' id="companyPassword" type='password' placeholder='Enter Password'></input>
            <a href='/sign-up'><label className={styles.label2} style={{marginLeft:'5px'}}>Sign Up</label></a>
            {/* <label className={styles.label2} style={{float : "right"}}>Forgot Password?</label> */}
            </div>
            <button type='button'  className={`btn btn-submit btn-lg btn-block ${styles.btnSubmit} `} onClick={get} >Sign In </button>
            
            
          </form>
        </div>
      </div>

     </div>
    </div>
    )

}