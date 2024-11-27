import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
function ViewProduct(){
    const [product,setProduct]=useState([]);

    const getData=()=>{
        axios.get('http://localhost:5000/product')
        .then((res)=>setProduct(res.data))
    }
    useEffect(getData,[])
    function deleteProduct(id)
    {
      //  alert("I want to delete these product...")
      axios.delete(`http://localhost:5000/product/${id}`)
      .then(res=>{
        if(res.status===200)
        {
            alert("product details removed..")
            window.location.reload();
        }
      })
      .catch(error=>console.log(error));
      
    }

    return(
        <div>
           <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th> Product Name</th>
                    <th> Product Image</th>
                    <th>Manufacture</th>
                    <th>Quantity</th>                                     
                    <th>Price</th>
                    <th>In Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((product)=><tr>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td><img src={product.productImage}
                               width={100}></img></td>
                        <td>{product.manufacture}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td><input type="checkbox" checked={product.inStock}></input></td>
                        <td>
                            <button className="btn btn-outline-danger me-4" onClick={()=>deleteProduct(product.id)}><i class="bi bi-trash3-fill"></i></button>
                            <Link className="btn btn-outline-primary" to={`/edit/${product.id}`}><i class="bi bi-pencil-square"></i></Link>
                        </td>
                        
                    </tr>)
                }
                </tbody> 
           </table>
        </div>
    )
}
export default ViewProduct;