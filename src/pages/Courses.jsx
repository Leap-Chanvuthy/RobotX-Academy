import { useState } from "react";
import { FaStar } from "react-icons/fa";
const Courses = () => {
    const curriculums = [
        {
            id : 1,
            course_name : 'Basic Robotics',
            age : 'Age 16-58',
            session_hour : '45 Hr 40 Mins',
            price : 149.99,
            rated : '5.0 (2k Reviews)',
            image_url : "https://5.imimg.com/data5/SELLER/Default/2023/12/369110938/RY/RT/EY/205265896/course-73.png"
        },
        {
            id : 2,
            course_name : 'Basic IoTs',
            age : 'Age 16-58',
            session_hour : '45 Hr 40 Mins',
            price : 149.99,
            rated : '5.0 (2k Reviews)',
            image_url : "https://5.imimg.com/data5/SELLER/Default/2023/12/369110938/RY/RT/EY/205265896/course-73.png"
        },
        {
            id : 3,
            course_name : 'Advanced Robotics',
            age : 'Age 16-58',
            session_hour : '45 Hr 40 Mins',
            price : 249.99,
            rated : '5.0 (2k Review)'
        },
        {
            id : 4,
            course_name : 'Internet of Things',
            age : 'Age 16-58',
            session_hour : '45 Hr 40 Mins',
            price : 249.99,
            rated : '5.0 (2k Reviews)',
            image_url : "https://5.imimg.com/data5/SELLER/Default/2023/12/369110938/RY/RT/EY/205265896/course-73.png"
        },
        {
            id : 5,
            course_name : '3D Designs',
            age : 'Age 14-58',
            session_hour : '30 Hr 40 Mins',
            price : 99.99,
            rated : '5.0 (2k Reviews)',
            image_url : "https://5.imimg.com/data5/SELLER/Default/2023/12/369110938/RY/RT/EY/205265896/course-73.png"
        },
        {
            id : 6,
            course_name : '3D Advanced',
            age : 'Age 14-58',
            session_hour : '30 Hr 40 Mins',
            price : 149.99,
            rated : '5.0 (2k Reviews)',
            image_url : "https://5.imimg.com/data5/SELLER/Default/2023/12/369110938/RY/RT/EY/205265896/course-73.png"
        },
        {
            id : 7,
            course_name : 'Electorincs Design',
            age : 'Age 14-58',
            session_hour : '30 Hr 40 Mins',
            price : 99.99,
            rated : '5.0 (2k Reviews)',
            image_url : "https://5.imimg.com/data5/SELLER/Default/2023/12/369110938/RY/RT/EY/205265896/course-73.png"
        },
        {
            id : 8,
            course_name : 'Advanced PCB',
            age : 'Age 14-58',
            session_hour : '30 Hr 40 Mins',
            price : 149.99,
            rated : '5.0 (2k Reviews)',
            image_url : "https://5.imimg.com/data5/SELLER/Default/2023/12/369110938/RY/RT/EY/205265896/course-73.png"
        },
        {
            id : 9,
            course_name : 'Scratch Course',
            age : 'Age 14-58',
            session_hour : '30 Hr 40 Mins',
            price : 129.99,
            rated : '5.0 (2k Reviews)',
            image_url : "https://5.imimg.com/data5/SELLER/Default/2023/12/369110938/RY/RT/EY/205265896/course-73.png"
        },
        {
            id : 10,
            course_name : 'MicroBit Python',
            age : 'Age 14-58',
            session_hour : '45 Hr 40 Mins',
            price : 149.99,
            rated : '5.0 (2k Reviews)',
            image_url : "https://5.imimg.com/data5/SELLER/Default/2023/12/369110938/RY/RT/EY/205265896/course-73.png"
        },

    ];

    const [courses , setCourses] = useState(curriculums);

    return ( 
        <div className="mt-10 w-full ">
            <div className="flex flex-col lg:md:flex-row justify-start lg:md:justify-center items-center gap-5  lg:md:gap-[300px] p-5 lg:md:p-0">
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-4xl">Popular Courses</h3>
                    <p className=" w-full lg:md:w-[600px]">RobotX Academy offers a variety of popular courses designed to ignite a passion for robotics, the Internet of Things, Scratch, Electronic Design, 3D modeling, and STEAM.</p>
                </div>
                <button className="bg-primary text-white w-full lg:md:w-[15%] py-3">Explore All Courses</button>
            </div>


            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-3 mt-16 mx-5 lg:md:mx-20">
                {courses && courses.map((course) =>(
                <div className="p-4  bg-gray-100 shadow-sm flex flex-col justify-center items-center gap-2" key={course.id}>
                    <img className="w-[210px] h-[210px] object-cover" src={course.image_url} alt="" />
                    <div className="flex justify-start items-center gap-3">
                        <FaStar className="text-yellow-400"/>
                        <p className="text-sm font-bold">{course.rated}</p>
                    </div>
                    <p className="text-xs">{course.age} • {course.session_hour}</p>
                    <div className="bg-secondary text-white px-4 py-2">
                       ${course.price}
                    </div>
                </div>
                )) }
            </div>

        </div> 
     );
}
 
export default Courses;