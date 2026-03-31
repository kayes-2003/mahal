import React from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <main className="text-white w-full  bg-cover relative">
      {/* Hero Section */}
      <section
        className="absolute inset-0 w-screen h-160 bg-cover bg-center z-0   bg-no-repeat brightness-70  animate-ping [animation-duration:5s] [animation-delay:1s] [animation-iteration-count:1]"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2182241817/photo/gourmet-dish-featuring-perfectly-grilled-steak-accompanied-by-a-fresh-salad-and-a-side-of.jpg?s=612x612&w=0&k=20&c=Bi4zKHiUp5jMYgk0aaSVEcOj1ilhRR9KpWmhpkzTKtM=')",
          filter: "brightness(0.6)",
        }}
        aria-hidden="true"
      >
        
      </section>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl pt-20 font-norml leading-tight font-serif text-white">
          Authentic cuisine, <br /> made entirely from <br /> scratch.
        </h1>
        
        <div className="flex justify-center md:justify-start gap-8 text-white text-center md:text-left pt-5">
              <a href="#" aria-label="Facebook" className="w-7 h-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 640" className="fill-current text-white hover:text-pink-400 transition-colors">
                  <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-7 h-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-current text-white hover:text-pink-400 transition-colors"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="w-7 h-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 640" className="fill-current text-white hover:text-pink-400 transition-colors">
                  <path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"/>
                </svg>
              </a>


              
            </div>
      </div>




      <section className="py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        
      
      
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-10">

    {/* Image (comes first on mobile) */}
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] grid grid-cols-1 md:grid-cols-2 order-1 lg:order-2">
      <Image
        src="/food-01.jpg"
        alt="Foods"
        fill
        className="object-cover"
      />
    </div>

    {/* Text (comes after image on mobile) */}
    <div className="space-y-5 text-left order-2 lg:order-1">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black pb-10">
        Memories <br /> made in food
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 md:pr-10">
        Our eclectic menu reflects the wide variety of influences and experiences that inform our approach to cooking. We don’t just serve dishes, we serve memories.         </p>

      <div className="">

      <a href="/blog">
          <button className="px-8 sm:px-8 md:px-12 mt-6 sm:mt-10 py-3 uppercase text-[#600d0e] border-2 border-[#600d0e] hover:bg-gray-700 hover:text-white transition font-semibold font-[Montserrat] mr-4 ml-6">
            Learn More
          </button>
        </a>
      
      </div>
    
    </div>

  </div>
</section>


    {/* Popular dishes */}


