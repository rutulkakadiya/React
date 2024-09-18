import React, { useState } from 'react'

export default function Form() {

  const [sellerName, setSellerName] = useState("");
  const [sellerCompanyName, setSellerCompanyName] = useState("");
  const [sellerNumber, setSellerNumber] = useState("");


  const [sellerNameErr, setSellerNameErr] = useState("");
  const [sellerCompanyNameErr, setSellerCompanyNameErr] = useState("");
  const [sellerNumberErr, setSellerNumberErr] = useState("");

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");


  const [productNameErr, setProductNameErr] = useState("");
  const [productPriceErr, setProductPriceErr] = useState("");

  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (!sellerName) {
      setSellerNameErr("*Name required");
    }
    else {
      setSellerNameErr("")
    }

    if (!sellerCompanyName) {
      setSellerCompanyNameErr("*Company name rquired")
    }
    else {
      setSellerCompanyNameErr("")
    }

    if (!sellerNumber) {
      setSellerNumberErr("*Mobile number required")
    }
    else {
      setSellerNumberErr("")
    }

    if (sellerName && sellerCompanyName && sellerNumber) {
      alert("Seller submitted successfully...");
    }

  }


  const handleSubmit2 = (e) => {
    e.preventDefault()
    if (!productName || !productPrice) {
      if (!productName) {
        setProductNameErr("*Product`s Name required")
      }
      else {
        setProductNameErr("")
      }
      if (!productPrice) {
        setProductPriceErr("*Product`s Price required")
      }
      else {
        setProductPriceErr("")
      }
    }

    if (productName && productPrice) {
      alert("Form submitted successfully...");
    }

  }

  return (

    <div>
      <div className="div1 flex justify-center items-center">
        <div className="form1 h-auto w-[30%] bg-white rounded-[15px] flex justify-center items-center">

          <form className='w-[80%] my-5' action="">
            <p className='text-center font-bold text-2xl'>Seller`s Details</p>

            <center>

              <input type="text" className='mt-3' placeholder='Enter Seller`s Name' value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
              <p className='err1'>{sellerNameErr}</p>
              <input type="text" className='mt-3' placeholder='Enter Seller`s Company Name' value={sellerCompanyName} onChange={(e) => setSellerCompanyName(e.target.value)} />
              <p className='err1'>{sellerCompanyNameErr}</p>
              <input type="number" className='mt-3' placeholder='Enter Seller`s Mobile Number' value={sellerNumber} onChange={(e) => setSellerNumber(e.target.value)} />
              <p className='err1'>{sellerNumberErr}</p>
              <br />

              <button type='button' className='btn1 h-[45px] w-[100%] bg-green-900 text-white rounded-[5px]' onClick={handleSubmit}>Submit</button>
              <br /><br />
              <a href="#div20">
                <button type='button' className='h-[45px] w-[100%] bg-blue-700 text-white rounded-[5px]'>Click to slide</button>
              </a>
            </center>
          </form>
        </div>
      </div>

      <div id="div20" className="div2 h-[100vh] flex justify-center items-center flex-wrap">
        <div className="form1 h-auto w-[30%] bg-white rounded-[15px] flex justify-center items-center">

          <form className='w-[80%] my-5' action="">
            <p className='text-center font-bold text-2xl'>Product`s Details</p>

            <br />
            <label htmlFor="" className='text-left'>Choose Image for product:</label>
            <input type="file" className='mt-2' />

            <input type="text" className='mt-5' placeholder='Enter Product`s Name' value={productName} onChange={(e) => setProductName(e.target.value)} />
            <p className='err1'>{productNameErr}</p>

            <input type="text" className='mt-5' placeholder='Enter Product`s Price' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
            <p className='err1'>{productPriceErr}</p>

            <select name="" id="" className='mt-5' value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Category</option>
              <option value="electronics">Electronics</option>
              <option value="vehicles">Vehicle</option>
              <option value="clothing">Clothing</option>
              <option value="grocery">Grocery</option>
              <option value="books">Books</option>
            </select>

            {
              category == "electronics" && <input type="text" className='mt-3' placeholder='Enter Warranty Details' />
            }
            {
              category == "electronics" && <input type="text" className='mt-3' placeholder='Enter Guarantee Details' />
            }
            {
              category == "electronics" && <input type="text" className='mt-3' placeholder='Enter Model Name' />
            }

            {/* vehicles */}
            {
              category == "vehicles" && <input type="text" className='mt-3' placeholder='Enter Vehicle Average KM' />
            }
            {
              category == "vehicles" && <input type="text" className='mt-3' placeholder='Enter Warranty Details' />
            }
            {
              category == "vehicles" && <input type="text" className='mt-3' placeholder='Enter Insurance Details' />
            }

            {/* clothing */}
            {
              category == "clothing" && <input type="text" className='mt-3' placeholder='Enter Brand Name' />
            }
            {
              category == "clothing" && <input type="text" className='mt-3' placeholder='Enter Discount Amount' />
            }
            {
              category == "clothing" && <input type="text" className='mt-3' placeholder='Enter Size (S , M , L , XL , XXL , 3XL)' />
            }

            {/* grocery */}
            {
              category == "grocery" && <input type="text" className='mt-3' placeholder='Enter Expiry Date' />
            }
            {
              category == "grocery" && <input type="text" className='mt-3' placeholder='Enter Ingredient Details' />
            }
            {
              category == "grocery" && <input type="text" className='mt-3' placeholder='Enter Quantity' />
            }

            {/* books */}
            {
              category == "books" && <input type="text" className='mt-3' placeholder='Enter Author Name' />
            }
            {
              category == "books" && <input type="text" className='mt-3' placeholder='Enter Subject Name' />
            }
            {
              category == "books" && <input type="text" className='mt-3' placeholder='Enter Publisher Details' />
            }

            <br /><br />
            <button className='btn1 h-[45px] w-[100%] bg-green-900 text-white rounded-[5px]' onClick={(e) => handleSubmit2(e)}>Submit</button>


          </form>
        </div>


      </div>

    </div>
  )
}
