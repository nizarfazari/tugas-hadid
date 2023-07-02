import React from 'react'
import useAxios from '~/hooks/useAxios'

export const Header = () => {
  const { response, isLoading, error } = useAxios({
    method: 'GET',
    url: '/static/data/menu.json'
  })
  const test ='adas'
  return (
    <>
    {{ test }}
    <div>
      <ul>
        <li className='text-[20px] font-semibold leading-[30px]'>Home</li>
      </ul>
    </div>
   </>
  )
}


