// components/BulkOrderBanner.tsx

export default function BulkOrderBanner() {
  return (
    // <div className="w-full rounded-2xl max-w-7xl mx-10 sm:mx-auto shadow-md bg-gradient-to-r from-blue-600 to-purple-500 p-6 flex items-center justify-between overflow-hidden">
    //   {/* Text content */}
    //   <div className="text-white max-w-md">
    //     <h2 className="text-lg font-semibold">WhatsApp Now for Bulk Orders!</h2>
    //     <p className="text-sm mt-1">Min. Order Quantity 10pcs</p>
    //     <button className="mt-4 px-4 py-2 bg-white bg-opacity-30 rounded-full text-black text-sm hover:bg-opacity-40 transition">
    //       CLICK HERE
    //     </button>
    //   </div>

    //   {/* Image */}
    //   <div className="hidden md:block">
    //     <img
    //       src="https://images.stockcake.com/public/d/6/6/d665ee86-693a-4217-900d-f458cbd1760d_large/colorful-wardrobe-array-stockcake.jpg" // Replace with your actual image path
    //       alt="Bulk order products"
    //       className="h-36 rounded-r-2xl object-cover"
    //     />
    //   </div>
    // </div>
    <div id="Contact" className="mx-auto mt-12 max-w-7xl sm:mt-12 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden  bg-gray-900 px-6 py-10 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
        <img
          alt=""
          src="/bulk.jpg"
          className="absolute inset-0 h-full w-full object-cover  "
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
        <div aria-hidden="true" className="absolute -left-80 -top-56 transform-gpu blur-3xl">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem]  opacity-[0.45]"
          />
        </div>
        <div
          aria-hidden="true"
          className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem]  opacity-25"
          />
        </div>
        <div className="mx-auto mt-12 max-w-7xl sm:mt-12 sm:px-6 lg:px-8">
  <div className="relative overflow-hidden  px-6 py-10  sm:px-10">
    {/* <img
      alt="Group of young volunteers"
      src="https://media.istockphoto.com/id/1145183127/photo/group-of-young-volunteers-embracing-at-park.jpg?s=612x612&w=0&k=20&c=NZzwRsVlT6ywQXUiktF7NKyFZ0hkBxIsVk3JoUONjdM="
      className="absolute inset-0 h-full w-full object-cover"
    /> */}
    {/* More subtle dark overlay */}
    <div className="absolute inset-0 " />

    <div className="relative mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        WhatsApp Now for Bulk Orders!
      </h2>
      <p className="mt-2 text-lg text-white">Min. Order Quantity 10pcs</p>
      <button className="mt-6 px-5 py-2 bg-white bg-opacity-30 rounded-full text-black text-sm hover:bg-opacity-50 transition">
       
        <a href="https://api.whatsapp.com/message/J2COZUC5F7T3J1?autoload=1&app_absent=0"  target="_blank"
              rel="noopener noreferrer"> CLICK HERE</a>
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
