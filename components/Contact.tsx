import React from 'react'

const Contact = () => {
  return (
    <section id='more' className='h-screen flex flex-col justify-center items-center'>

        <div className='border-2 border-solid border-black'>
        <div >
        <h1 className='text-center text-red-500  font-bold text-2xl '> - Contact -</h1>
        </div>
        
        <input className='text-2xl  inline' type="text" placeholder='name' />
        
        <button className="text-neutral-100 font-semibold mr-4 rounded-md px-6 py-3 bg-lblue shadow-xl hover:bg-hlblue active:ring-2 active:ring-blue-500 active:ring-offset-2 active:ring-offset-blue-500 cursor-pointer">Submit</button>
        </div>
    </section>
  )
}

export default Contact