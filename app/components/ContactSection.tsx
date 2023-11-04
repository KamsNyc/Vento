"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";

function ContactSection() {
  const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm('service_qa7md6x', 'template_ibhkif4', form.current, 'Mex_LOCDswjtTjfls')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section
      id="contact"
      className="md:py-10 max-h-[1467px] md:max-h-[897px] w-full h-full mb-[4rem]"
    >
      {/* HEADING CONTAINER*/}
      <div className="flex items-center justify-between gap-8 pt-[52px]">
        {/* HEADING */}
        <h3 className="font-medium text-[44px] leading-[55px] flex-shrink-0 pl-4 md:pl-[138px]">
          Contact Us
        </h3>
        {/* LINE */}
        <div className="w-[85%]">
          <div className="w-full h-[4px] bg-[#1A63BB]" />
        </div>
      </div>

      {/* SPLIT SECTION */}
      <div className=" px-4 xl:px-[138px] block md:flex items-center justify-between mt-[56px] md:mt-0 lg:py-0 md:gap-[56px] lg:my-[54px]">
        {/* LEFT */}
        <div className="block lg:flex text-left w-full lg:w-[30%] h-full text-[#4E4E4E] text-[20.38px] font-[300] leading-[28px] max-h-[392px] lg:max-h-[292px] max-w-[426px] lg:max-w-[326px] lg:pr-2 mb-[38px] md:mt-0 md:mb-0">
          Whether you are renovating an existing home or building a custom home,
          our team is here to help.
          <br></br>
          <br></br>
          Contact us today to learn more about how we can provide you with the
          best HVAC design solutions for your renovation project or custom home.
          <br></br>
          <br></br>
          info@ventohvac.com
        </div>
        {/* RIGHT CONTACT FORM */}
        <form ref={form} onSubmit={sendEmail} id="contact-form" className="block lg:flex-col items-center justify-center w-full lg:w-[70%] h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-full  gap-y-7 md:gap-y-14  gap-x-4">
            {/* FIRST NAME */}
            <div className="col-span-1 ">
              <div className="flex flex-col">
                <label
                  htmlFor="first_name"
                  className="font-medium text-[17px] pb-3"
                >
                  First Name
                </label>
                <input
                  placeholder="John"
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="w-full h-[52px] text-[#7D7D7D] text-[17px] pl-3 bg-[#F9F9F9] rounded-[10px]"
                />
              </div>
            </div>
            {/* LAST NAME */}
            <div className="col-span-1">
              <div className="flex flex-col">
                <label
                  htmlFor="last_name"
                  className="font-medium text-[17px] pb-3"
                >
                  Last Name
                </label>
                <input
                  placeholder="Doe"
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="w-full h-[52px] text-[#7D7D7D] text-[17px] pl-3 bg-[#F9F9F9] rounded-[10px]"
                />
              </div>
            </div>
            {/* EMAIL */}
            <div className="col-span-1">
              <div className="flex flex-col">
                <label
                  htmlFor="email_address"
                  className="font-medium text-[17px] pb-3"
                >
                  Email
                </label>
                <input
                  placeholder="Johndoe@gmail.com"
                  type="text"
                  name="email_address"
                  id="email_address"
                  className="w-full h-[52px] text-[#7D7D7D] text-[17px] pl-3 bg-[#F9F9F9] rounded-[10px]"
                />
              </div>
            </div>
            {/* COMPANY */}
            <div className="col-span-1">
              <div className="flex flex-col">
                <label
                  htmlFor="company_name"
                  className="font-medium text-[17px] pb-3"
                >
                  Company
                </label>
                <input
                  placeholder="Company"
                  type="text"
                  id="company_name"
                  name="company_name"
                  className="w-full h-[52px] text-[#7D7D7D] text-[17px] pl-3 bg-[#F9F9F9] rounded-[10px]"
                />
              </div>
            </div>
          </div>

            {/* BOTTOM GRID 1by1 */}
          <div className="grid grid-cols-1 gap-y-7  pt-[59px]  pb-[32px]">
             {/* Message */}
             <div className="col-span-1">
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="font-medium text-[17px] pb-3"
                >
                  Message
                </label>
                <textarea
                  placeholder="I have an idea for a project..."
                  id="email_address"
                  name="message"
                  className="w-full min-h-[152px] text-[#7D7D7D] text-[17px] pl-3 bg-[#F9F9F9] rounded-[10px] py-2"
                />
              </div>
            </div>
          </div>


          {/* SUBMIT BUTTON */}

          <input 
          type="submit" 
          value="Send"
          className="w-full h-[52px] text-[#fff] text-[17px] pl-3 bg-[#1A63BB] rounded-[10px] cursor-pointer "
          />
        </form>
      </div>
    </section>
  );
}

export default ContactSection;


