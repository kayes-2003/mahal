import React from "react";

export default function Homepage() {
  return (
    <main className="text-white w-full  bg-cover relative">
      {/* Hero Section */}
      <section
        className="absolute inset-0 w-full h-162 bg-cover bg-center z-0   bg-no-repeat brightness-70"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2266033838/photo/close-up-of-womans-hands-cutting-raisins-and-nuts.jpg?s=612x612&w=0&k=20&c=HNq5V8s0-tJ5W8kv9yi5MqaqEgUFtqYzMoys4z415Ws=')",
          filter: "brightness(0.6)",
        }}
        aria-hidden="true"
      >
        
        
      </section>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl pt-20 font-norml leading-tight font-serif text-white">
          List of allergens
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
     
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2  items-center pt-10 gap-20">

    <div className="space-y-5 text-left order-2 lg:order-1">
      <h2 className=" text-left items-center text-2xl md:text-3xl font-serif text-black pb-10 md:pl-2">
        
        Allergens
      </h2>

        <p className="text-gray-600 font-serif text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 md:pl-2">
           All our our food is freshly made and created daily in our on-site kitchens, meaning that we often deal with and come to contact with various allergens. We do our utmost best to ensure that no cross-contamination happens, but we cannot unfortunately fully minimize the risk that our chefs don’t come into contact with any allergens at any given time. <br /><br />

We cannot guarantee that all of our dishes are 100% allergen-free or completely suitable to people with allergies or intolerances. If you have an allergy or an intolerance, please inform our team upon arrival to the restaurant so they can help you choose the most suitable dishes. <br /><br />

As our recipes do change from time to time, please take the time to familiarize yourself with our menu.
          </p>
    </div>

    {/* Text (comes after image on mobile) */}
    <div className="space-y-5 text-left order-2 lg:order-1">
      <h2 className=" text-left items-center text-2xl md:text-3xl font-serif text-black pb-10">
        Gluten and dairy
      </h2>

        <p className="text-gray-600 font-serif text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 md:pr-2 md:pb-50">
           We use gluten and dairy products in our kitchen and in our dishes extensively, meaning that cross-contamination cannot be avoided. While we are able to substitute certain ingredients in our dishes, please always check with our staff prior making an order. <br /> <br />

For online orders, we highly recommend specifying in the comment section regarding any allergies or intolerances during the checkout process.
          </p>
    </div>

  </div>
</section>




<section className="py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 pt-10 items-center">

          

    <div className="space-y-5 text-left order-2 lg:order-1">
      <h2 className=" text-left items-center text-2xl md:text-3xl font-serif text-black pb-10 md:pl-2">
        Nuts
      </h2>

        <p className="text-gray-600 font-serif text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 md:pl-2">
           Our restaurant handles various seeds and nuts in our kitchen and in our dishes. For anyone highly allergic to nuts we wouldn’t recommend dining at Ginza, as we cannot be held responsible for any adverse allergic reactions. 
          </p>
    </div>
        </div>
</section>


      



   </main>
  );
}