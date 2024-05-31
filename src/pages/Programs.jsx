const Programs = () => {
    const programs = [
        {
          id: 1,
          title: "Robot Contests",
          description: "Exciting humanoid robot contests are happening in Cambodia.",
          link: "learn-more", // Replace with actual link
          image: "robot-contest.jpg", // Replace with actual image path
        },
        {
          id: 2,
          title: "Virtual Programs",
          description:
            "Offers a wide range of learning experiences delivered online.",
          link: "learn-more", // Replace with actual link
          image: "virtual-programs.jpg", // Replace with actual image path
        },
        {
          id: 3,
          title: "RobotX Club",
          description:
            "A great way for students to learn about robotics, loTs, TinyML, Al, and teamwork.",
          link: "learn-more", // Replace with actual link
          image: "robotx-club.jpg", // Replace with actual image path
        },
        {
          id: 4,
          title: "Coding Workshops",
          description: "Interactive workshops to learn programming languages.",
          link: "learn-more", // Replace with actual link
          image: "coding-workshops.jpg", // Replace with actual image path
        },
        {
          id: 5,
          title: "AI for Everyone",
          description: "Introduces the basics of Artificial Intelligence in a fun way.",
          link: "learn-more", // Replace with actual link
          image: "ai-for-everyone.jpg", // Replace with actual image path
        },
        {
          id: 6,
          title: "Build Your Own Drone",
          description: "Hands-on program to build and fly your own drone.",
          link: "learn-more", // Replace with actual link
          image: "build-your-drone.jpg", // Replace with actual image path
        },
        {
          id: 7,
          title: "3D Printing Design",
          description: "Master the basics of 3D design and printing technology.",
          link: "learn-more", // Replace with actual link
          image: "3d-printing-design.jpg", // Replace with actual image path
        },
        {
          id: 8,
          title: "Cybersecurity Challenge",
          description: "Test your skills in a fun and educational cybersecurity challenge.",
          link: "learn-more", // Replace with actual link
          image: "cybersecurity-challenge.jpg", // Replace with actual image path
        },
        {
          id: 9,
          title: "Tech for Social Good",
          description: "Learn how technology can be used to solve real-world problems.",
          link: "learn-more", // Replace with actual link
          image: "tech-for-good.jpg", // Replace with actual image path
        },
      ];
      


    return ( 
        <div className="mt-20 mx-3">
            <h3 className="uppercase text-center font-bold text-secondary">Our Programs</h3>
            <h1 className="text-2xl lg:md:text-3xl font-bold text-center mt-4">Explore Our Captivating Robotic & IoTs</h1>
            <p className="text-center mt-4">Pulvinar nunc eget tincidunt id urna diam scelerisque cursus. Quis nunc pharetra arcu lectus nisl. Tortor vulputate sed maecenas rhoncus viverra purus.</p>
           
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
                {programs.map((program) => (
                    <div
                    key={program.id}
                    className="flex flex-col  overflow-hidden bg-white md:flex-row"
                    >
                    {/* image goes here */}

                    <div className="flex flex-col flex-grow p-4 md:p-6">
                        <h3 className="text-lg mb-2 font-bold">{program.title}</h3>
                        <p className="text-gray-600 mb-4">{program.description}</p>
                        <a href={program.link} className="text-secondary font-bold border-b-2 border-secondary w-[6rem]">
                        Learn More
                        </a>
                    </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Programs;