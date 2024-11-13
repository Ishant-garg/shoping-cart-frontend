import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../utils/cartSlice";
import toast  from 'react-hot-toast';


const CardData = ({ title, image, price, description , id }) => {  

  const notify = () => toast.success('Item added to cart!');
  const notify2 = ()=> toast.error("Item removed from cart!")

  const dispatch = useDispatch();
  const cartData = useSelector(store=>store.cart.item)
  
  const handleclick = () => {
    dispatch(addCart({ title, image, price, description , id}));
      notify()
  };
 

  const handleclick2 = () => {
     dispatch(removeCart(id))
     notify2()
  };
 


  return (
    <div className="border-2 w-fit mt-3 flex flex-col rounded-xl shadow-[#808080]-400 shadow-lg	hover:scale-[1.12] duration-[.4s] hover:shadow-2xl hover:border-none hover:shadow-gray-500 hover:ease-in-out	 ">
      <div className=" flex flex-col gap-3 px-8 py-4 justify-center items-center align-middle text-start">
        <p className="text-[18px] text-[#374151] font-bold">
          {title.slice(0, 17)}...
        </p>
        <p className="text-xs  text-[#A4ABB6] px-5 h-1 pb-9">
          {" "}
          {description.slice(0, 51)}...{" "}
        </p>
        <img src={image} alt="" className=" w-auto bg-cover h-44" />
      </div>
      <div className="flex justify-between items-baseline py-6 px-4">
        <p className="text-[#16A34A] font-bold text-[1.1rem]">${price}</p>
       
          {cartData.some((e)=> e.id === id)
          ?
          <button
        onClick={() => handleclick2()}
        className="border-2 text-[#374151] border-[#374151] rounded-2xl px-4 py-1 text-xs font-bold duration-[.4s] transition-color sease-in-out hover:bg-[#48515F] hover:text-white"> REMOVE ITEM </button>
           
        :<button
          onClick={() => handleclick()}
          className="border-2 text-[#374151] border-[#374151] rounded-2xl px-4 py-1 text-xs font-bold duration-[.4s] transition-color sease-in-out hover:bg-[#48515F] hover:text-white"
       > ADD TO CART </button>
        
          } 
         
      </div>
    </div>
  );
};

export default CardData;
