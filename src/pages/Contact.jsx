import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import Loader from "../components/Loader";
import { Fox } from "../models/Fox";
import useAlert from "../hooks/Alert";
import Alert from "../components/Alert";

const Contact = () => {
  const formref = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const {alert,showAlert,hideAlert}=useAlert()
  const onchangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "fateme",
          email: form.email,
          to_email: "fmoradi.soft@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({show:true,text:'send successfully',type:'success'})
        setTimeout(() => {
          hideAlert()
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        showAlert({show:true,text:'I cant send',type:'danger'})

        setCurrentAnimation("idle");
        console.log(error);
      });
  };
  const oncfocusHandler = () => {
    setCurrentAnimation("walk");
  };
  const onblurHandler = () => {
    setCurrentAnimation("idle");
  };
  return (
    <section className="relative max-container flex lg:flex-row flex-col ">
     {alert.show && <Alert {...alert} />}
      <div className="md:basis-1/2 w-full flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name:
            <input
              type="text"
              name="name"
              placeholder="name..."
              className="input"
              required
              value={form.name}
              onChange={onchangeHandler}
              onBlur={onblurHandler}
              onFocus={oncfocusHandler}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email:
            <input
              type="text"
              name="email"
              placeholder="email..."
              className="input"
              required
              value={form.email}
              onChange={onchangeHandler}
              onBlur={onblurHandler}
              onFocus={oncfocusHandler}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message:
            <textarea
              rows={4}
              name="message"
              placeholder="message..."
              className="textarea"
              required
              value={form.message}
              onChange={onchangeHandler}
              onBlur={onblurHandler}
              onFocus={oncfocusHandler}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onBlur={onblurHandler}
            onFocus={oncfocusHandler}
          >
            {isLoading ? "send..." : "send massage"}
          </button>
        </form>
      </div>
      <div className="md:basis-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fav: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