<section className= "relative py-12 sm:py-16 px-4 sm:px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto">


    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pb-10 relative z-20 flex-col items-center justify-center text-center">
      <h2 className=" text-center items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black pb-10">
        Popular dishes
      </h2>

      
    </div>

    {/* Title */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
{/* Items-01 */}
      <div><a href="/How_I_got_into_marketing_and_why_I_love_it" className=" block group overflow-hidden relative">
        <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
          <Image
            src="/Vegetable Pho.jpg"
            alt="Vegrtable Pho"
            fill
            className="rounded-lg object-cover"
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 pb-10 items-center text-black justify-between">
      <h2 className="text-2xl sm:text-3xl md:text-3xl  font-serif">
        Vegetable Pho
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-3xl  font-serif md:text-right">
        $8
      </h2>
    </div>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 md:pr-10">
           Pho is based on a family recipe that's been handed down for generations. It's a spicy, light and aromatic noodle soup. 
          </p>
          </a>
      </div>


    {/* items-02 */}

      <div><a href="/The_10_ways_you_are_ruining_your_Content" className=" block group overflow-hidden relative">
        <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
          <Image
            src="/Tonkatsu Ramen.jpg"
            alt="Tonkatsu Ramen"
            fill
            className="rounded-lg object-cover"
          />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-6 pb-10 items-center text-black justify-between">
      <h2 className="text-2xl sm:text-3xl md:text-3xl  font-serif">
       Tonkatsu Ramen
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-3xl  font-serif md:text-right">
        $7
      </h2>
    </div>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 md:pr-10">
           Our bespoke ramen comes with handmade noodles, a wide array of toppings to choose from and homemade broth.
          </p>
          </a>
      </div>

    </div>


      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pb-10 relative z-20 flex-col items-center justify-center text-center">
     
        <a href="/blog">
          <button className="px-8 sm:px-8 md:px-12 mt-6 sm:mt-10 py-3 uppercase text-[#600d0e] border-2 border-[#600d0e] hover:bg-gray-700 hover:text-white transition font-semibold font-[Montserrat] mr-4 ml-6">
            See Menu
          </button>
        </a>
      
    </div>
    
    
  </div>

</section>




{/* OTHER ANIMITY  */}


<section className="py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
     
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2  items-center pt-10 gap-20">

    {/* Image (comes first on mobile) */}
    <div className="relative w-full h-64 sm:h-80 md:h-[400px] grid grid-cols-1 md:grid-cols-2 order-1 lg:order-2">
      <Image
        src="/baby-02.jpg"
        alt="food_with_baby"
        fill
        className="rounded-lg object-cover"
      />
    </div>

    {/* Text (comes after image on mobile) */}
    <div className="space-y-5 text-left order-2 lg:order-1">
      <h2 className=" text-left items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black pb-10">
        Great food for the whole family
      </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 md:pr-15">
           Some of the best memories revolve around good food and family – that's why we welcome all of your loved ones, including children. We have dedicated family seating section towards the back of the restaurant.
          </p>
    </div>

  </div>
</section>




<section className="py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 pt-10 items-center">

          {/* Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] grid grid-cols-1 md:grid-cols-2">
            <Image
              src="/chef-02.jpg"
              alt="Chef"
             fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Text */}
    <div className="space-y-5 text-left order-2 lg:order-1">
      <h2 className=" text-left items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black pb-10 md:pl-12">
        We are here to lighten up your evening
      </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 md:pl-15">
           All of our waiters have worked in our kitchen, meaning that they know the menu inside out and can help you, whether you need to check for allergens or need a hand for picking the right kind of wine.
          </p>
    </div>
        </div>
</section>


      



<section className="py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        
      
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pt-10">

    {/* Image (comes first on mobile) */}
    <div className="relative w-full h-64 sm:h-80 md:h-[400px] grid grid-cols-1 md:grid-cols-2 order-1 lg:order-2">
      <Image
        src="/dog.jpg"
        alt="pet"
        fill
        className="rounded-lg object-cover"
      />
    </div>

    {/* Text (comes after image on mobile) */}
    <div className="space-y-5 text-left order-2 lg:order-1">
      <h2 className=" text-left items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black pb-10">
       We welcome your animal friends
      </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 md:pr-15">
           Our restaurant is pet-friendly, meaning that you can bring your furry friends with you. We ask for calm and collected behavior from all of our animal customers.
          </p>
    </div>

  </div>
</section>






            {/* Book a table  */}

<section className= "relative py-12 sm:py-16 px-4 sm:px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto">


    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pb-10 relative z-20 flex-col items-center justify-center text-center">
      <h2 className=" text-center items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black pb-10">
        Book a table 
      </h2>

          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 md:pr-10">
           Reserving a table beforehand means less waiting. <br /> Groups of 8 or more must reserve ahead of time.
          </p>
      
    </div>

    
    

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pb-10 relative z-20 flex-col items-center justify-center text-center">
     
        <a href="/blog">
          <button className="px-8 sm:px-8 md:px-12 mt-6 sm:mt-10 py-3 uppercase text-[#600d0e] border-2 border-[#600d0e] hover:bg-gray-700 hover:text-white transition font-semibold font-[Montserrat] mr-4 ml-6">
            Book Now 
          </button>
        </a>
      
    </div>
    
    
  </div>

</section>

      





     


   </main>
  );
}