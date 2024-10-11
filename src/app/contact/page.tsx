import { Text, Title } from "@/components/atoms";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[1440px] mx-auto w-full px-6 py-16 lg:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          {/* Text Copy Column */}
          <Title type="h1" className="text-[34px] font-semibold">
            Contact Us
          </Title>
          <Text variant="paragraph">
            We would love to hear from you! Please fill out the form below, and
            we will get back to you as soon as possible.
          </Text>
          <div className="flex items-center">
            <Text variant="paragraph" className="font-semibold">
              Email:{" "}
              <a href="mailto:aloha@lifedna.com" className="text-[#41c752]">
                aloha@lifedna.com
              </a>
            </Text>
          </div>
          <div className="flex items-center">
            <Text variant="paragraph" className="font-semibold">
              Phone:{" "}
              <a href="tel:18775433362" className="text-[#41c752]">
                1-877-LIFEDNA (543-3362)
              </a>
            </Text>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          {/* Form Column */}
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border border-gray-300 p-2 rounded"
            placeholder="Your Name"
          />

          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-gray-300 p-2 rounded"
            placeholder="Your Email"
          />

          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="border border-gray-300 p-2 rounded"
            placeholder="Your Message"
            rows={5}
          />

          <button type="submit" className="bg-[#41c752] text-white p-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
