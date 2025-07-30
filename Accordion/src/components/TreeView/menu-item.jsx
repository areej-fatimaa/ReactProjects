import React from 'react'
import MenuList from './menu-list'
import './styles.css'
import {FaMinus,FaPlus} from 'react-icons/fa'

function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = React.useState(false);
    function handleToogleChildren(label) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [label]: !displayCurrentChildren[label]
        })
    }
  return (
    <li >
        <div className='menu-item-container' style={{ display: 'flex' ,gap: '20px'}}>
            <p>{item.label}</p>
            {
                item.children && item.children.length > 0 ? (
                    <span onClick={() => handleToogleChildren(item.label)}>
                        {displayCurrentChildren[item.label] ? <FaMinus color='#fff' size={25} /> : <FaPlus color='#fff' size={25} />}
                    </span>
                ) : null
            }
        </div>
        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
                <MenuList list={item.children} />
            ) : null}
    </li>
  )
}

export default MenuItem