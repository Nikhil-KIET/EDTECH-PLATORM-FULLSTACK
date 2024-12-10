import { FaArrowRightLong } from "react-icons/fa6";
import Highlight from "../Components/Hilight";
import Cta from "../Components/CtaBtn";
import Banner from "../assets/Images/banner.mp4"
import Codeblock from "../Components/Codeblock";
import { HomePageExplore } from "../data/homepage-explore"
import { useState } from "react";
import "./Home.css"
import Card from "../Components/Card";




export default function Home() {

    const [value, setValue] = useState(HomePageExplore[0].tag)
    const [data, setData] = useState(HomePageExplore[0].courses)
    const [select, setSelect] = useState(0)
    

    function miniFilterHandler(temp) {
        (() => setValue(temp))()
        let newdata = HomePageExplore.filter((ele) => {
            return ele.tag === temp
        })
        setData(newdata['0'].courses)
        console.log(data)

    }
    return (
        <div className=" w-11/12 flex flex-col gap-[38px] mt-5  items-center">
            {/* section1 */}

            <div className=" cursor-pointer shadow-bottom  bg-[#161D29] text-pure-greys-300 flex flex-row items-center p-[6px] px-7 gap-[5px]  justify-center h-[44px] rounded-[500px] shadow-white  transition-all duration-100 hover:scale-95  border-[0.1px]  ">
                <p>Become an Instructor</p>
                <FaArrowRightLong />




            </div>

            <div className=" text-white flex gap-1 items-end  ">
                <p className=" text-4xl text-richblack-5 font-semibold ">Empower Your Future With</p>
                <Highlight text={`Coding Skills`}></Highlight>

            </div>
            <div className=" flex justify-center">
                <p className=" text-richblack-400  text-center lg:w-[800px]">With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </p>
            </div>
            <div className=" flex  gap-[24px]">
                <Cta flag={true} text={"Learn More"} url={""}></Cta>
                <Cta flag={false} text={"Book a Demo"} url={""}></Cta>


            </div>


            {/* SECTION2 */}

            <div className="  relative lg:w-[70%] h-[651px] bg-white  flex justify-center  mt-7 w-[0%] ">

                <video className=" absolute top-[-15px] w-[150px] left-[-10px]   h-[655px] lg:w-[100%] object-fill  " src={Banner} autoPlay loop={Infinity} muted  ></video>
            </div>

            {/* SECTION 3 */}
            <div className=" flex   justify-center my-20">
                <Codeblock heading={<>Unlock your {<Highlight text={"coding potential"}></Highlight>} with our online courses.</>} subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."} code={`<!DOCTYPE html>\n<html>\n<body>\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n</body>\n</html>`} direction={"lg:flex-row"} ></Codeblock>
            </div>

            <div className="  flex justify-center  my-20">
                <Codeblock heading={<>Start {<Highlight text={"coding in \n seconds"}></Highlight>} </>} subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."} code={`<!DOCTYPE html>\n<html> \n head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n<body>\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n</body>\n</html>`} direction={"lg:flex-row-reverse"} ></Codeblock>
            </div>


            {/* SECION4 */}

            <div className=" relative flex flex-col items-center text-center mb-60 w-[100%] ">
                <p className=" text-richblack-5 font-semibold text-4xl">Unlock the <Highlight text={"Power of Code"}></Highlight> </p>
                <p className=" text-richblack-400">Learn to Build Anything You Can Imagine</p>

                <div className=" flex justify-center  gap-8  ">
                    {
                        HomePageExplore.map((ele) => {
                            return (<div className=" cursor-pointer" onClick={() => {
                                miniFilterHandler(ele.tag)
                            }}>
                                <p className={`${value === ele.tag ? " text-richblack-5" : " text-richblack-200"}`} >{ele.tag}</p>

                            </div>)
                        })

                    }
                </div>


                <div className=" absolute top-[100px]  flex justify-center gap-10  ">
                    {
                        data.map((ele,index) => {
                            return <Card data={ele} index={index} select={select} setSelect={setSelect} ></Card>
                        })
                    }
                </div>


            </div>

            <div className="bg-pure-greys-5   w-screen " >
                <div id="" className="homepage_bg    h-[327px] "   >
                   

                </div>
            </div>




        </div>

    )


}