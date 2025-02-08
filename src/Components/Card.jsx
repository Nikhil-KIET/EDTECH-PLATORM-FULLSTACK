import { useState } from "react"

export default function Card({ data, index, select, setSelect }) {


    return (

        <div className=" mt-10    ">
            {
                index === select ? (<div className=" bg-richblack-25 flex flex-col w-[400px]  h-[300px] text-left  gap-3  items-start" onClick={() => {
                    setSelect(index)
                }} >

                    <h1 className="text-richblack-800 pt-6 pl-6 pr-6 ">{data.heading}
                    </h1>

                    <p className=" text-richblack-600 pl-6 pr-6">{data.description}</p>


                  <div className=" flex justify-between items-end h-[100%] mt-10  w-[100%]">
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    
                    
                  </div>

                    <div className=" flex items-end h-[100%] pb-6 pl-6 pr-6 justify-between w-[100%] ">
                        <div className=" text-blue-600">
                            {data.level}
                        </div>
                        <div className=" text-blue-600">
                            {`${data.lessionNumber + " Lessons"}`}
                        </div>

                    </div>


                </div>) : (<div className=" bg-richblack-25 flex flex-col w-[400px]  h-[300px] text-left  gap-3  items-start" onClick={() => {
                    setSelect(index)
                }} >

                    <h1 className="text-richblack-800 pt-6 pl-6 pr-6 ">{data.heading}
                    </h1>

                    <p className=" text-richblack-600 pl-6 pr-6">{data.description}</p>


                  <div className=" flex justify-between items-end h-[100%] mt-10  w-[100%]">
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    <div className=" h-[2px] w-[10px] bg-richblack-600 "></div>
                    
                    
                  </div>

                    <div className=" flex items-end h-[100%] pb-6 pl-6 pr-6 justify-between w-[100%] ">
                        <div className=" text-blue-600">
                            {data.level}
                        </div>
                        <div className=" text-blue-600">
                            {`${data.lessionNumber + " Lessons"}`}
                        </div>

                    </div>


                </div>)

            }
        </div>


    )
}