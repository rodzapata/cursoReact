import { useState } from "react"

export const Menu = () => {
    //let cont=1;
    const [cont, setCont] = useState(0)
    const [mytext, setMytext]= useState("")


    const hadlenInputNombre=(e )=>{
        console.log(e.target.value)
        setMytext(e.target.value)
    };

    return (
    <>
    <h1>Menu principal</h1>
    <h2>numero {cont}</h2>
    <input type="text"  placeholder={mytext} name="" id="txtNombre" value={mytext} onChange={hadlenInputNombre} />
    <button >click here</button>
    </>
  )
}
