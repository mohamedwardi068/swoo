import React from 'react';
import Select from 'react-select';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

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
        <footer className="bg-white p-8 mt-[10%]">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
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
            <div className="flex space-x-4 items-center mr-[40%]">
              <img src="https://s3-alpha-sig.figma.com/img/4f88/470e/f7ca7089c358161cd638255e61147b79?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ncD2C0krWcRvQKyAfUMydojPRmv66qRs9s6uszqFIfqW~yxDqu74ZVcGVRgfsvywl7mHG4T5dS4ZfGDTpNqnqjQzZ199LXioo7O6z7HKq5xi~Z7yqqa4POYN0-bj7gGWSR0EaqwK89IAcXgDmXGWaMlUxzTYYDEXJolxArQVv0LlnKlx-GRO1DQGeInU-xwzKHq1p1CanV0wz4DsFAwlikj~qh8SsmL2tnAYt067EQwVfvi0K909B6UuVMKGGl6X9t6x8x0S6w9tKSdvU70x1mAO1xme28FZEFu-DJcfvgfSupBvN5g8pzSG6QmgzV6GF0y79pTCuKbODPCgIXlx3Q__" alt="PayPal" className="w-5 h-auto"/>
              <img src="https://s3-alpha-sig.figma.com/img/5b9d/40ec/dd1b5c0980dfc3ae57c167489f831783?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YrMqfExmHdFYdtxZRvLQZT08VCpmqvxKkF96X71qsQC-xmRVT1e6X9UQI18yhx5Kw8D-IaM1-xYwWeJHITfYpyR-4ZnY0t2hkYjdNZxmZbID9OHI~MUeyxL0fGO9mYW6AE~RLOP5Q53yCHV49-5Hcq-y7JW-dPG0LzHOZHtD2rcZ4ex3vVaMMSPAa9vFBe-QbSAzEsmmPScUoN81HiYLCikBoH9MXNIwV0k2c4ygj1Ixr2a50qPbnNCuixU8J8feh00zL3LuwAYR~7O2h-mrlxLmiJwAEcbIverHfWeZEN45SKhIbNwRkPyueyFP74hbyh2GOydOxKdeBFGN58B4fg__" alt="MasterCard" className="w-10 h-auto"/>
              <img src="https://s3-alpha-sig.figma.com/img/647c/cd9e/ac28cd11f9fb6cd49c52dea670811cb9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MEpd5q8uW8b~pMym6RQmdnjSe9ajBn-X7BeJ3M42HIsnxyyTeEdyB4ChlR0ifU-1CjRcNZ2iXnP6qjm0irW~XX9BA6KLxyyjxyFdcxqdkXAFeUtbhT-ndvydg2QNYbD9z0sU1RlVXwRCgxKmq8QUyvHDxEyIXn69UdTP-IQyLQkHUGxDaaQXFfkE6qqDVzvMxgIuM9RHKLOKGQ6FPFOIj3zeAGuhT6kcngQvtg3sBrKxVwyVuHwMcq0QHqjzom0uRmKH33aUcQKzS~BlTzXDs5HI~66aYYD7EZwPkQw4QdZJ1kcoAi-ahmN~VYeAK0jse5V1Yxd3pC21dW-BYMhBDw__" alt="Visa" className="w-10 h-auto"/>
              <img src="https://s3-alpha-sig.figma.com/img/6bd6/f9a9/a1d8c62348529d351a6bbed14866b496?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yzdqw08HESm4hdcfsY4eUBwPsMrOURDZ9pOaxNIBbiXS4jRXCqG0lPwsfF8y-2My6eoBCKsAJju5leFoGNozSTjzs~ZFLxDECxjiqUITqjWoP33ErqbHRLbLGvX98fw12GNIuS7FetvnQi9jYiokOm9RI4I1h6X3xwfOzL8b2VhEXcKVdwQADZEeUBfuAbQ2d1Fxjs607ozAwsGNtu1mrzkKKi6Yz8cnQfoMhvpus7~cumDE10B9w1Nnf2uoUVAHmr6xrGkLuKiZ1TJfI0FH5jU43u-2VVuylZkxD~W~LEsZJ13OUSnDWgJyG5RyUmSO0Ekob~NjFPZsYzu19Zje8w__" alt="Stripe" className="w-10 h-auto"/>
              <img src="https://s3-alpha-sig.figma.com/img/3b5e/4d88/66baeaa152d51cf08f5031769fbf6263?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhWA2ekI-0VrJ1yBhVFdocRGOJyPQhCkDFEy2269GdgTV2-6FY4~Yw6EeOg-22K4eRWIge05YA811p5-j--LnjiYt1S9MqDHXIaLinYXbb1bz1sZt7momO3f6KjbL7iw0zM4-bRm92ktXuQq66Ffp4b-SrQ08gxtWGKHW4xy1Uivf0Y1ec8zhZ3~v-Peg~v7oDX9Toe8qo96M0xaJcyUnjle4SkVcV4suFYzOgXx5isyjgfvjze06ljeVHJMH4beISg0vOtwdS22un5eKBpM0gs8JiSrtd6yVTxYnPPast7RndwtDUmFsUalSFRLZAPi37irCGd3W9F99diyLW8oHA__" alt="Klarna" className="w-10 h-auto"/>
            </div>
          </div>
        </footer>
    );
}

export default Footer;
