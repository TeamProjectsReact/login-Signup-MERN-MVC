import React from 'react'

const TextArea = () => {
  return (
    <div className='bg-gray-200 py-8 px-12 min-h-screen'>
        <div className="bg-white py-4 px-8 rounded shadow-md">
            <form>
                <div className="">
                    <label htmlFor="" className="">User Infor</label>
                    <textarea 
                        name=""
                        id=""
                        className='bg-gray-200 w-full my-2 rounded h-40'
                        style={{ resize: 'none' }}
                        >
                        
                    </textarea>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TextArea