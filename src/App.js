import menu from './images/icon-menu.svg'
import logo from './images/logo.svg'
import cart from './images/icon-cart.svg'
import avatar from './images/image-avatar.png'
import product1 from './images/image-product-1.jpg'
import product1t from './images/image-product-1-thumbnail.jpg'
import product2t from './images/image-product-2-thumbnail.jpg'
import product3t from './images/image-product-3-thumbnail.jpg'
import product4t from './images/image-product-4-thumbnail.jpg'
import product2 from './images/image-product-2.jpg'
import product3 from './images/image-product-3.jpg'
import product4 from './images/image-product-4.jpg'
import next from './images/icon-next.svg'
import previous from './images/icon-previous.svg'
import minus from './images/icon-minus.svg'
import plus from './images/icon-plus.svg'
import deletebtn from './images/icon-delete.svg'
import { useEffect, useState } from 'react'

function App() {
  const [shown, setShown] = useState(1)
  const [modal, setModal] = useState(0)
  const [item, setItem] = useState(0)
  const [carti, setCarti] = useState(false)
  const [cartitem, setCartitem] = useState(0)
  const [price, setPrice] = useState(0)
  const handleNext = () => {
    setShown(shown + 1)
    if (shown > 4) {
      setShown(1)
    }
  }
  const handlePrev = () => {
    setShown(shown - 1)
    if (shown < 1) {
      setShown(4)
    }
  }

  const openmodal = () => {
    setModal(1)
  }
  const handleCart = () => {
    setCarti(!carti)
  }

  const closemodal = () => {
    setModal(0)
  }

  const clickminus = () => {
    setItem(item - 1)
    setCarti(false)
    if (item <= 0) {
      setItem(0)
    }
  }

  const clickplus = () => {
    setItem(item + 1)
    setCarti(false)
  }

  const handlebtn = () => {
    if (item > 0) {
      setCartitem(1)
      handlePrice()
      setCarti(true)
    }
  }
  useEffect(() => {
    handlePrice()
  }, [item])

  const handlePrice = () => {
    let result = item * 125
    setPrice(result)
    return result
  }

  return (
    <>
      <div className='relative z-50'>
        {/* modal */}
        {modal === 1 ? (
          <div className='hidden md:block absolute top-0 left-0 right-0 bottom-0 '>
            {modal === 1 ? (
              <div className='bg-black bg-opacity-90 flex justify-center items-center min-h-screen py-4'>
                {/* image */}
                <div className=' flex flex-col justify-center max-w-lg mx-auto z-50   '>
                  <div className='relative'>
                    {shown === 1 ? (
                      <div className=' '>
                        <img
                          src={product1}
                          alt=''
                          className=' md:rounded-lg  w-full max-h-80  md:max-w-md bg-cover '
                          onClick={() => openmodal()}
                        />
                      </div>
                    ) : shown === 2 ? (
                      <div className=''>
                        <img
                          src={product2}
                          alt=''
                          className=' md:rounded-lg  w-full max-h-80  md:max-w-md bg-cover '
                          onClick={() => openmodal()}
                        />
                      </div>
                    ) : shown === 3 ? (
                      <div className=''>
                        <img
                          src={product3}
                          alt=''
                          className=' md:rounded-lg  w-full max-h-80  md:max-w-md bg-cover '
                          onClick={() => openmodal()}
                        />
                      </div>
                    ) : (
                      <div className=''>
                        <img
                          src={product4}
                          alt=''
                          className=' md:rounded-lg  w-full max-h-80  md:max-w-md bg-cover '
                          onClick={() => openmodal()}
                        />
                      </div>
                    )}

                    {/* control */}
                    <div className='flex justify-between items-center absolute left-0 top-1/2 right-0 px-4  '>
                      <div
                        className='bg-white w-8 h-8 rounded-full flex items-center shadow-lg px-1'
                        onClick={() => handlePrev()}
                      >
                        <img
                          src={previous}
                          alt=''
                          className='w-3   mx-auto  '
                        />
                      </div>
                      <div
                        className='bg-white w-8 h-8 px-1 rounded-full flex items-center shadow-lg '
                        onClick={() => handleNext()}
                      >
                        <img src={next} alt='' className=' mx-auto w-3  ' />
                      </div>
                    </div>
                    {/* closr */}
                    <div
                      className='absolute -top-4 -right-4'
                      onClick={() => closemodal()}
                    >
                      <svg
                        width='18'
                        height='20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                          fill='#ffffff'
                          fill-rule='evenodd'
                        />
                      </svg>
                    </div>
                  </div>

                  {/* tumbnail */}
                  <div className='hidden md:flex mt-6 justify-between gap-2 items-center  max-w-md  '>
                    {shown === 1 ? (
                      <img
                        src={product1t}
                        alt=''
                        className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner '
                      />
                    ) : (
                      <img
                        src={product1t}
                        alt=''
                        className=' rounded-md w-1/5 cursor-pointer'
                        onClick={() => setShown(1)}
                      />
                    )}
                    {shown === 2 ? (
                      <img
                        src={product2t}
                        alt=''
                        className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner  '
                      />
                    ) : (
                      <img
                        src={product2t}
                        alt=''
                        className=' rounded-md w-1/5 cursor-pointer '
                        onClick={() => setShown(2)}
                      />
                    )}
                    {shown === 3 ? (
                      <img
                        src={product3t}
                        alt=''
                        className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner '
                      />
                    ) : (
                      <img
                        src={product3t}
                        alt=''
                        className=' rounded-md w-1/5 cursor-pointer'
                        onClick={() => setShown(3)}
                      />
                    )}
                    {shown === 4 ? (
                      <img
                        src={product4t}
                        alt=''
                        className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner '
                      />
                    ) : (
                      <img
                        src={product4t}
                        alt=''
                        className=' rounded-md w-1/5 cursor-pointer '
                        onClick={() => setShown(4)}
                      />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
        {/* nav */}
        <div className=''>
          <nav>
            {/* mobile nav */}
            <div
              className='flex justify-between px-4 py-4 md:px-8 md:py-8 lg:px-20
      '
            >
              {/* loogo button */}
              <div className='flex items-center gap-4 md:gap-10 lg:gap-20'>
                <img src={menu} alt='' className='md:hidden' />
                <img src={logo} alt='' className='max-w-lg' />
                <div className='font-sans font-semibold hidden md:flex md:gap-6 md:items-center'>
                  <h1>Collection</h1>
                  <h1>Men</h1>
                  <h1>Women</h1>
                  <h1>About</h1>
                  <h1>Contact</h1>
                </div>
              </div>
              {/* avatar */}
              {modal === 1 ? (
                <div className='flex items-center gap-4 md:gap-10 -z-50'>
                  <div className='relative '>
                    <img
                      src={cart}
                      alt=''
                      className='cursor-pointer'
                      onClick={() => handleCart()}
                      on
                    />
                    {cartitem > 0 ? (
                      <div className='absolute -top-4 right-0'>
                        <h1 className='text-orangee font-bold font-sans'>1</h1>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>

                  <img src={avatar} alt='' className='w-10' />
                </div>
              ) : (
                <div className='flex items-center gap-4 md:gap-10'>
                  <div className='relative '>
                    <img
                      src={cart}
                      alt=''
                      className='cursor-pointer'
                      onClick={() => handleCart()}
                      on
                    />
                    {cartitem > 0 ? (
                      <div className='absolute -top-4 right-0'>
                        <h1 className='text-orangee font-bold font-sans'>1</h1>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>

                  <img src={avatar} alt='' className='w-10' />
                </div>
              )}
            </div>
          </nav>

          {/* product */}
          <section className='relative md:flex justify-center items-center md:px-8 md:py-8 lg:px-20 gap-4 '>
            {/* image */}
            {modal === 1 ? (
              <div className='relative md:max-w-sm  -z-50  md:w-1/2   '>
                {shown === 1 ? (
                  <div className=' '>
                    <img
                      src={product1}
                      alt=''
                      className=' md:rounded-lg  w-full max-h-64 md:max-h-full  md:max-w-xs bg-cover '
                      onClick={() => openmodal()}
                    />
                  </div>
                ) : shown === 2 ? (
                  <div className=''>
                    <img
                      src={product2}
                      alt=''
                      className='md:rounded-lg  w-full max-h-64 md:max-h-full  md:max-w-xs bg-cover'
                      onClick={() => openmodal()}
                    />
                  </div>
                ) : shown === 3 ? (
                  <div className=''>
                    <img
                      src={product3}
                      alt=''
                      className='md:rounded-lg  w-full max-h-64 md:max-h-full  md:max-w-xs bg-cover'
                      onClick={() => openmodal()}
                    />
                  </div>
                ) : (
                  <div className=''>
                    <img
                      src={product4}
                      alt=''
                      className='md:rounded-lg  w-full max-h-64 md:max-h-full  md:max-w-xs bg-cover'
                      onClick={() => openmodal()}
                    />
                  </div>
                )}
                {/* tumbnail */}
                <div className='hidden md:flex mt-6 justify-between gap-2 items-center  max-w-xs  '>
                  {shown === 1 ? (
                    <img
                      src={product1t}
                      alt=''
                      className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner '
                    />
                  ) : (
                    <img
                      src={product1t}
                      alt=''
                      className=' rounded-md w-1/5 cursor-pointer'
                      onClick={() => setShown(1)}
                    />
                  )}
                  {shown === 2 ? (
                    <img
                      src={product2t}
                      alt=''
                      className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner  '
                    />
                  ) : (
                    <img
                      src={product2t}
                      alt=''
                      className=' rounded-md w-1/5 cursor-pointer '
                      onClick={() => setShown(2)}
                    />
                  )}
                  {shown === 3 ? (
                    <img
                      src={product3t}
                      alt=''
                      className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner '
                    />
                  ) : (
                    <img
                      src={product3t}
                      alt=''
                      className=' rounded-md w-1/5 cursor-pointer'
                      onClick={() => setShown(3)}
                    />
                  )}
                  {shown === 4 ? (
                    <img
                      src={product4t}
                      alt=''
                      className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner '
                    />
                  ) : (
                    <img
                      src={product4t}
                      alt=''
                      className=' rounded-md w-1/5 cursor-pointer '
                      onClick={() => setShown(4)}
                    />
                  )}
                </div>

                {/* control */}
                <div className='flex justify-between items-center absolute left-0 top-1/2 right-0 px-4 md:hidden '>
                  <div
                    className='bg-white w-8 h-8 rounded-full flex items-center shadow-lg '
                    onClick={() => handlePrev()}
                  >
                    <img src={previous} alt='' className=' mx-auto  ' />
                  </div>
                  <div
                    className='bg-white w-8 h-8 rounded-full flex items-center shadow-lg '
                    onClick={() => handleNext()}
                  >
                    <img src={next} alt='' className=' mx-auto  ' />
                  </div>
                </div>
              </div>
            ) : (
              <div className='relative md:max-w-sm   md:w-1/2   '>
                {shown === 1 ? (
                  <div className=' '>
                    <img
                      src={product1}
                      alt=''
                      className=' md:rounded-lg  w-full max-h-64 md:max-h-full  md:max-w-xs bg-cover '
                      onClick={() => openmodal()}
                    />
                  </div>
                ) : shown === 2 ? (
                  <div className=''>
                    <img
                      src={product2}
                      alt=''
                      className='md:rounded-lg  w-full max-h-64 md:max-h-full  md:max-w-xs bg-cover'
                      onClick={() => openmodal()}
                    />
                  </div>
                ) : shown === 3 ? (
                  <div className=''>
                    <img
                      src={product3}
                      alt=''
                      className='md:rounded-lg  w-full max-h-64 md:max-h-full  md:max-w-xs bg-cover'
                      onClick={() => openmodal()}
                    />
                  </div>
                ) : (
                  <div className=''>
                    <img
                      src={product4}
                      alt=''
                      className='md:rounded-lg  w-full max-h-64 md:max-h-full  md:max-w-xs bg-cover'
                      onClick={() => openmodal()}
                    />
                  </div>
                )}
                {/* tumbnail */}
                <div className='hidden md:flex mt-6 justify-between gap-2 items-center  max-w-xs  '>
                  {shown === 1 ? (
                    <img
                      src={product1t}
                      alt=''
                      className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner '
                    />
                  ) : (
                    <img
                      src={product1t}
                      alt=''
                      className=' rounded-md w-1/5 cursor-pointer'
                      onClick={() => setShown(1)}
                    />
                  )}
                  {shown === 2 ? (
                    <img
                      src={product2t}
                      alt=''
                      className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner  '
                    />
                  ) : (
                    <img
                      src={product2t}
                      alt=''
                      className=' rounded-md w-1/5 cursor-pointer '
                      onClick={() => setShown(2)}
                    />
                  )}
                  {shown === 3 ? (
                    <img
                      src={product3t}
                      alt=''
                      className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner '
                    />
                  ) : (
                    <img
                      src={product3t}
                      alt=''
                      className=' rounded-md w-1/5 cursor-pointer'
                      onClick={() => setShown(3)}
                    />
                  )}
                  {shown === 4 ? (
                    <img
                      src={product4t}
                      alt=''
                      className=' rounded-md w-1/5 border border-orangee opacity-50 shadow-inner '
                    />
                  ) : (
                    <img
                      src={product4t}
                      alt=''
                      className=' rounded-md w-1/5 cursor-pointer '
                      onClick={() => setShown(4)}
                    />
                  )}
                </div>

                {/* control */}
                <div className='flex justify-between items-center absolute left-0 top-1/2 right-0 px-4 md:hidden '>
                  <div
                    className='bg-white w-8 h-8 rounded-full flex items-center shadow-lg '
                    onClick={() => handlePrev()}
                  >
                    <img src={previous} alt='' className=' mx-auto  ' />
                  </div>
                  <div
                    className='bg-white w-8 h-8 rounded-full flex items-center shadow-lg '
                    onClick={() => handleNext()}
                  >
                    <img src={next} alt='' className=' mx-auto  ' />
                  </div>
                </div>
              </div>
            )}
            {/* text */}
            {modal === 1 ? (
              <div className='font-sans px-4 py-4 space-y-4 max-w-sm md:max-w-sm mx-auto md:mx-0 md:w-1/2 -z-50 '>
                <h5 className='text-orangee font-semibold'>SNEAKER COMPANY</h5>
                <h1 className='font-bold text-3xl max-w-xs text-veryDarkblue'>
                  Fall Limited Edition Sneakers
                </h1>
                <p className='text-darkGrayishblue font-normal max-w-sm'>
                  These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they’ll
                  withstand everything the weather can offer.
                </p>
                {/* price */}
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-6'>
                    <h1 className='font-bold text-2xl'> $125.00 </h1>
                    <h5 className='text-orangee bg-paleOrange px-3 font-semibold rounded-sm'>
                      50%
                    </h5>
                  </div>
                  <div>
                    <h5 className='text-darkGrayishblue line-through font-bold'>
                      $250.00
                    </h5>
                  </div>
                </div>
                {/* buttons */}
                <div className='z-20 space-y-6 md:flex md:justify-between md:items-center md:space-y-0 gap-4 '>
                  {/* input */}
                  <div className='flex justify-between items-center bg-LightGrayishblue px-6 py-4 md:w-2/5 rounded-md  '>
                    <img src={minus} alt='' onClick={() => clickminus()} />
                    <h1 className='font-sans font-bold text-2xl'>{item}</h1>
                    <img src={plus} alt='' onClick={() => setItem(item + 1)} />
                  </div>
                  {/* check out */}
                  <div className='md:w-3/5'>
                    <button
                      className='flex justify-center items-center gap-2 mx-auto bg-orangee px-4 py-5 w-full rounded-md xl:gap-4 shadow-xl '
                      onClick={() => handlebtn()}
                    >
                      <svg
                        width='22'
                        height='20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                          fill='#ffffff'
                          fill-rule='nonzero'
                        />
                      </svg>
                      <h1 className='text-white font-sans font-semibold'>
                        Add to cart
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className='font-sans px-4 py-4 space-y-4 max-w-sm md:max-w-sm mx-auto md:mx-0 md:w-1/2  '>
                <h5 className='text-orangee font-semibold'>SNEAKER COMPANY</h5>
                <h1 className='font-bold text-3xl max-w-xs text-veryDarkblue'>
                  Fall Limited Edition Sneakers
                </h1>
                <p className='text-darkGrayishblue font-normal max-w-sm'>
                  These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they’ll
                  withstand everything the weather can offer.
                </p>
                {/* price */}
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-6'>
                    <h1 className='font-bold text-2xl'> $125.00 </h1>
                    <h5 className='text-orangee bg-paleOrange px-3 font-semibold rounded-sm'>
                      50%
                    </h5>
                  </div>
                  <div>
                    <h5 className='text-darkGrayishblue line-through font-bold'>
                      $250.00
                    </h5>
                  </div>
                </div>
                {/* buttons */}
                <div className='z-20 space-y-6 md:flex md:justify-between md:items-center md:space-y-0 gap-4 '>
                  {/* input */}
                  <div className='flex justify-between items-center bg-LightGrayishblue px-6 py-4 md:w-2/5 rounded-md  '>
                    <img src={minus} alt='' onClick={() => clickminus()} />
                    <h1 className='font-sans font-bold text-2xl'>{item}</h1>
                    <img src={plus} alt='' onClick={() => clickplus()} />
                  </div>
                  {/* check out */}
                  <div className='md:w-3/5'>
                    <button
                      className='flex justify-center items-center gap-2 mx-auto bg-orangee px-4 py-5 w-full rounded-md xl:gap-4 shadow-xl '
                      onClick={() => handlebtn()}
                    >
                      <svg
                        width='22'
                        height='20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                          fill='#ffffff'
                          fill-rule='nonzero'
                        />
                      </svg>
                      <h1 className='text-white font-sans font-semibold'>
                        Add to cart
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* cart */}
            {carti ? (
              <div className='bg-white font-sans py-4  absolute top-1  space-y-2 shadow-2xl px-2 max-w-4xl h-auto right-14 rounded-md  md:-top-1'>
                <h1 className='font-semibold text-xl mx-auto text-left px-6'>
                  Cart
                </h1>
                <div className='border-b'></div>

                {cartitem > 0 ? (
                  <div className='flex items-center gap-6 px-2'>
                    <img src={product1} alt='' className='w-16 rounded-md' />
                    <div className='font-sans'>
                      <h1 className='font-semibold'>Fall Limited Edition</h1>
                      <h1 className='font-medium'>
                        $125 <span className='text-orangee'> x </span> {item} =
                        <span className='font-bold text-orangee'>
                          {' '}
                          $ {price}
                        </span>
                      </h1>
                    </div>
                    <div onClick={() => setCartitem(0)}>
                      <img src={deletebtn} alt='' className='cursor-pointer' />
                    </div>
                  </div>
                ) : (
                  <h1 className='px-6 font-sans text-sm text-center py-8'>
                    No item in cart
                  </h1>
                )}
              </div>
            ) : (
              ''
            )}
          </section>
        </div>
      </div>
    </>
  )
}

export default App
