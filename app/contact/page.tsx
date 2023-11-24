import React from 'react'
import "@/styles/globals.css"
const Page = () => {
  return (
<div className='flex items-center justify-center'>
<div className=" w-full max-w-md  ">
  <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
  <form
    action="https://formspree.io/f/mwkdjqoq"
    method="POST"
    className="max-w-md  bg-white p-8 "
  >
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-800 ">
        Full Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full bg-gray-100 text-black"
        placeholder="Name"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-800 ">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full bg-gray-100 "
        placeholder="abc@example.com"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="message" className="block text-gray-800 ">
        Your Message
      </label>
      <textarea
        name="message"
        id="message"
        className="w-full bg-gray-100 
                    focus:border-blue-500 focus:ring-blue-200 "
        placeholder="Write your message here..."
        required
      />
    </div>
    <button
      type="submit"
      className=" w-full rounded-t-sm bg-blue-500 
                 p-3 hover:bg-blue-600 focus:outline-none"
    >
      Send Message
    </button>
  </form>
</div>
</div>
  )
}
export default Page;