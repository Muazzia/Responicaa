import { Form, Input, Button } from "antd";
import { PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

const ContactUs = () => {
  return (
    <div className="bg-white text-center py-8 md:py-14 px-4">
      <h1 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4">
        Contact Nexcel Solutions Today!
      </h1>
      <p className="text-sm md:text-base text-gray-500 mb-2 md:mb-4">
        <EnvironmentOutlined /> USA | Newark, Delaware, United States
      </p>
      <p className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
        <PhoneOutlined /> Call us at:{" "}
        <a href="tel:1-302-797-8888" className="hover:text-red-800">
          1-302-797-8888
        </a>
      </p>
      <div className="max-w-7xl mt-10 md:mt-20 mx-auto flex flex-col md:flex-row gap-8 md:gap-0">
        <img
          src="/images/landingPage/mail.png"
          alt="mail"
          className="h-48 md:h-64 w-full md:flex-[0.5] object-contain"
        />
        <Form
          className="w-full md:flex-[0.5]"
          layout="vertical"
          onFinish={(values) => console.log("Form Submitted:", values)}
        >
          <Form.Item
            className="!mb-2"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input
              className="!rounded-full !py-2 !px-4 !border-gray-500"
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            className="!mb-2"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              placeholder="Email"
              className="!rounded-full !py-2 !px-4 !border-gray-500"
            />
          </Form.Item>
          <Form.Item
            className="!mb-2"
            name="message"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <Input.TextArea
              className="!rounded-3xl !py-2 !px-4 !border-gray-500"
              placeholder="Message"
              rows={4}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="!bg-red-800 text-white w-full !rounded-full !py-4 md:!py-6 !font-semibold text-sm"
            >
              SEND MESSAGE
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;