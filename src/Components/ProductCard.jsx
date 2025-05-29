import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({img,produto,categoria,preco, precoDisconto}) => {
  return (
    <>
      <Link to='/produto/1'>
      <li className='p-2'>
          <div className='bg-[#fdfdfd] h-[321px] w-[292px] flex items-center justify-center rounded-sm '>
              <img src={img} alt={produto} />
          </div>
          <div className=''>
              <h2 className="text-xs mt-[18px]">{categoria}</h2>
              <h2 className='text-2xl'>{produto}</h2>
              <span className="text-2xl line-through">${preco}</span> <span className="text-2xl font-bold">${precoDisconto}</span>
          </div>
      </li>
      </Link>
    </>
  )
}

export default ProductCard