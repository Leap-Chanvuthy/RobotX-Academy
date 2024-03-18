import { FaPhone } from "react-icons/fa6";
import { FaFacebookF , FaTwitter , FaLinkedinIn , FaInstagram } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer>
            <hr className="mt-10"/>
            <div className="mt-20 mx-0 lg:md:mx-32 px-4 ">
                <div className="grid grid-cols-1 lg:md:grid-cols-2 gap-5">
                    <h1 className="font-md text-3xl">RobotX Academy</h1>
                    <p className="lg:md:text-end text-lg w-full">Transforming your child's screen time into hands-on learning that sparks creativity, critical thinking, and problem-solving skills. At RobotX Academy, we don't just build robots or systems of AI, we empower future innovators.</p>
                </div>
                <hr className="my-10"/>
                <div className="flex flex-col lg:md:flex-row justify-between gap-8">
                    <div>
                        <p className="w-full lg:md:w-[500px]">Feel free to call us in working hours Mon - fri (8:00 - 16.00). Our team will be happy to help answer your queries</p>
                        <div className="flex items-center gap-3 mt-2">
                            <FaPhone/>
                            +855 (010) 341-1002
                        </div>
                        <div className="flex items-center gap-3 mt-2 text-white">
                            <div className="bg-black p-2">
                                <FaFacebookF/>
                            </div>
                            <div className="bg-black p-2">
                                <FaTwitter/>
                            </div>
                            <div className="bg-black p-2">
                                <FaLinkedinIn/>
                            </div>
                            <div className="bg-black p-2">
                                <FaInstagram/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-lg">Company</p>
                        <ul className="flex flex-col gap-4 mt-4">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Courses</li>
                            <li>Programs</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold text-lg">Courses</p>
                        <ul className="flex flex-col gap-4 mt-4">
                            <li>Basic Robotic</li>
                            <li>Robotics Explorers</li>
                            <li>Coding Adventures</li>
                            <li>Tech Builders</li>
                        </ul>
                    </div>
                    <div>
                        <p>Subscribe To Newsletter</p>
                        <input className="w-full h-10 mt-4 bg-gray-100 p-2" type="text" placeholder="Enter your email" />
                        <button className="bg-black  mt-4 font-bold p-4 w-full text-white">Subscribe </button>
                    </div>
                </div>
                <hr className="mt-10"/>
                <div className="flex flex-col lg:md:flex-row justify-between  gap-5 items-center my-10">
                    <p className="text-sm">Copyrigt © 2024 RobotX Academy</p>
                    <p className="text-sm">Terms of Use | Privay Policy</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;