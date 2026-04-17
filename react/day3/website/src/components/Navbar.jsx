import image from '../assets/react.svg'




const Navbar = () =>{



    return(


        <>


        <div className="web" >


             <div>

            
                <img src={image} alt="" />


                </div>
            

           
     <div className="child">

                <a href="">Home</a> |

                <a href="">About us</a> |

                <a href="">Support</a> |


                <a href="">Contact</a> 
            </div>
        </div>


        </>



    )




}


export default Navbar