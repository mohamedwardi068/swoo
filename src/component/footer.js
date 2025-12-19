import React from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaPaypal, FaCcVisa, FaCcMastercard, FaCcStripe } from 'react-icons/fa';
import { useApi } from '../context/apicontext';

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
  const Navigate = useNavigate();
  const { category } = useApi();

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 mb-4 sm:mb-6 md:mb-[1%] h-[1000px]">
      <footer className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 mb-4 sm:mb-6 md:mb-[1%]">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 text-center sm:text-left">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              SWOO - 1ST NYC TECH ONLINE MARKET
            </h3>
            <p className="text-gray-700 mb-2 text-lg font-semibold">HOTLINE 24/7</p>
            <p className="text-green-500 mb-4 text-3xl sm:text-4xl font-bold break-all sm:break-normal">(025) 3686 25 16</p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              257 Thatcher Road St, Brooklyn, Manhattan,   <br /> NY 10092
              <br />
              <a href="mailto:contact@Swootechmart.com" className="text-black hover:text-green-500 transition-colors">
                contact@Swootechmart.com
              </a>
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 mb-4">
              <a href="https://twitter.com" className="text-xl sm:text-2xl bg-gray-100 hover:bg-green-100 hover:text-green-500 p-2 rounded-full transition-colors"><FaTwitter /></a>
              <a href="https://facebook.com" className="text-xl sm:text-2xl bg-gray-100 hover:bg-green-100 hover:text-green-500 p-2 rounded-full transition-colors"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-xl sm:text-2xl bg-gray-100 hover:bg-green-100 hover:text-green-500 p-2 rounded-full transition-colors"><FaInstagram /></a>
              <a href="https://youtube.com" className="text-xl sm:text-2xl bg-gray-100 hover:bg-green-100 hover:text-green-500 p-2 rounded-full transition-colors"><FaYoutube /></a>
              <a href="https://pinterest.com" className="text-xl sm:text-2xl bg-gray-100 hover:bg-green-100 hover:text-green-500 p-2 rounded-full transition-colors"><FaPinterest /></a>
            </div>
            {/* Currency and Language Selectors */}
            <div className="flex justify-center sm:justify-start space-x-4">
              <div>
                <select className="border border-gray-300 p-1 rounded text-sm focus:border-green-500 focus:outline-none">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </div>
              <div className="w-24">
                <Select
                  styles={customStyles}
                  options={options}
                  components={{ SingleValue: customSingleValue }}
                  defaultValue={options[0]}
                  isSearchable={false}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-extrabold text-black mb-4">TOP CATEGORIES</h3>
            <ul className="space-y-2">
              {category && category.length > 0 ? (
                category.slice(0, 7).map((cat) => (
                  <button
                    key={cat._id}
                    onClick={() => Navigate(`/category/${cat._id}`)}
                    className="block hover:text-green-600 transition-colors text-sm sm:text-base"
                  >
                    {cat.name}
                  </button>
                ))
              ) : (
                <span className="text-gray-500 text-sm">Loading...</span>
              )}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-extrabold text-black mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><button onClick={() => Navigate('/about')} className="hover:text-green-600 transition-colors">About Swoo</button></li>
              <li><button onClick={() => Navigate('/contact')} className="hover:text-green-600 transition-colors">Contact</button></li>
              <li><button onClick={() => Navigate('/career')} className="hover:text-green-600 transition-colors">Career</button></li>
              <li><button onClick={() => Navigate('/blog')} className="hover:text-green-600 transition-colors">Blog</button></li>
              <li><button onClick={() => Navigate('/sitemap')} className="hover:text-green-600 transition-colors">Sitemap</button></li>
              <li><button onClick={() => Navigate('/stores')} className="hover:text-green-600 transition-colors">Store Locations</button></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-extrabold text-black mb-4">HELP CENTER</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><button onClick={() => Navigate('/help')} className="hover:text-green-600 transition-colors">Customer Service</button></li>
              <li><button onClick={() => Navigate('/policy')} className="hover:text-green-600 transition-colors">Policy</button></li>
              <li><button onClick={() => Navigate('/terms')} className="hover:text-green-600 transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => Navigate('/track-order')} className="hover:text-green-600 transition-colors">Track Order</button></li>
              <li><button onClick={() => Navigate('/faq')} className="hover:text-green-600 transition-colors">FAQs</button></li>
              <li><button onClick={() => Navigate('/profile')} className="hover:text-green-600 transition-colors">My Account</button></li>
              <li><button onClick={() => Navigate('/support')} className="hover:text-green-600 transition-colors">Product Support</button></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-extrabold text-black mb-4">PARTNER</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><button onClick={() => Navigate('/partner')} className="hover:text-green-600 transition-colors">Become Seller</button></li>
              <li><button onClick={() => Navigate('/affiliate')} className="hover:text-green-600 transition-colors">Affiliate</button></li>
              <li><button onClick={() => Navigate('/advertise')} className="hover:text-green-600 transition-colors">Advertise</button></li>
              <li><button onClick={() => Navigate('/partnership')} className="hover:text-green-600 transition-colors">Partnership</button></li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="container mx-auto mt-12 sm:mt-16 text-center max-w-4xl px-4">
          <p className="font-bold text-lg sm:text-xl mb-6">
            SUBSCRIBE & GET <span className="text-red-500">10%</span> OFF FOR YOUR FIRST ORDER
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 border border-gray-300 rounded-lg sm:rounded-r-none focus:outline-none focus:border-green-500 flex-grow"
            />
            <button className="bg-green-500 text-white font-bold px-8 py-3 rounded-lg sm:rounded-l-none hover:bg-green-600 transition-colors">
              SUBSCRIBE
            </button>
          </div>
          <div className="border-t border-gray-200 mt-8 mb-6 mx-auto w-full max-w-2xl"></div>
          <p className="text-sm text-gray-500">
            By subscribing, you accept our <a href="#" className="text-black underline hover:text-green-500">Policy</a>
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-300 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">&copy; 2024 Swoo. All Rights Reserved.</p>
          <div className="flex space-x-4 text-2xl text-gray-400">
            <FaPaypal className="hover:text-[#003087] transition-colors" />
            <FaCcVisa className="hover:text-[#1A1F71] transition-colors" />
            <FaCcMastercard className="hover:text-[#EB001B] transition-colors" />
            <FaCcStripe className="hover:text-[#008CDD] transition-colors" />
          </div>
        </div>
      </footer></div>
  );
}

export default Footer;
