import React from 'react';

function Story() {
  return (
    <>
      <h2 className="text-2xl font-bold mt-2 ml-4 rounded-md">TOP CELL PHONES & TABLETS</h2>
      <div className="flex flex-col bg-white">
        <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 mt-1">
          <div className="relative flex p-4 rounded-[13px] w-full md:w-[60%] h-[300px] md:h-[500px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/ef02/d1db/263e787dceaa0e3d8c30e163080b0d2b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mofsdKToKr9SeP5Np2RMzRnwfu7QzsmUAKtCL-7-pRNBUWqD8I2LbIhNphkUScnGGukmtj1rxjBSFWc8zDXXjAokydKqTxFHs3llGPKzsACWUJ7hR08fPvx7BiJTFN6FTznOnNyGciU8iCqbZAZ8ewf3Zr6qU04gCLcBv6RSwIO~~ydaGfXf1zOsvIixFGw4QI2VeTZYXxoSgceKU7q6PlyQwjY1nTWyjqk0BF25GEJkB9KHVyLYf4Wjp8M3UJ~mJBPJ-HG~n7SNKDk8z7oCTPllvA8tp3z0t2SaH8-EO10bVZiDOsYwQJA5C~uMnU0ZuVdQ5g5LNX-eLJEY-FrZeg__"
              alt="Noise Cancelling Headphone"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute text-white p-4">
              <div className="text-left ml-7 mt-10 text-3xl md:text-4xl">
                <h1 className="font-bold">Noise Cancelling</h1>
                <h1 className="font-thin ml-1">Headphone</h1>
              </div>
              <p className="text-gray-200 text-sm md:text-xl mt-7 ml-11">
                Boso Over-Ear Headphone<br />WiFi, Voice Assistant,<br />Low Latency Game Mode
              </p>
              <button className="bg-white border border-gray-300 text-gray-700 mt-4 md:mt-40 px-4 py-2 rounded-full hover:bg-gray-200 ml-7 font-bold w-[120px] h-[40px]">
                BUY NOW
              </button>
            </div>
            <div className="absolute bottom-0 right-0 mb-7 mr-7">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 w-[120px] h-[40px] flex justify-between items-center mb-8 mr-5">
                <span className="flex flex-col items-center text-xs">
                  {'prv'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
                <span className='font-bold'>3 / 3</span>
                <span className="flex flex-col items-center text-xs">
                  {'nxt'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
              </button>
            </div>
          </div>
          <div className="relative flex bg-white p-4 rounded-lg w-full md:w-[40%] h-[300px] md:h-[500px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/8c32/60e6/8f2363e9e7dcabb1fbce5816640c968f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d5SACbu4-g4esC5CeqrFeZLTIYE8xoWGmNmMJ8mfalX20FtCaO3nK2ySmAvIQqg7sbh1CCiEEQGl2fz4lIDglzNVDgIeJ6e6fXWjVtp~8nYQm57DsliKsbukSdv3~FsNlt4L6Tt8v5y41I9B3Qej8Ozu-W9FuwhTnMEowL4siF6YLc045J9NNmQ-En~KO1BCIEFSBkTIn2r5CGouhIdAU7JvNK4fSCr20OM~lVxb2PpVVEfkc5uWDfnsNNPI7mhyvs1yOHLZpm4w8XijY62MlAdJo~snLMuyGh-3MrznSe3CIZVIxvNWKJP-Sue3Ky4EpTwP618OYhMTDy9RQeq31g__"
              alt="redmi note 12 Pro+ 5g"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute left-[10%] text-black p-4">
              <div className='flex flex-col md:flex-row mt-4'>
                <h1 className="text-xl md:text-3xl font-bold">redmi note 12<br /> Pro+ 5g</h1>
                <button className="bg-black text-white px-4 rounded-md hover:bg-gray-800 md:ml-40 h-12 mt-4 md:mt-9">
                  SHOP NOW
                </button>
              </div>
              <p className="text-black text-sm md:text-xl mt-4">Rise to the challenge</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
