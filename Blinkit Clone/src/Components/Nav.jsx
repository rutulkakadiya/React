import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <div className="div1 h-[81vh] w-[100%] overflow-scroll">
                <Link to={"/"}>
                    <div className="category flex flex-col lg:flex-row items-category items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category1.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Milk</p></div>
                    </div>
                </Link>

                <Link to={"/bread"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category2.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Bread & Pav</p></div>
                    </div>
                </Link>

                <Link to={"/flakes"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category3.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Flakes & Kids Cereals</p></div>
                    </div>
                </Link>

                <Link to={"/muesli"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category4.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Muesli & Granola</p></div>
                    </div>
                </Link>

                <Link to={"/oats"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category5.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Oats</p></div>
                    </div>
                </Link>

                <Link to={"/panner"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category6.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Paneer & Tofu</p></div>
                    </div>
                </Link>

                <Link to={"/curd"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category7.jpg" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Curd & Yogurt</p></div>
                    </div>
                </Link>

                <Link to={"/butter"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category8.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Butter & More</p></div>
                    </div>
                </Link>

                <Link to={"/cheese"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category9.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Cheese</p></div>
                    </div>
                </Link>

                <Link to={"/cream"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category10.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Cream & Whitener</p></div>
                    </div>
                </Link>

                <Link to={"/condensed"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category11.jpg" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Condensed Milk</p></div>
                    </div>
                </Link>

                <Link to={"/vermicelli"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category12.jpg" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Vermicelli</p></div>
                    </div>
                </Link>

                <Link to={"/poha"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category13.jpg" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Poha, Daliya & Other Grains</p></div>
                    </div>
                </Link>

                <Link to={"/peanut"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category14.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Peanut Butter</p></div>
                    </div>
                </Link>

                <Link to={"/energy"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category15.png" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Energy Bars</p></div>
                    </div>
                </Link>

                <Link to={"/lassi"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category16.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Lassi, Shakes & More</p></div>
                    </div>
                </Link>

                <Link to={"/breakfast"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category17.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Breakfast Mixes</p></div>
                    </div>
                </Link>

                <Link to={"/honey"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category18.webp" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Honey & Chyawanprash</p></div>
                    </div>
                </Link>

                <Link to={"/batter"}>
                    <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                        <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category19.jpg" alt="" /></div>
                        <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Batter</p></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
