// import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    // const [show, handleShow] = useState(false)

    // useEffect(() => {
    //     window.addEventListener("scroll",() => {
    //         if(window.scrollY > 100){
    //             handleShow(true)
    //         } else handleShow(false)
    //     })
    //     return () => {
    //         window.removeEventListener("scroll")
    //     }
    // }, [])

  return (
    <div className='nav'>

        <img className='nav_logo'
        src="https://o.remove.bg/downloads/81fb4618-b886-4192-a0fd-eca2e98ede58/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_1028x578.v1582751026-removebg-preview.png" 
        alt="Netflix Logo"
         />

         <img className='nav_avatar'
         src="https://i.pinimg.com/564x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg"
          alt="Netflix Logo" 
          />

    </div>
  )
}

export default Nav