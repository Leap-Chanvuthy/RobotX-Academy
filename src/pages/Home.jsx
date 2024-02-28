const Home = () => {
    return ( 
        <div className=" mt-10 grid sm:grid-cols-2 grid-cols-1 mx-10">
            {/* hero */}
            <div className=" flex flex-col gap-4 py-4 ">
                <p className="text-secondary uppercase font-bold">Robotx Academy - Robotic Course for Kids</p>
                <h1 className="text-4xl  font-bold">Where Learning Meets Fun and Innovation</h1>
                <p className=" font-light"> Programs help students learn how to think logically, solve problems, and come up with creative solutions.</p>
                <div className="flex gap-8 items-center">
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
            <div>
                <p>Hello</p>
            </div>
        </div>
     );
}
 
export default Home;