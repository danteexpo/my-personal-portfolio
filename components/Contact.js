// React & Next
import React, { useState } from "react";
import Image from "next/image";
// Formspree
import { useForm, ValidationError } from "@formspree/react";
// Components
import { Footer } from "./Footer";
// Hooks
import { useMode } from "../hooks/useMode";
// Images
import contactGift from "../public/Contact/contact-gift.svg";
import contactStackedWaves from "../public/Contact/contact-stacked-waves.svg";
import contactTabletStackedWaves from "../public/Contact/contact-tablet-stacked-waves.svg";
// Framer Motion
import { motion } from "framer-motion";

export const Contact = () => {
  const { mode } = useMode();
  const [isActive, setIsActive] = useState(false);
  const [state, handleSubmit] = useForm("mnqwlger");

  const handleStyle = () => {
    setIsActive(prevState => (prevState ? false : true));
  };

  return (
    <section id="contact" className="relative mt-10 sm:mt-16 max-w-3xl mx-auto">
      <h2
        data-title="form"
        className={`mx-auto relative ${
          isActive ? "top-0 md:left-0" : "top-24 md:left-28"
        } transition-all duration-1000 w-min font-bold text-8xl text-transparent ${
          mode === "dark"
            ? "text-form-transparent-dark"
            : "text-form-transparent-light"
        } before:content-[attr(data-title)] before:absolute before:right-[6px] 
				md:text-9xl md:rotate-[270deg] md:absolute md:top-36`}
      >
        form
      </h2>

      <div className="relative -top-3 mx-auto max-w-sm rounded-t-2xl dark:border-t-2 dark:border-main-white bg-main-black sm:flex sm:justify-between sm:items-center sm:max-w-xl sm:mx-0 sm:ml-auto sm:rounded-none sm:rounded-l-2xl sm:dark:border-l-2 sm:dark:border-b-2">
        <form
          onSubmit={handleSubmit}
          className="pt-8 pb-4 flex flex-col gap-4 w-[80%] max-w-sm mx-auto text-main-black font-light sm:pb-8 sm:mx-0 sm:ml-8"
        >
          <div className="flex justify-between items-center">
            <h2
              data-title="Let's talk"
              className="relative font-bold text-2xl text-transparent text-transparent-dark before:content-[attr(data-title)] before:absolute before:bottom-[3px] before:text-main-white sm:text-4xl"
            >
              Let&apos;s talk
            </h2>
            <motion.span
              onClick={handleStyle}
              className="z-10 cursor-pointer opacity-80 hover:opacity-100"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
            >
              <Image src={contactGift} alt="Gift" width={32} height={32} />
            </motion.span>
          </div>

          <span className="flex flex-col">
            <label htmlFor="name" className="text-main-white pl-4">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="bg-main-white p-2 font-light outline-none rounded-full px-4"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </span>

          <span className="flex flex-col">
            <label htmlFor="email" className="text-main-white pl-4">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="bg-main-white p-2 font-light outline-none rounded-full px-4"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </span>

          <span className="flex flex-col">
            <label htmlFor="message" className="text-main-white pl-4">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-main-white p-2 font-light outline-none h-28 max-h-28 min-h-[64px] px-4"
              placeholder="Type your message here..."
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </span>

          {!state.succeeded && (
            <button className="flex justify-center items-center bg-transparent rounded-full border-2 border-main-white text-main-white hover:bg-main-white hover:text-main-black">
              Send
            </button>
          )}
          {state.succeeded && (
            <button className="flex justify-center items-center bg-transparent rounded-full border-2 text-main-white border-[#4BB543] bg-[#4BB543]">
              Thanks!!!
            </button>
          )}
        </form>
        <span className="sm:hidden">
          <Image src={contactStackedWaves} alt="" layout="responsive" />
        </span>
        <span className="hidden relative w-[158px] sm:block">
          <Image src={contactTabletStackedWaves} alt="" layout="responsive" />
        </span>
      </div>
      <Footer />
    </section>
  );
};
