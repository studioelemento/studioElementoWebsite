import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Connect = () => {
  const [reachBack, setReachBack] = useState("Mail");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="bg-white text-black py-24 px-6 md:px-8">
        
        {/* Main Content Area */}
        <div className="max-w-[1100px] mx-auto relative pr-0 md:pr-16 w-full flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-[50px] md:text-[72px] font-black leading-none text-black tracking-tight mb-2">
              connect.
            </h1>
            <p className="text-[18px] md:text-[22px] text-gray-800 font-medium mb-8">
              Let's <span className="italic">discuss and co-create</span>
            </p>
            
            <div className="text-[16px] md:text-[20px] text-black space-y-4 mb-8">
              <p className="font-bold tracking-tight">
                If you have already seen our website, you might already have<br className="hidden md:block"/>an idea what we do and how we do it.
              </p>
              <p className="font-medium tracking-tight">
                We support brands from their birth to their growth to their<br className="hidden md:block"/>development to their functioning to their strategies....<br/>
                So in short, <span className="text-primary font-bold">we develop your thoughts and ideas into products.</span>
              </p>
              
              <p className="text-[14px] md:text-[16px] italic text-black font-medium pt-2">
                PS: if you haven't seen our works (which is highly unlikely),<br className="hidden md:block"/>
                please do check them out in <Link to="/thedotfolio" className="text-primary font-bold hover:underline">.thedotfolio</Link>
              </p>
            </div>

            <div className="text-[16px] md:text-[20px] text-black mb-12">
              <p className="font-medium tracking-tight">
                So shall we <span className="text-primary font-bold">connect@studioelemento.in</span><br/>
                Or call/WhatsApp us on <span className="text-primary font-bold">+91 9544 00 8225</span>
              </p>
            </div>
          </div>

          {/* Vertical Separator Line */}
          <div className="hidden md:block w-[1px] bg-gray-200 relative"></div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col pt-2">
            <div className="mb-8">
              <h2 className="text-[16px] md:text-[18px] font-bold text-black tracking-tight leading-snug">
                Would you like us to contact you back<br className="hidden lg:block"/> or is there any feedbacks you would<br className="hidden lg:block"/>
                want to say?
              </h2>
            </div>

            {/* Form Section */}
            <form className="flex flex-col gap-5 w-full">
              
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold text-black uppercase">NAME :</label>
                <div className="w-full flex border-[2px] border-gray-200 rounded-[8px] overflow-hidden bg-white hover:border-gray-300 focus-within:border-gray-400 transition-colors">
                  <select className="px-3 py-2 bg-transparent border-r-[2px] border-gray-200 text-[13px] font-bold outline-none cursor-pointer">
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                  </select>
                  <input type="text" placeholder="Type in your name" className="flex-1 px-3 py-2 text-[13px] md:text-[14px] font-medium placeholder:text-gray-400 outline-none w-full italic" />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold text-black uppercase">PHONE NUMBER :</label>
                <div className="w-full flex border-[2px] border-gray-200 rounded-[8px] overflow-hidden bg-white hover:border-gray-300 focus-within:border-gray-400 transition-colors">
                  <select className="px-3 py-2 bg-transparent border-r-[2px] border-gray-200 text-[13px] font-bold outline-none cursor-pointer">
                    <option>+91</option>
                  </select>
                  <input type="text" placeholder="Type in your phone number" className="flex-1 px-3 py-2 text-[13px] md:text-[14px] font-medium placeholder:text-gray-400 outline-none w-full italic" />
                </div>
              </div>

              {/* Mail */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold text-black uppercase">MAIL ID :</label>
                <div className="w-full border-[2px] border-gray-200 rounded-[8px] overflow-hidden bg-white hover:border-gray-300 focus-within:border-gray-400 transition-colors">
                  <input type="email" placeholder="Type in your E-Mail ID" className="w-full px-3 py-2 text-[13px] md:text-[14px] font-medium placeholder:text-gray-400 outline-none italic" />
                </div>
              </div>

              {/* Feedback */}
              <div className="flex flex-col gap-2 mt-2">
                <label className="text-[12px] md:text-[13px] font-bold text-black uppercase">FEEDBACKS :</label>
                <div className="w-full border-[2px] border-gray-200 rounded-[8px] overflow-hidden bg-white h-[140px] hover:border-gray-300 focus-within:border-gray-400 transition-colors">
                  <textarea placeholder="Type in what you have in mind!" className="w-full h-full px-3 py-3 text-[13px] md:text-[14px] font-medium placeholder:text-gray-400 outline-none resize-none italic"></textarea>
                </div>
              </div>

              {/* Reach back options */}
              <div className="mt-8 mb-20">
                <label className="text-[12px] md:text-[13px] font-bold text-black uppercase block mb-5">WANT US TO REACH BACK?</label>
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-4 cursor-pointer group" onClick={() => setReachBack("Mail")}>
                    <div className={`relative w-9 h-5 rounded-full border-[1.5px] flex-shrink-0 transition-colors duration-200 ${reachBack === "Mail" ? "bg-primary border-primary" : "bg-gray-100 border-gray-200 group-hover:bg-gray-200"}`}>
                      <div className={`absolute top-[1.5px] w-3.5 h-3.5 rounded-full bg-white shadow-sm border transition-all duration-200 ${reachBack === "Mail" ? "left-[18px] border-primary" : "left-[2px] border-gray-200"}`}></div>
                    </div>
                    <span className="text-[12px] md:text-[13px] font-bold text-black">Mail</span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group" onClick={() => setReachBack("Phone")}>
                    <div className={`relative w-9 h-5 rounded-full border-[1.5px] flex-shrink-0 transition-colors duration-200 ${reachBack === "Phone" ? "bg-primary border-primary" : "bg-gray-100 border-gray-200 group-hover:bg-gray-200"}`}>
                      <div className={`absolute top-[1.5px] w-3.5 h-3.5 rounded-full bg-white shadow-sm border transition-all duration-200 ${reachBack === "Phone" ? "left-[18px] border-primary" : "left-[2px] border-gray-200"}`}></div>
                    </div>
                    <span className="text-[12px] md:text-[13px] font-bold text-black">Phone</span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group" onClick={() => setReachBack("No")}>
                    <div className={`relative w-9 h-5 rounded-full border-[1.5px] flex-shrink-0 transition-colors duration-200 ${reachBack === "No" ? "bg-primary border-primary" : "bg-gray-100 border-gray-200 group-hover:bg-gray-200"}`}>
                      <div className={`absolute top-[1.5px] w-3.5 h-3.5 rounded-full bg-white shadow-sm border transition-all duration-200 ${reachBack === "No" ? "left-[18px] border-primary" : "left-[2px] border-gray-200"}`}></div>
                    </div>
                    <span className="text-[12px] md:text-[13px] font-bold text-black">No, just wanted to give a feedback.</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-2 mb-8">
                <button type="button" className="bg-primary text-white font-bold text-[14px] md:text-[16px] px-8 py-2.5 rounded-[8px] hover:bg-orange-600 transition-colors shadow-sm w-max">
                  Submit
                </button>
              </div>

            </form>
          </div>



        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Connect;
