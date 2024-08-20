import React from 'react'

const Header = ({title, subtitle} : { title: string, subtitle?: string }) => {
  return (
    <>
        <h2 className='h3-bold text-gray-700 mt-2'>{ title }</h2>
        { subtitle && 
            <p className='p-16-regular mt-2'>
                {subtitle}
            </p> 
        }
    </>
  )
}

export default Header