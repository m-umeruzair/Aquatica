import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from '../styles/main.module.css'
import styles2 from '../styles/profile.module.css'
import logo from '../public/logo2.png'
import Image from 'next/image'
import axios from "axios";
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';


export default  function profile(){
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);
    var companyId,companyObject;

    var [companyName,setCompanyName] = useState(null)
    var [companyEmail,setCompanyEmail]= useState(null)
    var [companyAddress, setCompanyAddress]= useState(null)
    var [companyNumber, setCompanyNumber] = useState(null)
    var [companyRegistration, setCompanyRegistration]= useState(null)
    var [companyTotalSales, setCompanyTotalSales]= useState(null)
    var [companyName2,setCompanyName2] = useState(null);
    var [companyEmail2, setCompanyEmail2]= useState(null);
    var [companyNumber2,setCompanyNumber2]= useState(null);
    var [companyRegistration2,setCompanyRegistration2]= useState(null);
   

     
    const router = useRouter();  
    const data = router.query;
   
    if(router.isReady){
        companyObject=data.companyObject
        var a= JSON.parse(data.companyObject)
        companyId=a['_id']
        
       
        axios.get('http://localhost:4000/readCompany',{
            params:{
              companyId: companyId}}).then((response)=>{
                var a= response.data;
              
                var b=a[0]
                companyName=b['companyName']
                setCompanyName(b['companyName'])
                setCompanyEmail2(b['companyEmail'])
                setCompanyEmail(b['companyEmail'])
                setCompanyNumber(b['companyNumber'])
                setCompanyRegistration(b['companyRegistration'])
                setCompanyAddress(b['companyAddress'])
                setCompanyTotalSales(b['companyTotalSales'])

              })
   
    }

    function updateProfile(){
        axios.put('http://localhost:4000/updateCompany',{data:{
            x:companyId,
            companyName:companyName2,
            companyEmail:companyEmail2,
            companyNumber:companyNumber2,
            companyRegistration:companyRegistration2,

        }}).then((response)=>{
            if(response.status == 200){
                window.alert("Update Successfull")
            }
    }).catch((error)=>{  
        if(error.response.status==400){
            window.alert("Nothing to Update")
          }
          
    })
}

  
    function redirect(){
        router.push({pathname:'/main',
            query:{companyName:companyName,companySales:companyTotalSales,companyObject:companyObject}
            })
    }

    function redirect2(){
        router.push({pathname:'/products',
            query:{companyName:companyName,companySales:companyTotalSales,companyObject:companyObject}
            })
    }

    return(
        <div className={styles2.body}>
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
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi-bar-chart-fill"><a  onClick={redirect}><h5 className={styles.ch5}>Dashboard</h5></a></i>
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi-box-seam-fill mt-4"><a  onClick={redirect2}><h5 className={styles.ch5}>Products</h5></a></i>
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi-person-square mt-4"><a  href='#'><h5 className={styles.ch5}>Profile</h5></a></i>
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

  <div className={`containter mt-5 mx-auto border-dark`} style={{width:'80vw'}}>
      <div className={`row border ${styles2.bgWhite}  `}>
        <div className={`col-md-5  d-flex aligns-items-center justify-content-center  `}>
          <h3 className={styles2.h3}>Company Name:</h3>
        </div>
        <div className={`col-md-5  d-flex aligns-items-center justify-content-center`}>
          <h3 className={styles2.h32}>{companyName}</h3>
        </div>

      </div>
      <div className={`row border ${styles2.bgWhite}  `}>
        <div className={`col-md-5 mt-4  d-flex aligns-items-center justify-content-center  `}>
          <h3 className={styles2.h3}>Company Email:</h3>
        </div>
        <div className={`col-md-5 mt-4  d-flex aligns-items-center justify-content-center`}>
          <h3 className={styles2.h32}>{companyEmail}</h3>
        </div>
      </div>
      <div className={`row border ${styles2.bgWhite}  `}>
        <div className={`col-md-5 mt-4  d-flex aligns-items-center justify-content-center  `}>
          <h3 className={styles2.h3}>Company Number:</h3>
        </div>
        <div className={`col-md-5 mt-4  d-flex aligns-items-center justify-content-center`}>
          <h3 className={styles2.h32}>{companyNumber}</h3>
        </div>
      </div>
      <div className={`row border ${styles2.bgWhite}  `}>
        <div className={`col-md-5 mt-4  d-flex aligns-items-center justify-content-center  `}>
          <h3 className={styles2.h3}>Company Registration:</h3>
        </div>
        <div className={`col-md-5 mt-4  d-flex aligns-items-center justify-content-center`}>
          <h3 className={styles2.h32}>{companyRegistration} </h3>
        </div>
      </div>
      <div className={`row border ${styles2.bgWhite}  `}>
        <div className={`col-md-5 mt-4  d-flex aligns-items-center justify-content-center  `}>
          <h3 className={styles2.h3}>Company Address:</h3>
        </div>
        <div className={`col-md-5 mt-4  d-flex aligns-items-center justify-content-center`}>
          <h3 className={styles2.h32}>{companyAddress}</h3>
        </div>
      </div>
      <div className={`row border ${styles2.bgWhite}  `}>
        <div className={`col-md-5 mt-4  d-flex aligns-items-center justify-content-center  `}>
          <h3 className={styles2.h3}>Company Total Sales:</h3>
        </div>
        <div className={`col-md-5 mt-4  d-flex aligns-items-center justify-content-center`}>
          <h3 className={styles2.h32}>{companyTotalSales} RS</h3>
        </div>
      </div>
    
      <div className={`row border ${styles2.bgWhite}  `}>
        <div className={`col-md-12 mt-4  d-flex aligns-items-center justify-content-center  `}>
        <button className={`btn btn-primary mb-3 ${styles2.btn}`} data-bs-toggle="modal" data-bs-target="#updateModal">Update Profile</button>
        </div>
      </div>

      <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update Profile</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={updateProfile} className='form-control'>
                  <label className='form-label'>Company Name</label>
                  <input className='form-control'  type='text' required  placeholder='Enter Company Name' onChange={(e) => {setCompanyName2(e.target.value)}}></input>
                  <label className='form-label mt-4'>Company Email</label>
                  <input className='form-control'  type='email' required placeholder='Enter Company Email' onChange={(e) => {setCompanyEmail2(e.target.value)}}></input>
                  <label className='form-label mt-4'>Company Number</label>
                  <input className='form-control'  type="number" required placeholder='Enter Company Number' onChange={(e) => {setCompanyNumber2(e.target.value)}}></input>
                  <label className='form-label mt-4'>Company Registration</label>
                  <input className='form-control'  type="text" required placeholder='Enter Company Registration no' onChange={(e) => {setCompanyRegistration2(e.target.value)}}></input>
                </form>
      </div>
      <div className="modal-footer">  
        <button className={`btn btn-primary  ${styles2.btn}`} id='submitBtn' data-bs-dismiss="modal" onClick={updateProfile}>Submit </button>
        <button className={`btn btn-secondary  float-end ${styles2.mbtn3}`}data-bs-dismiss="modal" id='closeBtn'>Close </button>
      </div>
    </div>
  </div>
</div>
  </div>
  </div>
        </div>
    )
}