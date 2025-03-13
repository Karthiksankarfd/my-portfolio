import React, { useEffect, useRef, useState } from "react";
import BadgeName from "../components/BadgeName";
import emailjs from "@emailjs/browser";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
const ContactSection = () => {
  const textareaRef = useRef(null);
  const [formData, setFormdata] = useState({});

  const data = {
    service_id: import.meta.env.VITE_APP_EMIALJS_SERVICE_ID,
    template_id: import.meta.env.VITE_APP_EMIALJS_TEMPLATE_ID,
    user_id: import.meta.env.VITE_APP_EMAILJS_USER_ID,
    template_params: {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!req.ok) {
        const errorText = await req.text(); // Read the error response as text
        throw new Error(`Error: ${errorText}`);
      }

      const res = await req.text();
      console.log("Email sent successfully:", res);
    } catch (e) {
      console.error("Error sending email:", e.message);
    }
  };

  const handleChage = (e) => {
    const { value, name } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };
  useEffect(() => {
    const adjustHeight = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        // ✅ Check to avoid errors
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    };

    const textarea = textareaRef.current;
    if (textarea) {
      // ✅ Ensure textarea exists
      textarea.addEventListener("input", adjustHeight);
      adjustHeight(); // Initial adjustment
    }

    return () => {
      if (textarea) {
        // ✅ Cleanup to prevent memory leaks
        textarea.removeEventListener("input", adjustHeight);
      }
    };
  }, []);

  return (
    <main className="contact_me_main_container bg-[var(--primary-bg)] py-10">
      <section className="w-[80%] mx-auto py-5 text-white flex flex-col lg:flex-row gap-y-10  ">
        <div className="child_left text-4xl lg:text-7xl text-start flex-1">
          <BadgeName content="CONTACT ME HERE" color="white" />
          <h1>
            {" "}
            Let’s Turn your Ideas <br />
            into Reality
          </h1>
        </div>
        <div className="child_right flex-1">
          {/* <form onSubmit={sendMessage} className="flex flex-col ">
            <div className="form_field_one  w-full text-start mb-5">
              <label
                htmlFor="name"
                className="block text-start font-thin font-lg"
              >
                Name
              </label>
              <input
                onChange={handleChage}
                id="name"
                name="name"
                type="text"
                size="20"
                className="border-b-2 border-neutral-500 px-5  outline-none w-full  lg:w-2/3"
                required
              />
            </div>

            <div className="form_field_two  w-full text-start mb-5">
              <label
                htmlFor="email"
                className="block text-start font-thin font-lg"
              >
                Your Email
              </label>
              <input
                onChange={handleChage}
                id="email"
                name="email"
                type="email"
                size="50"
                className="border-b-2 border-neutral-500 px-5  outline-none w-full  lg:w-2/3"
                required
              />
            </div>

            <div className="form_field_three  w-full text-start mb-5">
              <label
                htmlFor="email"
                className="block text-start font-thin font-lg"
              >
                Your Message
              </label>
              <textarea
                onChange={handleChage}
                ref={textareaRef}
                id="email"
                type="text"
                name="message"
                className="border-b-2 border-neutral-500 px-5  outline-none w-full  h-auto lg:w-2/3  overflow-hidden resize-none"
                required
              />
            </div>

            <input
              type="submit"
              className="w-fit bg-black text-green-500  px-5 py-2 "
            />
          </form> */}
          <ul className="border-l-4 border-green-500 px-5">

            <li className="mb-5 ">

              <a
                className="flex flex-wrap items-center font-thin text-sm lg:text-2xl gap-5"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=karthikeyansankar887@gmail.com&su=Hello&body=Hi%20there!"
                target="_blank"
              >

                <div className="bg-[var(--secondary-bgcolor)] lg:p-5 rounded-full">
                  <img
                    src={mail}
                    alt=""
                    className="aspect-square h-5 w- flex-shrink-0"
                  />
                </div>

                karthikeyansankar887@gmail.com
              </a>

            </li>

            <li>
              <a
                className="flex flex-wrap items-center font-thin text-sm lg:text-2xl gap-5 text-start"
                href="https://www.linkedin.com/in/karthikeyan-sankar-360ba0259/"
                target="_blank"
              >
                <div className="bg-[var(--secondary-bgcolor)]  lg:p-5 rounded-full">

                  <img
                    src={linkedin}
                    alt=""
                    className="aspect-square h-5 w-5 flex-shrink-0"
                  />
                </div>
                www.linkedin.com/karthikeyan-sankar
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ContactSection;
