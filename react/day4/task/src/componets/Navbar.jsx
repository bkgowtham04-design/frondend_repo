

const Navbar = () => {
  return (<>
     <div className="  ">
    <nav class="flex items-center justify-between bg-blue-600 p-4 text-white">
  
  
  <div class="text-2xl font-bold">MyLogo</div>


  <ul class="hidden md:flex gap-6">
    <li class="hover:text-gray-200 cursor-pointer">Home</li>
    <li class="hover:text-gray-200 cursor-pointer">About</li>
    <li class="hover:text-gray-200 cursor-pointer">Contact</li>
  </ul>

</nav>
    
   </div>
  </>)
}

export default Navbar