import Image from 'next/image';
import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <div className=" text-white h-screen flex flex-col ">
     

      {/* Hero Section */}
      <main className="flex-1 flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20 py-8 gap-8 ">        
         {/* Left: Content */}
    <div className="flex-1 space-y-6 text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
        Wear Your Style <br /> With  <span className='text-[#c8650f]'>Sack Apparels!</span>
      </h1>
      <p className="text-lg md:text-xl font-semibold">
        Trendy. Comfortable. Unique.
      </p>
      <p className="text-sm md:text-base text-white/80 max-w-md mx-auto lg:mx-0">
        Get The Coolest T-Shirts Delivered To Your Doorstep!<br />
        Order Now On WhatsApp – Tap The Button & Grab Your Favorite Designs!
      </p>
      <button className="mt-4 bg-white text-black font-semibold py-2 px-6 rounded-full ">
        View Collection
      </button>
    </div>

        <div className="flex-1 flex justify-center items-center">
  <img
    src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing_158538-4877.jpg?t=st=1746280487~exp=1746284087~hmac=64e86b0251b4376be4774d1abe482a17be722c7e8a388083a68a3f0d9a9668b5&w=826"
    alt="Sack Apparels"
    className="w-[80%] max-w-[800px] h-auto rounded-lg object-cover shadow-xl"
  />
</div>

      </main>

      <Marquee 
        className="font-mono text-xl font-extrabold border-t py-2 text-white/80"
              gradient={false}  // Disable the gradient fade at the edges
      speed={50}         // Adjust the speed as needed
      pauseOnHover={false}  // Optional: prevents pausing on hover
    >
      <div className="ml-2">
      ⭐ Bulk Orders   ⭐ T-Shirts  ⭐ Round Neck ⭐ V Neck Tees ⭐ Polo Collar Tees ⭐ Woman T-Shirts
      </div>
    
      <div className="ml-2">
      ⭐ Bulk Orders   ⭐ T-Shirts  ⭐ Round Neck ⭐ V Neck Tees ⭐ Polo Collar Tees ⭐ Woman T-Shirts
      </div>
      <div className="ml-2">
      ⭐ Bulk Orders   ⭐ T-Shirts  ⭐ Round Neck ⭐ V Neck Tees ⭐ Polo Collar Tees ⭐ Woman T-Shirts
      </div>
      <div className="ml-2">
      ⭐ Bulk Orders   ⭐ T-Shirts  ⭐ Round Neck ⭐ V Neck Tees ⭐ Polo Collar Tees ⭐ Woman T-Shirts
      </div>
    </Marquee>


      
    </div>
  );
}
