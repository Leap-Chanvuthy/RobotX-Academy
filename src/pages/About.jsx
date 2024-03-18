import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


const About = () => {
    const data = [
        {
            id : 1,
            name : 'RobotX Academy',
            image : "/xlogo/X.png",
            description : "Think Like an Engineer, Build Like a Pro, RobotX Academy Shows You How!",
            contact : 'https://example.com'
            
        },
        {
            id : 2,
            name : "RobotX Acdemy SR",
            image : "/xlogo/sr-x.png",
            description : "Empowering Kids to Change the World, One Robot at a Time.",
            contact : 'https://example.com'
        },
        {
            id : 3,
            name : 'RobotX Academy BTB',
            image : '/xlogo/btb-x.png',
            description : ' Problem-Solving, and Future Dreams with RobotX.',
            contact : 'https://example.com'
        },
        {
            id : 4,
            name : 'RobotX Academy SVR',
            image : '/xlogo/svr-x.png',
            description : 'Think Inside the Code, Build Outside the Box: It is RobotX!',
            contact : 'https://example.com'
        },
        {
            id : 5,
            name : 'RobotX Academy PV',
            image : '/xlogo/pv-x.png',
            description : ' Where the Future of Robotics Begins.',
            contact : 'https://example.com'
        }, 
        {
            id : 6,
            name : 'RobotX Academy BMC',
            image : '/xlogo/bmc-x.png',
            description : 'Design, Code, Conquer with RobotX Academy.' ,
            contact : 'https://example.com'
        }
    ];

    const [academy , setAcademy] = useState(data);
    console.log(academy);

    return ( 
        <div className="mx-10 mt-[50px] ">
            <h2 className="uppercase text-sm font-bold text-secondary">About RobotX Academy</h2>
            <h1 className="text-3xl font-bold mt-2">Empowering Young Minds through Robotic Education</h1>            
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6  justify-items-center mt-10">
                {academy && academy.map((a) => (
                    <div key={a.id}>
                    <hr className="my-10" />
                        <div className="flex flex-col lg:md:flex-row justify-start items-start gap-7 ">
                            <img src={a.image} className="w-[92px] h-[92px]" />
                            <div>
                                <h5 className="text-secondary font-bold text-lg">{a.name}</h5>
                                <p>{a.description}</p>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center gap-2 font-bold">
                            <p>Contact Us</p>
                            <FaLongArrowAltRight className="text-secondary"/>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="mt-10"/>
            <div>
                <div className="flex flex-col lg:md:flex-row justify-between items-center gap-10 mt-10">
                    <div className="w-full text-white flex justify-center lg:md:justify-start ">
                        <h5 className="flex justify-center items-center text-md font-medium text-center w-[182px] h-[59px] bg-black ">More About Us</h5>
                    </div>
                    <p className="text-center">RobotX Academy ignites a passion for robotics and STEM in children aged 8–58. Using playful learning with exciting programs like IoT, Plug-N-Play robots, and coding, they nurture curiosity, problem-solving, and teamwork skills.</p>
                </div>
                <img className="w-full h-[361px] object-cover mt-10" src="https://guitartpartners.com/wp-content/uploads/2023/04/inside.story_.5.6.articleImage.png" alt="" />
            </div>
        </div>
     );
}
 
export default About;