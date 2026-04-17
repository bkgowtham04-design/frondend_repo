const Nullundifined = () =>{

const data = "null"


const name  = "gowtham"


const sports  = "cricket"


const movies  = ""


const course = "fullstack"



return(<>

<h2>{data?? "this is null"}</h2>


<h2>{name?? "this is null"}</h2>



<h2>{sports?? "this is null"}</h2>



<h2>{movies?? "this is null"}</h2>

<h2>{course?? "this is null"}</h2>










</>)
}


export default Nullundifined