import { useState } from "react"

export default function Fileuploader({register,setvalue}) {

    const [preview ,setPreview]=useState(null);

    function handleChange(e){
     let url= URL.createObjectURL(e.target.files[0]);
     console.log(url)
     setPreview(url)
    }
    



    return (
        <div>
            <div className=" relative">
                <label htmlFor="thumbnail">Thumbnail</label>

                
                <input style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                  onChange={handleChange}    className="w-full h-[300px] rounded-[0.5rem] bg-richblack-700 p-[12px] border-[1px] border-dotted text-richblack-5" type="file" name="thumbnail" id="thumbnail"
{
    ...register("thumbnail",{required:true})
}

                />
                <img className=" absolute top-10 w-full h-[300px] " src={preview} alt="" />

                


            </div>

        </div>
    )
}