import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {

    const [openNavbar , setOpenNavbar] = useState(true);
    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    }
    console.log(openNavbar);

    return ( 
        <nav >
            <div className=" mx-10 hidden lg:md:block">
                <div className="flex justify-center items-center h-[50px] gap-3 text-center">
                    <p className="text-sm font-light text-gray-400">| Component | Education | 3D printing | PCB Services | CNC Cutting Services |</p>
                    <img className="w-[55px] h-[30px] hidden lg:md:block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png"/>
                </div>
                <div className="flex justify-between items-center">
                    <img className="w-[70px] h-[70px]" src="/logo/Robot-X.jpg" />
                    <ul className="flex justify-center items-center gap-4 font-bold">
                        <li>Home</li>
                        <li>Maker Store</li>
                        <li>Our School</li>
                        <li>Programs</li>
                        <li>Courses</li>
                        <li>About Us</li>
                        <li>News</li>
                        <li>Contact Us</li>
                    </ul>
                    <div className="flex justify-center items-center gap-3">
                        <div className="bg-black w-[50px] h-[50px] flex justify-center items-center">
                            <FiPhoneCall className="text-white"/>
                        </div>
                        <div>
                            <p className="text-xs">Need Help ?</p>
                            <h4 className="font-bold text-md">Call Us!</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* visible in small screen */}

            <div className="lg:hidden">
                <div className="flex justify-between items-center  my-4 mx-3">
                    <img src="/logo/Robot-X.jpg" className="w-[60px] h-[60px]" />
                    <GiHamburgerMenu className="text-3xl cursor-pointer" onClick={toggleNavbar}/>
                </div>
                <div className={`bg-black text-white h-[85vh] py-4 grid pl-6 ${openNavbar? 'hidden' : 'block'} `}>
                    <div className="flex  items-center gap-3">
                        <div className="bg-white w-[50px] h-[50px] flex justify-center items-center">
                            <FiPhoneCall className="text-black w-[20px]"/>
                        </div>
                        <div>
                            <p className="text-xs">Need Help ?</p>
                            <h4 className="font-bold text-md">Call Us!</h4>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-6 font-medium">
                        <li>Home</li>
                        <li>Maker Store</li>
                        <li>Our School</li>
                        <li>Programs</li>
                        <li>Courses</li>
                        <li>About Us</li>
                        <li>News</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>


        </nav>
     );
}
 
export default NavBar;