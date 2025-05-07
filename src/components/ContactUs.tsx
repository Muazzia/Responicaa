import {
  PhoneOutlined,
  EnvironmentOutlined,
  LoadingOutlined,
} from "@ant-design/icons"; // Import a new spinner icon
import { Alert } from "antd"; // Import Ant Design Alert
import { useForm } from "react-hook-form";
import { Ref, useState } from "react";

interface Props {
  id?: string;
  ref?: Ref<HTMLDivElement>;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs = ({ id, ref }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null); // State for alert

  // const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   setAlert(null);

  //   const formData = new FormData(event.currentTarget);
  //   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

  //   try {
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       setAlert({ type: "success", message: "Form Submitted Successfully" });
  //       event.currentTarget.reset();
  //     } else {
  //       console.error("Error:", data);
  //       setAlert({ type: "error", message: data.message });
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     setAlert({
  //       type: "error",
  //       message: "Failed to submit the form. Please try again.",
  //     }); // Show error alert
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onSubmit = async (_: FormData, event?: React.BaseSyntheticEvent) => {
    if (!event) return;
    setLoading(true);
    setAlert(null);

    const formData = new FormData(event.target); // use event.target to get the form
    formData.append("access_key", "0951b36a-d08b-4391-93cf-878cbdd75a3c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setAlert({ type: "success", message: "Form Submitted Successfully" });
        event.target.reset();
      } else {
        console.error("Error:", result);
        setAlert({ type: "error", message: result.message });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert({
        type: "error",
        message: "Failed to submit the form. Please try again.",
      });
    } finally {
      setLoading(false);
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
      {alert && (
        <div className="mb-4">
          <Alert
            message={alert.message}
            type={alert.type}
            showIcon
            closable
            onClose={() => setAlert(null)} // Close alert
          />
        </div>
      )}
      <p className="text-sm md:text-base text-gray-500 mb-2 md:mb-4">
        <EnvironmentOutlined /> 1001 S MAIN ST STE 500 KALISPELL, MT 59901
      </p>
      <p className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
        <PhoneOutlined /> Call us at:{" "}
        <a href="tel:+1-773-669-2604" className="hover:text-[#004aad]">
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
              <p className="text-red-700 text-sm mt-1 text-left">
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
              <p className="text-red-700 text-sm mt-1 text-left">
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
              <p className="text-red-700 text-sm mt-1 text-left">
                {String(errors.message.message)}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#004aad] !text-white w-full rounded-full py-4 font-semibold text-sm flex items-center justify-center cursor-pointer"
            disabled={loading}
          >
            {loading ? (
              <LoadingOutlined className="!text-white" spin /> // New spinner
            ) : (
              "SEND MESSAGE"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
