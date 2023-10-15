import { useEffect, useState } from "react";
import Card from "../Component/Card";
import Carousel from "../Component/Carousel";
import Titel from "../Component/Titel";
import { Link } from "react-router-dom";
import Loading from "../Component/Loading";
import Assats from "../Component/Assats";

 

const Home = () => {
  
  const[allBlogs,SetBlogs]= useState([]);
  const [loading,setLoading]=useState(null);

  useEffect(()=>{
    fetchBlog()
  },[])

  const fetchBlog =async()=>{
       setLoading(true)

       const blogs = await fetch("https://fakestoreapi.com/products")
       const result =await blogs.json()
       const bestProduct = result.slice(5,10)
       SetBlogs(bestProduct)

       setLoading(false)
       
  }

  return (
    <div>
        <Carousel/>
         
       
        <Titel MainTitel="Best Products" SubTitel="Find your product that you looking for "/>
        <div className=" container-fluid flex justify-center flex-wrap gap-3">
        {
          loading? <Loading/>:<>
            {
            allBlogs.map((eachBlog,i)=> <Card key={i} blogInfo={eachBlog}/>)
   
            }
          </>
        }
        
        </div>
        <Link to="/products"><div className="flex justify-end mr-20 "> <button className="btn btn-secondary  mt-6">View More </button></div></Link>
  
       
    </div> 
  );
};

export default Home;
