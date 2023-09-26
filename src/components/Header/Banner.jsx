import { useState } from "react";

const Banner = ({onCategorySeacrh}) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch =()=> {
        // console.log('hello world')
       onCategorySeacrh(searchText);
    }

    return (
        <div className="mt-4">
            <div className="hero min-h-[650px] rounded-lg" style={{ backgroundImage: 'url(public/d.banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-90 bg-white"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" flex flex-col">
                        <p className="text-2xl font-bold text-black">I Grow By Helping People In Need.</p>

                        <div className="md:flex py-6 mx-auto gap-4">
                        <input id="input-field" type="text" 
                        onChange={(e)=>setSearchText(e.target.value)} placeholder="Search here..." className="input  w-full max-w-xs text-black"/>
                           
                            <button onClick={handleSearch} className=" btn md:p-3 active:bg-slate-500 px-5  rounded-r-lg bg-[#FF444A]">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;