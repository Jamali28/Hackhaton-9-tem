import React from 'react';
import Image from 'next/image';

function Testimonials() {
  return (
    <>
      <section className="bg-black px-5 md:px-[135px] py-[120px]">
        <div className="text-center mb-8">
          <h2 className="text-[#FF9F0D] text-[20px] md:text-[32px] whitespace-nowrap md:whitespace-normal">
            Testimonials
          </h2>
          <h2 className="text-white font-bold text-[25px] md:text-[48px] whitespace-nowrap md:whitespace-normal">
            What Our Clients Are Saying
          </h2>
        </div>

        {/* Image or Placeholder Section */}
        <div className="w-full flex justify-center items-center mt-[40px]">
          {/* Placeholder if no image is available */}
          <div className="w-full md:w-[800px] h-[500px] bg-gray-300 flex justify-center items-center ">
            <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id 
                elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;