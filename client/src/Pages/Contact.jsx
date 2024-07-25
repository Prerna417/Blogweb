import React from 'react'

export default function Contact() {
  React.useEffect(() => {
    // Disable body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable body scroll on cleanup
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full flex justify-center items-center h-full relative">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://gdcindia.co.in/wp-content/uploads/2019/03/contact-us-background.jpg')]">
        </div>
        <div className="p-8 mt-10 flex flex-col justify-center items-center  relative z-10 ">
          <h1 className="text-5xl font-semibold mb-8">Contact US</h1>
          <div>
            <div className='flex mb-6 space-x-8'>
              <div className='flex flex-col w-1/2'>
              <label htmlFor="email" className='mr-3 outline-none text-xl font-semibold'>email:</label>
              <input type="email" id="email" className='mr-8 bg-transparent border-b-2 border-white placeholder-white' placeholder='Enter valid email address' />
              </div>
              <div className='flex flex-col w-1/2'>
                <label htmlFor="name" className='mr-3 outline-none text-xl font-semibold'>name:</label>
              <input type="name" id="name" placeholder='enter your name' className='bg-transparent border-b-2 border-white placeholder-white' />
              </div>
            </div>
            <label for="address" className='text-lg font-semibold'>Address</label>
            <input type="text" id="address" className='outline-none w-full bg-transparent border-b-2 border-white placeholder-white' placeholder='Enter your address'></input>
            <label for="message" className='text-lg font-semibold'>Message</label>
            <textarea id="message" className='w-full bg-transparent border-b-2 border-white focus:outline-none placeholder-white h-24' placeholder='Enter your message'></textarea>
            <style jsx>{`
      input::placeholder, textarea::placeholder {
        color: #9ca3af; /* Tailwind's gray-400 color */
        font-size: 1rem; /* Placeholder font size */
      }
    `}</style>
          </div>
          <button className='py-4 px-8 mt-4 rounded-md txet-lg bg-orange-300 '>submit</button>
        </div>

      </div>
    </div>
  );
}
