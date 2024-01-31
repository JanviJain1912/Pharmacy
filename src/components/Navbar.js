import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    // passing the prop attribute filterItem which is used for filtering the category
    // passing the prop attribute menuList which is used for repeatedly use the navbar button
  return (
    <>
        <nav className='navbar'>
            <div className='btn-group'>
                {menuList.map((curElem)=>{
                    return(
                        <button className='btn-group__item' onClick={ ()=> filterItem(curElem)}>{curElem}</button>
                    )
                })}
                
            </div>
       </nav>
    </>
  )
}

export default Navbar
