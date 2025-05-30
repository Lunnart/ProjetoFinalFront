import React from 'react'
import { Link } from 'react-router-dom'
import seta from '../assets/seta.png'

const Section = ({title="Coleções em destaque", textLeft, children, link}) => {
  return (
    <section className='p-[5%] bg-[#F9F8FE] pt-[38px]'>
         <div className={` ${link && 'flex justify-between'}  items-center`}>
         <h1 className={`${textLeft? 'text-left': 'text-center'} font-bold text-2xl text-dark-gray-2 mb-5`}>{title}</h1>
        {link && <Link className='text-primary'>Ver todos <img className='inline' src={seta} alt="seta link"/></Link>}
        </div>
        {children}
    </section>

  )
}

export default Section