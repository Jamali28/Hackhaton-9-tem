import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


export default function SigninPage() {
  return (
 
    <div className="relative w-screen h-[150px] bg-gray-100">
      {/* Background Image with 30% Opacity */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/img.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[popins] text-yellow-500  px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6 lg:py-8 
         text-center">
          Our Chefs
        </h1>
        
     </div>
    
    
      {/* Signin Form Section */}
      <section className="py-16 relative bg-white">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-black">Sign In</h3>
          <form>
            

            {/* Email Input */}
            <div className="mb-4 relative">
              <input
                type="email"
                className="w-full border rounded px-3 py-2 pl-10 focus:ring focus:ring-yellow-300"
                placeholder="Email"
              />
              <Image
                src="/EnvelopeSimple.png" // Use your desired icon here
                alt="Email Icon"
                width={20}
                height={20}
                className="absolute left-3 top-2.5"
              />
            </div>

{/* Password Input */}
<div className="mb-4 relative">
  <input
    type="password"
    className="w-full border rounded px-3 py-2 pl-10 focus:ring focus:ring-yellow-300"
    placeholder="Password"
  />
  <Image
    src="/Lock.png" // Use your desired icon here
    alt="Lock Icon"
    width={20}
    height={20}
    className="absolute left-3 top-2.5"
  />
</div>

{/* Remember Me Checkbox */}
<div className="flex items-center mb-4">
  <input type="checkbox" className="mr-2 " />
  <span>Remember me?</span>
            </div>

 {/* Sign Up Button */}
 <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign Ip
            </button>

            {/* Forgot Password Link */}
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
            </p>
          </form>

          {/* Social Media Signin Buttons */}
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              
              <FcGoogle  className=""/>  Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              
              <FaApple className=""/> Sign up with Apple
            </button>
          </div>
        </div>
      </section>
   </div>
  );
}