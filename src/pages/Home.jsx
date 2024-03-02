import { IoLogoYoutube } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";





const Home = () => {
    return ( 
        <div className=" mt-10 grid sm:grid-cols-2 grid-cols-1 mx-10 justify-items-center gap-6">
            {/* hero */}
            <div className=" flex flex-col gap-10 py-4 ">
                <p className="text-secondary uppercase font-bold">Robotx Academy - Robotic Course for Kids</p>
                <h1 className="text-4xl  font-bold">Where Learning Meets Fun and Innovation</h1>
                <p className=" font-light"> Programs help students learn how to think logically, solve problems, and come up with creative solutions.</p>
                <div className="flex flex-col lg:md:flex-row gap-8 items-center">
                    <button className="bg-primary font-bold text-sm text-white px-10 py-3">Visit Our MakerDot io</button>
                    <button className="font-bold text-secondary border-b-2 border-secondary">Buy Now</button>
                </div>
                <p className="mt-10 text-sm">EXPLORE OUR FEATURED BRANDS AND COLLABORATIVE PARTNERSHIPS</p>
                <div className="flex flex-col lg:md:flex-row items-center gap-4">
                    <img src="/logo/factory-io.png" className="w-[150px]" />
                    <img src="/logo/IMG_4800.jpg" className="w-[100px]" />
                    <img src="/logo/kleang-moeung-1.png" className="w-[200px] h-[30px]" />
                </div>
            </div>

            {/* Image */}
            <div className=" flex flex-col lg:md:flex-row gap-6">
                {/* left side */}
                <div className="flex flex-col gap-6">
                    <div className="w-[229px] bg-info flex flex-col gap-6 p-10">
                      <IoLogoYoutube className="text-4xl"/>
                      <h3 className="font-bold">How it Works</h3>
                      <p>Egestas leo dui convallis non nisl sit consectetur. Leo egestas mollis.</p>
                    </div>

                    {/* robot car */}
                    <img className="w-[229px] h-[353px] object-cover" src="https://hips.hearstapps.com/hmg-prod/images/ziggy-1657030826.jpeg?crop=0.420xw:1.00xh;0.224xw,0&resize=640:*"  />
                    <div className="w-[229px] bg-gray-200 flex flex-col justify-center gap-2 p-5">
                        <h3 className="font-bold text-xl text-start">30K +</h3>
                        <p>Happy Students</p>
                    </div>
                </div>
                {/* right side */}
                <div className="flex flex-row flex-col gap-6">
                    <div className="w-[229px] h-[125px] bg-black flex flex-col items-center justify-center">
                        <div className="flex justify-center gap-2">
                            <h3 className="text-white font-bold text-xl">4.8</h3>
                            <FaStar className="text-yellow-500 text-xl" />  
                        </div>
                        <p className="text-white text-center">High-Rated</p>
                    </div>
                    {/* image */}
                    <img className="w-[229px] h-[353px] object-cover" src="https://hips.hearstapps.com/hmg-prod/images/ziggy-1657030826.jpeg?crop=0.420xw:1.00xh;0.224xw,0&resize=640:*"  />
                    <div className="bg-success w-[229px] h-[296px] py-2">
                        <div className="flex justify-center items-center mb-3 gap-2 text-xl font-bold">
                            <TbWorld/>
                            <p>Languages</p>
                        </div>
                        <div className="flex flex-col gap-5 mx-6">
                            <p>Khmer</p>
                            <hr />
                            <p>English</p>
                            <hr />
                            <p>Chinese</p>
                            <hr />
                            <p className="bg-secondary text-center py-2 text-white font-bold text-lg">30+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Home;