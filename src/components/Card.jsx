import { useEffect, useState } from "react"
import CardData from "./CardData";

const Card = () => {
    const [data , setData] = useState([]);
    useEffect(()=>{
        getData();
    },[])
    

    async function getData(){
        try{
            const data = await fetch("https://fakestoreapi.com/products");
            const json = await data.json();
            setData(json)

        }
        catch (err){
            console.log(err)
        }
    }
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 w-[1150px] mx-auto max-w-[90%] "  >
        {
        data.map((item)=>{
            return <CardData {...item} key = {item.key}/>
        })
        }
    </div>
  )
}

export default Card