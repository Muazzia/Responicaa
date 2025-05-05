import { PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Ref } from "react";

interface Props {
  id?: string;
  ref?: Ref<HTMLDivElement>;
}

const ContactUs = ({ id, ref }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: unknown) => {
    try {
      const response = await axios.post(
        "https://formspree.io/f/xgvkkvpg",
        data
      );
      if (response.status === 200) {
        alert("Message sent successfully!");
        reset(); // Reset the form after successful submission
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <div
      id={id ?? ""}
      ref={ref}
      className="bg-white text-center mt-10 py-8 md:py-14 px-4 md:px-10"
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4">
        Contact Responica Today!
      </h1>
      <p className="text-sm md:text-base text-gray-500 mb-2 md:mb-4">
        <EnvironmentOutlined /> USA | Newark, Delaware, United States
      </p>
      <p className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
        <PhoneOutlined /> Call us at:{" "}
        <a href="tel:+1-773-669-2604" className="hover:text-red-800">
          +1-773-669-2604
        </a>
      </p>
      <div className="max-w-7xl mt-10 md:mt-20 mx-auto flex flex-col md:flex-row gap-8 md:gap-0">
        <img
          src="/images/landingPage/mail.png"
          alt="mail"
          className="h-48 md:h-64 w-full md:flex-[0.5] object-contain"
        />
        <form
          className="w-full md:flex-[0.5]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full rounded-full py-2 px-4 border-gray-500 border"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {String(errors.name.message)}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full rounded-full py-2 px-4 border-gray-500 border"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {String(errors.email.message)}
              </p>
            )}
          </div>
          <div className="mb-4">
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full rounded-3xl py-2 px-4 border-gray-500 border"
              placeholder="Message"
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {String(errors.message.message)}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-red-800 text-white w-full rounded-full py-4 font-semibold text-sm"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
