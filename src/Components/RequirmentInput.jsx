import { useState } from "react"

export default function RequirmentInput(){

    const [req,setreq]=useState([])
    const [val,setval]=useState("")

    function removeele(index){
        setreq((prev)=>{
            let arr=[...prev]
            console.log(arr)
            
            arr.splice(index,1);
            return arr

    })
    }


    return (
        <div>
            <label htmlFor="course-price">Requirments/Instructions</label>
            <input style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                        className="w-full rounded-[0.5rem]    bg-richblack-700 p-[12px] text-richblack-5" value={val} type="text" name="course-price" id="course-price "
                        onChange={(e)=>{
                            setval(e.target.value)
                        }}
                      



                    />

                    <button onClick={(e)=>{
                        e.preventDefault()
                        
                        setreq((prev)=>(
                         [...prev,val]
                        ))
                        setval("")
                        console.log(req)

                    }} >Add</button>

                    
                        <ol  type="1" >
                            {
                                 req.map((ele,index)=>(
                                    <div className=" flex gap-3">
                                        <p>{ele}</p>
                                        <p className=" cursor-pointer" onClick={()=>{
                                            removeele(index)

                                        }}>Clear</p>
                                    </div>
                                ))
                            }

                        </ol>
                       
                    
                


        </div>
    )
}