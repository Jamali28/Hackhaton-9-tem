import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <main className="w-full flex justify-center items-center">
        <div className="w-full sm:p-5 md:h-[500px] flex flex-col md:flex-row md:justify-center items-center bg-black">
          {/* Text Section */}
          <div className="w-full md:w-[50%] p-4">
            <h3 className="text-yellow-500 font-sans">Its Quick & Amusing</h3>

            <h1 className="text-white font-bold sm:text-lg md:text-3xl lg:text-5xl flex items-baseline mt-2">
              <span className="text-yellow-400">Th</span>e Art of Speed
            </h1>

            <h2 className="text-white font-bold sm:text-lg md:text-3xl lg:text-5xl pt-4">
              Food Quality
            </h2>

            <div className="pt-5 pb-4">
              <p className="text-white text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                facere voluptatum tempore massa conque.
              </p>
            </div>

            <a href="/menu">
              <button className="bg-yellow-500 text-gray-800 sm:hidden md:inline-block px-6 py-2 rounded-full h-10 hover:bg-yellow-600 transition">
                See Menu
              </button>
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[50%] flex justify-center items-center">
            <Image
              src={"/food.jpg"}
              alt="plate"
              width={1920}
              height={1150}
              className="w-full h-auto max-w-[500px] rounded-lg shadow-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
}