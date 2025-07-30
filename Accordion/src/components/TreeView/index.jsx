import React from 'react'
import MenuList from './menu-list'

function TreeView({menus= []}) {
  return (
   <div className="tree-view">
     {
        <MenuList list={menus} />
     }
   </div>
  )
}

export default TreeView