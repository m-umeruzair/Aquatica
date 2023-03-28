import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import logo from '../public/logo2.png'
import styles from '../styles/main.module.css'
import styles2 from '../styles/product.module.css'
import Image from 'next/image'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'



export default  function Products(){
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);
      const router = useRouter();
      const data = router.query;
      const [productName,setProductName] = useState(null);
      const [productPrice,setProductPrice] = useState(null);
      const [productQuantity,setProductQuantity] = useState(null);
      const [productType, setProductType] = useState(null);
      const [productId, setProductId] = useState(null);

      const [search,setSearch] = useState(null)

      const[data1,setData1] = useState(null)
      const[data2,setData2] = useState(null)
      const[data3,setData3] = useState(null)

      
      

      if(router.isReady){
       get(data.companyName)
      }
      
      function deleteProduct(name){
        
        axios.delete('http://localhost:4000/deleteProduct',{params:{x:name}})
      
           }

      function updateProduct(){
       console.log(productName)
        axios.put('http://localhost:4000/updateProduct',{data:{
          x:data2,
          productName:productName,
          productId:productId,
          productPrice:productPrice,
          productQuantity:productQuantity,
          productType:productType
        }})
      }
      
      function searchProduct(){
        
        if(router.isReady && search!=null){
        
        axios.get('http://localhost:4000/readProduct',{params:{x:data.companyName}})
        .then((response)=>{      
          var a=response.data
       
          var c= document.getElementById('tbody');
          c.innerHTML='';
         
      for(var i=0;i<a.length;i++){
          var b= a[i]    
           if(b['productName'].toLowerCase().includes(search.toLowerCase())){
          
          c.innerHTML += `<tr>
          <th>${i+1} </th>
          <th>${b['productName']}</th>
          <th>${b['productQuantity']}</th>
          <th>${b['productPrice']}</th>
          <th>${b['productType']}</th>
          <th><i  onclick=deleteProduct(el['productName'])  class="bi bi-trash-fill"></i>
          <i data-bs-toggle="modal"  data-bs-target="#updateModal" onclick=${setData2(b['productId'])+setProductId(b['productId'])+setProductName(b['productName'])+setProductPrice(b['productPrice'])+setProductQuantity(b['productQuantity'])+setProductType(b['productType'])} class="bi bi-pencil-fill ms-2"></i></th>
          </tr>`
      }
      if(c.innerHTML=='' && i==a.length-1){
       
          c.innerHTML= `<h5 >No Search Results</h5>`
        
      }
  }
      })}
      }
  
   
   function get(companyName){ 
    
    axios.get('http://localhost:4000/readProduct',{params:{x:companyName}})
    .then((response)=>{      
     
        var a=response.data
        setData1(response.data)
        
        // var c= document.getElementById('tbody');
        // c.innerHTML='';
    // for(var i=0;i<a.length;i++){
    //     var b= a[i]
  
    //     c.innerHTML += `<tr>
    //     <th>${i+1} </th>
    //     <th className='name'>${b['productName']}</th>
    //     <th>${b['productQuantity']}</th>
    //     <th>${b['productPrice']}</th>
    //     <th>${b['productType']}</th>
    //     <th><i  onClick={deleteProduct}  class="bi bi-trash-fill"></i></th>
    //     </tr>`
    //     if(c.innerHTML=='' && i==a.length-1){
       
    //       c.innerHTML= `<h5 >No Products to show</h5>`
        
    //   }
    // }
    })}

    async function postData(e){
      
      e.preventDefault()
     await axios({
        method:"POST",
        url : "http://localhost:4000/createProduct",
        data:{
          productName:productName,
          productId:productId,
          productPrice:productPrice,
          productType:productType,
          productQuantity:productQuantity,
          productCompany:data.companyName
        }
      })
      
          }
      
         
        
          function redirect(){
            router.push({pathname:'/main',
                query:{companyName:data.companyName,companySales:data.companySales,companyObject:data.companyObject}
                })
        }

        function redirect2(){
          router.push({pathname:'/profile',
          query:{companyName:data.companyName,companySales:data.companySales,companyObject:data.companyObject}
          })
        }

   async function getData(e){
    e.preventDefault()
    console.log(data2)
    axios.get('http://localhost:4000/readProduct',{params:{x:data3,productId:data2}})
    .then((response)=>{
      var a=response.data
      console.log(a)
      console.log(a['productName'])
    })
   }
        
               
    return(
      
        <div>
           <Head>
          <title>Aquatica Company Portal</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
    
            <script defer  type="text/javascript"  src='/scripts/main.js'></script>

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
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi-bar-chart-fill"><a   onClick={redirect}><h5 className={styles.ch5}>Dashboard</h5></a></i>
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi-box-seam-fill mt-4"><a  href='' ><h5 className={styles.ch5}>Products</h5></a></i>
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi-person-square mt-4"><a  onClick={redirect2}><h5 className={styles.ch5}>Profile</h5></a></i>
          <i style={{fontSize:'1.7vw', color:'white', marginLeft:'20px'}} className="bi bi bi-box-arrow-right mt-5 "><a  href='/log-in'><h5 className={styles.ch5}>Log Out</h5></a></i>
          </div>
    </div>
  </div>
  <div className='container '>
        <div className='row  '>
            <div className='col-lg-12 mt-5  d-flex aligns-items-center justify-content-center' >
                <input className={`form-control`} placeholder='Search Product...' onChange={(e) => {setSearch(e.target.value)}}></input>
                <button className={`btn btn-primary ms-3 ${styles2.btn}`} onClick={searchProduct}>Search </button>
                <button className={`btn btn-primary ms-3 ${styles2.btn2}`} data-bs-toggle="modal" data-bs-target="#addModal" id='addBtn'>Add </button>
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
            <th scope="col">Product type</th>
            <th scope="col">Actions</th></tr>
        </thead>
        <tbody id='tbody'>
           {data1?.map((el,i)=>(
           
           <tr>
        <th>{i+1} </th>
        <th className='name'>{el['productName']}</th>
        <th>{el['productQuantity']}</th>
        <th>{el['productPrice']}</th>
        <th>{el['productType']}</th>
        <th><i  onClick={() =>  deleteProduct(el['productName'])}  className="bi bi-trash-fill"></i>
        <i data-bs-toggle="modal"  data-bs-target="#updateModal" onClick={()=> setData2(el['productId'])+setProductId(el['productId'])+setProductName(el['productName'])+setProductPrice(el['productPrice'])+setProductQuantity(el['productQuantity'])+setProductType(el['productType'])} className="bi bi-pencil-fill ms-2"></i></th>
        </tr>))}
        </tbody>
     </table>
  </div>
    </div>
     </div>


<div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={postData} className='form-control'>
                  <label className='form-label'>Product ID</label>
                  <input className='form-control' type='number' required  placeholder='Enter Product ID' onChange={(e) => {setProductId(e.target.value)}}></input>
                  <label className='form-label'>Product Name</label>
                  <input className='form-control' id='productName' type='text' required  placeholder='Enter Product Name' onChange={(e) => {setProductName(e.target.value)}}></input>
                  <label className='form-label mt-4'>Product Price</label>
                  <input className='form-control' id='productPrice' type="number" required placeholder='Enter Product Price' onChange={(e) => {setProductPrice(e.target.value)}}></input>
                  <label className='form-label mt-4'>Product Quantity</label>
                  <input className='form-control' id='productQuantity' type="number" required placeholder='Enter Product Quantity' onChange={(e) => {setProductQuantity(e.target.value)}}></input>
                  <label className='form-label mt-4'>Product Type</label>
                  <input className='form-control' id='productType' type="text" required placeholder='Enter Product Type' onChange={(e) => {setProductType(e.target.value)}}></input>
                </form>
      </div>
      <div className="modal-footer">  
        <button className={`btn btn-primary  ${styles2.btn}`} id='submitBtn' data-bs-dismiss="modal" onClick={postData}>Submit </button>
        <button className={`btn btn-secondary  float-end ${styles2.mbtn3}`}data-bs-dismiss="modal" id='closeBtn'>Close </button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update Product</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <label>*Only fill the fields you want to update</label>
      <form className='form-control'>
                  <label className='form-label'>Product ID</label>
                  <input className='form-control' type='number'   value={productId} onChange={(e) => {setProductId(e.target.value)}}></input>
                  <label className='form-label'>Product Name</label>
                  <input className='form-control' id='productName' type='text'   value={productName} onChange={(e) => {setProductName(e.target.value)}}></input>
                  <label className='form-label mt-4'>Product Price</label>
                  <input className='form-control' id='productPrice' type="number"  value={productPrice} onChange={(e) => {setProductPrice(e.target.value)}}></input>
                  <label className='form-label mt-4'>Product Quantity</label>
                  <input className='form-control' id='productQuantity' type="number"  value={productQuantity} onChange={(e) => {setProductQuantity(e.target.value)}}></input>
                  <label className='form-label mt-4'>Product Type</label>
                  <input className='form-control' id='productType' type="text"  value={productType} onChange={(e) => {setProductType(e.target.value)}}></input>
                </form>
      </div>
      <div className="modal-footer">  
        <button className={`btn btn-primary  ${styles2.btn}`} id='submitBtn' data-bs-dismiss="modal" onClick={()=>updateProduct()}>Submit </button>
        <button className={`btn btn-secondary  float-end ${styles2.mbtn3}`}data-bs-dismiss="modal" id='closeBtn'>Close </button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
    
}