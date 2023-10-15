import { Link } from "react-router-dom";
import Card from "../Component/Card";
import Titel from "../Component/Titel"
import { useEffect, useState } from "react";

 

const Products = () => {

  const[allBlogs,SetBlogs]= useState([]);
  const [loading,setLoading]=useState(null);

  useEffect(()=>{
    fetchBlog()
  },[])

  const fetchBlog =async()=>{
       setLoading(true)

       const blogs = await fetch("https://fakestoreapi.com/products")
       const result =await blogs.json()
       const bestProduct = result
       SetBlogs(bestProduct)

       setLoading(false)
  }

  return (
    <div>
      <Titel MainTitel="All Products" SubTitel="Find the best product for you"/>
      <div className=" container-fluid flex justify-center flex-wrap gap-3">
        {
          loading? <loading/>:<>
            {
            allBlogs.map((eachBlog,i)=> <Card key={i} blogInfo={eachBlog}/>)
   
            }
          </>
        }
        
        </div>
        <div className="flex justify-end mr-20">
        <button className="btn btn-secondary mt-6"><Link to='/products'>View More</Link></button>
        </div>
    </div>
  )
}

export default Products
