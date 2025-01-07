import React, { useState } from 'react';

export default function Home() {
    const [category, setCategory] = useState("all");
    const [description, setDescription] = useState("");

    const arr = [
        { brand: "samsung", description: "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)", image: "/public/-original-imahfu766ybd5h4z.jpeg" , price : "₹1,24,999/-", deletePrice : "1,35,999/-" },
        { brand: "samsung", description: "SAMSUNG Galaxy S24+ 5G (Onyx Black, 256 GB)", image: "/public/-original-imah4zp8pf2uehv4.jpeg" , price : "₹74,999/-", deletePrice : "79,999/-"  },
        { brand: "samsung", description: "SAMSUNG Galaxy S23 FE 5G (Mint, 256 GB)", image: "/public/-original-imah5ywfebrs9bfg.jpeg" , price : "₹35,999/-", deletePrice : "39,999/-"  },
        { brand: "samsung", description: "SAMSUNG Galaxy S23 5G (Green, 256 GB)", image: "/public/-original-imah4zp8tfzndmmh.jpeg" , price : "₹40,999/-", deletePrice : "45,999/-"  },
        { brand: "apple", description: "Apple iPhone 15 Pro Max (Titanium White, 512 GB)", image: "/public/-original-imagtc3h9h6kpbkc.jpeg" , price : "₹1,44,999/-", deletePrice : "1,35,999/-"  },
        { brand: "apple", description: "Apple iPhone 14 (Starlight, 512 GB)", image: "/public/-original-imaghx9qkugtbfrn.webp" , price : "₹59,999/-", deletePrice : "65,999/-"  },
        { brand: "apple", description: "Apple iPhone 13 (Green, 128 GB)", image: "/public/-original-imagtc2qzgnnuhxh.webp" , price : "₹45,999/-", deletePrice : "50,999/-"  },
        { brand: "apple", description: "Apple iPhone 15 (Green, 256 GB)", image: "/public/-original-imagtc5fqyz8tu4c.webp" , price : "₹69,999/-", deletePrice : "75,999/-"  },
        { brand: "redmi", description: "Redmi Note 13 Pro+ 5G (Fusion Black, 256 GB)", image: "/public/-original-imagwubk2ky9v2gz.webp" , price : "₹17,999/-", deletePrice : "20,999/-"  },
        { brand: "redmi", description: "Redmi 13c 5G (Starlight Black, 128 GB)", image: "/public/13c-5g-redmi-13c-5g-redmi-original-imagw6s7zfhb4syx.webp" , price : "₹12,999/-", deletePrice : "15,999/-"  },
        { brand: "redmi", description: "Redmi Note 13 Pro 5G (Midnight Black, 128 GB)", image: "/public/-original-imagwu89jy5ems28.webp" , price : "₹21,999/-", deletePrice : "25,999/-"  },
        { brand: "redmi", description: "Redmi 12 5G (Pastel Blue, 128 GB)", image: "/public/-original-imags37h4prxjazz.webp" , price : "₹7,999/-", deletePrice : "9,999/-"  },
        { brand: "poco", description: "Poco X6 5G (Snowstorm White, 128 GB)", image: "/public/-original-imah4mdg83jmzzm4.webp" , price : "₹17,999/-", deletePrice : "21,999/-"  },
        { brand: "poco", description: "Poco X5 Pro 5G (Horizon Blue, 128 GB)", image: "/public/-original-imagmkjfjwtzhaag.webp" , price : "₹20,999/-", deletePrice : "23,999/-"  },
        { brand: "poco", description: "Poco F5 5G (Carbon Black, 128 GB)", image: "/public/f5-5g-mzb0e7lin-poco-original-imagpep3w5zmcdcd.webp" , price : "₹35,999/-", deletePrice : "40,999/-"  },
        { brand: "poco", description: "Poco F4 5G (Nebula Green, 128 GB)", image: "/public/-original-imagfhuebkbnnfgj.webp" , price : "₹45,999/-", deletePrice : "50,999/-"  },
        { brand: "vivo", description: "Vivo V40 Pro 5G (Gangus Blue, 128 GB)", image: "/public/-original-imah3hvby9rhhh4w.webp" , price : "₹75,999/-", deletePrice : "79,999/-"  },
        { brand: "vivo", description: "Vivo X90 Pro 5G (Legendary Black, 128 GB)", image: "/public/x90-pro-v2219-vivo-original-imagzzrqg2zbjfas.webp" , price : "₹65,999/-", deletePrice : "70,999/-"  },
        { brand: "vivo", description: "Vivo X Fold3 Pro (Celestial Black, 128 GB)", image: "/public/x-fold3-pro-v2330-vivo-original-imahffy4ztpuhtad.webp" , price : "₹80,999/-", deletePrice : "85,999/-"  },
        { brand: "vivo", description: "Vivo X80 Pro (Gangus Blue, 128 GB)", image: "/public/x80-pro-v2145-vivo-original-imah3r48qf7ctnpj.webp" , price : "₹35,999/-", deletePrice : "40,999/-"  },
    ];

    const data = arr.filter((item) => item.description.toLowerCase().includes(description.toLowerCase()));

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search product"
                    className="border border-gray-400 p-2 w-full mb-4 rounded-md"
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select
                    name="category"
                    className="border border-gray-400 p-2 w-full rounded-md"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="all">All Brands</option>
                    <option value="samsung">Samsung</option>
                    <option value="apple">Apple</option>
                    <option value="redmi">Redmi</option>
                    <option value="poco">Poco</option>
                    <option value="vivo">Vivo</option>
                </select>
            </div>

            <div className="item_container mt-5">
                {data.map((e, i) => {
                    if (category === "all" || category === e.brand) {
                        return (
                            <div key={i} className="item_div border border-gray-300 shadow-lg p-4 rounded-lg">
                                <img className="object-cover mb-4 rounded-md" src={e.image} alt={e.description} />

                                <div className="txt">
                                    <p className="font-semibold text-gray-700">{e.description}</p>
                                    <p className="text-lg text-[#ff9f00] mt-2">
                                        {e.price} <del className="text-gray-500">{e.deletePrice}</del> 
                                        <b className="text-[#3b8c3c] ml-2">9% off</b>
                                    </p>

                                    <ul className="list-disc pl-4 mt-2 text-sm text-gray-600">
                                        <li>12 GB RAM | 256 ROM</li>
                                        <li>17.27 cm (6.8 inch) Quad HD+ Display</li>
                                        <li>200MP + 50MP + 12MP + 10MP | 12MP Front Camera</li>
                                        <li>5000 mAh Battery</li>
                                        <li>Snapdragon 8 Gen 3 Processor</li>
                                        <li>1 Year Manufacturer Warranty</li>
                                    </ul>

                                    <button className="bg-[#ff9f00] hover:bg-[#ff8f00] text-white py-2 px-4 rounded-lg w-full mt-4">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
