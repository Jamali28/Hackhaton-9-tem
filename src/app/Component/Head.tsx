import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <main className="w-full flex justify-center items-center">
        <div className="w-full flex flex-col md:flex-row items-center bg-black sm:p-5 md:h-[500px]">
          {/* Text Section */}
          <div className="w-full md:w-[50%] px-6 sm:px-10 md:px-16 py-6">
            <h3 className="text-yellow-500 text-base sm:text-lg font-sans">
              Its Quick & Amusing
            </h3>

            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-baseline mt-2">
              <span className="text-yellow-400">Th</span>e Art of Speed
            </h1>

            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl pt-4">
              Food Quality
            </h2>

            <div className="pt-5 pb-4">
              <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia facere voluptatum tempore massa conque.
              </p>
            </div>

            <a href="/menu">
              <button className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-full h-10 hover:bg-yellow-600 transition text-sm sm:text-base">
                See Menu
              </button>
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[50%] flex justify-center items-center p-4">
            <Image
              src="/food.jpg"
              alt="plate"
              width={1920}
              height={1150}
              className="w-full h-auto max-w-[400px] sm:max-w-[200px] md:max-w-[600px] rounded-lg shadow-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
