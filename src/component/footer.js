import React from 'react';
import Select from 'react-select';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaPaypal, FaCcVisa, FaCcMastercard, FaCcStripe } from 'react-icons/fa';

const customSingleValue = ({ data }) => (
  <div className="flex items-center">
    {data.icon && (
      <img src={data.icon} alt="" className="w-4 h-4 rounded-full mr-1" />
    )}
    <span className="text-sm">{data.label}</span>
  </div>
);

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: '30px',
    height: '30px',
    fontSize: '12px'
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '30px',
    padding: '0 6px'
  }),
  input: (provided) => ({
    ...provided,
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '30px',
  }),
};

const options = [
  { value: 'eng', label: 'ENG', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png' },
  { value: 'fra', label: 'FRA', icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/125px-Flag_of_France.svg.png' },
];

function Footer() {

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 mb-4 sm:mb-6 md:mb-[1%] h-[1000px]">
      <footer className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 mb-4 sm:mb-6 md:mb-[1%] h-52">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">
              SWOO - 1ST NYC TECH ONLINE MARKET
            </h3>
            <p className="text-gray-700 mb-2 text-1xl font-semibold">HOTLINE 24/7</p>
            <p className="text-green-500 mb-4 text-4xl font-bold">(025) 3686 25 16</p>
            <p className="text-gray-700 mb-4">
              257 Thatcher Road St, Brooklyn, Manhattan,   <br /> NY 10092
              <br />
              <a href="mailto:contact@Swootechmart.com" className="text-black">
                contact@Swootechmart.com
              </a>
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://twitter.com" className="text-2xl bg-gray-200 p-2 rounded-full"><FaTwitter /></a>
              <a href="https://facebook.com" className="text-2xl bg-gray-200 p-2 rounded-full"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-2xl bg-gray-200 p-2 rounded-full"><FaInstagram /></a>
              <a href="https://youtube.com" className="text-2xl bg-gray-200 p-2 rounded-full"><FaYoutube /></a>
              <a href="https://pinterest.com" className="text-2xl bg-gray-200 p-2 rounded-full"><FaPinterest /></a>
            </div>
            <div className="flex space-x-4">
              <div className="ml-0 md:ml-4 mt-2 md:mt-0">
                <select className="border border-gray-300 p-1 rounded text-sm">
                  <option>USD</option>
                </select>
              </div>
              <div className="ml-0 md:ml-4 mt-2 md:mt-0 w-20 h-8">
                <Select
                  styles={customStyles}
                  options={options}
                  components={{ SingleValue: customSingleValue }}
                  defaultValue={options[0]}
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-black ">TOP CATEGORIES</h3>
            <ul>
              <button className="block mt-2">Laptops</button>
              <button className="block mt-1">PC & Computers</button>
              <button className="block mt-1">Cell Phones</button>
              <button className="block mt-1">Tablets</button>
              <button className="block mt-1">Gaming & VR</button>
              <button className="block mt-1">Networks</button>
              <button className="block mt-1">Cameras</button>
              <button className="block mt-1">Sounds</button>
              <button className="block mt-1">Office</button>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-black">COMPANY</h3>
            <ul>
              <button className="block">About Swoo</button>
              <button className="block">Contact</button>
              <button className="block">Career</button>
              <button className="block">Blog</button>
              <button className="block">Sitemap</button>
              <button className="block">Store Locations</button>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-black">HELP CENTER</h3>
            <ul>
              <button className="block">Customer Service</button>
              <button className="block">Policy</button>
              <button className="block">Terms & Conditions</button>
              <button className="block">Track Order</button>
              <button className="block">FAQs</button>
              <button className="block">My Account</button>
              <button className="block">Product Support</button>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-black">PARTNER</h3>
            <ul>
              <button className="block">Become Seller</button>
              <button className="block">Affiliate</button>
              <button className="block">Advertise</button>
              <button className="block">Partnership</button>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-10 text-center block ml-5">
          <p className="font-bold">SUBSCRIBE & GET <span className="text-red-600">10%</span> OFF FOR YOUR FIRST ORDER</p>
          <div className="flex justify-center mt-4 ml-[18%] ">
            <div className="w-1/2 flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-[200%] px-4   rounded-l-md"
              />
              <button className=" text-green-600 px-4 py-2 rounded-r-md">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <hr className="ml-[37.5%] border-t-2 border-gray-300  mt-[1%]" />
          <p className="text-sm text-gray-600 mt-2 ml-[-7%] ">
            By subscribing, you're accepted the our <a href="#" className="text-black underline">Policy</a>
          </p>
        </div>
        <div className="mt-[5%] flex justify-between items-center border-t border-gray-300 pt-4">
          <p className="text-gray-700 text-sm mr-5">&copy; 2024 Shawonetc3. All Rights Reserved</p>
          <div className="flex space-x-4 items-center mr-[40%] text-3xl text-gray-600">
            <FaPaypal className="hover:text-blue-600" />
            <FaCcVisa className="hover:text-blue-800" />
            <FaCcMastercard className="hover:text-red-600" />
            <FaCcStripe className="hover:text-blue-500" />
          </div>
        </div>
      </footer></div>
  );
}

export default Footer;
