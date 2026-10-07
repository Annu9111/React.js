import Random from "./Random";
function Hello(){
    let myname ="Annu";

    let fullName=()=>{
        return "Annu Soni"
    }
    return(
        <>
        <h3>hello {myname} {fullName()} this is hello component from Hello.jsx</h3>
        <Random></Random>
        </>
    )

    
}

export default Hello