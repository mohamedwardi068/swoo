import React from 'react';

function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">READY TO WORK WITH US</h2>
      <p className="mb-8 text-gray-500">Contact us for all your questions and opinions</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="first-name" className="font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="last-name" className="font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last-name"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="font-medium">
              Phone Number <span className='text-gray-400'>(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="font-medium">
              Country / Region <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              className="border border-gray-300 p-2 rounded-md"
              required
            >
              <option value="United States (US)">United States (US)</option>
              <option value="United Kingdom (UK)">United Kingdom (UK)</option>
             
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="font-medium">
              Subject <span className='text-gray-400'>(Optional)</span>
            </label>
            <input
              type="text"
              id="subject"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Note about your order, e.g. special note for delivery "
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="news"
              className="mr-2"
            />
            <label htmlFor="news" className="font-medium text-sm">
              I want to receive news and updates once in a while. By submitting, I'm agreed to the <a href="#" className="text-green-500">Terms & Conditions</a>
            </label>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md w-full md:w-auto"
          >
            SEND MESSAGE
          </button>
        </form>
        <div className='rouded-full'>
        <div  className="p-4  bg-gray-100 rounded-md w-[524.16px] h-[380px] ">
            
          <div className="p-4   ">
            <h3 className="font-bold mb-2 text-gray-400">UNITED STATES (HEAD QUARTER)</h3>
            <p>152 Thatcher Road St, Mahattan, 10463, US</p>
            <p>(+025) 3886 25 16</p>
            <p><a href="mailto:hello@swatechmart.com" className="text-green-500 font-semibold">hello@swatechmart.com</a></p>
          </div>
          <div className="p-4   ">
            <h3 className="font-bold mb-2 text-gray-400">UNITED KINGDOM (BRANCH)</h3>
            <p>12 Buckingham Rd, Thornthwaite, HG3 4TY, UK</p>
            <p>(+718) 895-5350</p>
            <p><a href="mailto:contact@swatechmart.co.uk" className="text-green-500 font-semibold">contact@swatechmart.co.uk</a></p>
          </div>
          <div >
          <div className="flex space-x-4  ml-8 mt- ">
            <a href="#" className="text-gray-500 w-10 h-10 bg-white rounded-full text-center justify-center text-xl"><i className="fab fa-facebook-f mt-2"></i></a>
            <a href="#" className="text-gray-500 w-10 h-10 bg-white rounded-full text-center justify-center text-xl"><i className="fab fa-twitter mt-2"></i></a>
            <a href="#" className="text-gray-500 w-10 h-10 bg-white rounded-full text-center justify-center text-xl"><i className="fab fa-instagram mt-2"></i></a>
            <a href="#" className="text-gray-500 w-10 h-10 bg-white rounded-full text-center justify-center text-xl"><i className="fab fa-youtube mt-2"></i></a>
            <a href="#" className="text-gray-500 w-10 h-10 bg-white rounded-full text-center justify-center text-xl"><i className="fab fa-pinterest mt-2"></i></a>
          </div></div></div>
          <div className="mt-3 w-[524.16px] h-[380px] ">
        <img
          src="https://s3-alpha-sig.figma.com/img/0e95/48e9/e6eb90d824e0f474838d5c16868a730a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NBhv5AkDqkFiYummIMwWhD5CCrLkFKx31AuuhFBj0E1ds7R~FCzZoClyYyFPWfnuwd24KYKHDMOeQEuaydtuKjecd2fkFxYObv3X-49nFmkZaNu67j0RzeusRV~uwEzV9YFC5uNzkdue1ulOyb4DvmDDM3DRZFdSGOVjjALjGKqRHufHG5~kOWSW68fAvkp0aB7KLVIO6CMXuIGDngdQd~PodOz59OwnNhb-PAgG4Wn4w3IpwvuKWS6NBEatTFrG8famz93V~ghmHhrGyjkwqzldkWTReJvYmqAxqriGABFTbWA398MTRjK629k7YFJaXzX~d9sLS79dVKmA4nGpMw__"
          alt="Laptop"
          className="w-full rounded-md"
        />
      </div>
        </div>
        
      </div>
      <div className=''>
        <h1 className='font-bold text-xl'>FIND US ON GOOGLE MAP </h1>
        <img
        src={""}
        className='h-[90%]'
        />
        
        

      </div>

      
    </div>
  );
}

export default Contact;