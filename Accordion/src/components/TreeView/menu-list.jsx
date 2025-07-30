import React from 'react'
import MenuItem from './menu-item'
import './styles.css'

function MenuList({list=[]}) {
  return (
   <ul className="menu-list-container">
    {list && list.length ? (
      list.map((item) => <MenuItem item={item} />)
    ) : null}
   </ul>
  )
}

export default MenuList