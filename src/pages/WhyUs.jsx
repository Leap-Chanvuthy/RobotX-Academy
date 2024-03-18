import { FaArrowRightLong } from "react-icons/fa6";


const WhyUs = () => {
    return ( 
        <div  className="mt-32 mx-10 flex flex-col lg:md:flex-row justify-center gap-[100px]  ">
           <div className="bg-white">
               <div className=" grid grid-cols-1 lg:md:grid-cols-2 gap-5 justify-items-center">
                    <img className="w-[240px] h-[250px] object-cover" src="/activities/activity_1.jpg" alt="" />
                    <img className="w-[240px] h-[250px] object-cover" src="/activities/activity_2.jpg" alt="" />
                    <img className="w-[240px] h-[250px] object-cover" src="/activities/activity_3.jpg" alt="" />
                    <img className="w-[240px] h-[250px] object-cover" src="/activities/activity_4.jpg" alt="" />
               </div>
               <hr className="my-5"/>
               <div className="flex justify-center items-center gap-3 m-5">
                    <h5 className="bg-secondary px-5 py-3 text-sm font-medium text-white">Explore Worldwide Tutors</h5>
                    <FaArrowRightLong className="hidden lg:flex"/>
               </div>
           </div>
           <div className="flex flex-col gap-5">
                <p className="font-semibold uppercase text-secondary">Why Choose Us ?</p>
                <h5 className="text-4xl font-bold w-full lg:md:w-[70%] ">Why RobotX is the Perfect Choice </h5>
                <p className="w-full lg:md:w-[570px]">RobotX Academy's supportive environment makes it a strong educator for anyone interested in exploring robotics and STEAM education in Cambodia.</p>
                <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-3">
                        <FaArrowRightLong className="text-white bg-primary w-8 h-8 p-2 rounded-full"/>
                        <p className="font-bold">Child-Centric Approach</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <FaArrowRightLong className="text-white bg-primary w-8 h-8 p-2 rounded-full"/>
                        <p className="font-bold">Hands-On Learning</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <FaArrowRightLong className="text-white bg-primary w-8 h-8 p-2 rounded-full"/>
                        <p className="font-bold">Club Sharing Development</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <FaArrowRightLong className="text-white bg-primary w-8 h-8 p-2 rounded-full"/>
                        <p className="font-bold">Experienced Educators</p>
                    </li>
                </ul>
                <hr />
                <p>Enroll Your Child in an Exciting Robotic Journey Today!</p>
                <button className="bg-primary text-white w-full lg:md:w-[30%] py-3">Enroll Now !</button>
           </div>
        </div>
     );
}
 
export default WhyUs;