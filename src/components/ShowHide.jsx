import React, { useState } from 'react';

function ShowHide() {

    //estado
    const [show, setShow] = useState(true);
    //evento de click
    const handleClick = (event) =>{
    //renderizado condicional
        setShow(!show)
    }

  return <div>
    {show && <h2>Hide me!</h2>}
<button onClick={handleClick}> Hide text  </button>
  </div>
  
}

export default ShowHide;