import { useForm } from "react-hook-form"
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import TagInput from "./Taginput";
import RequirmentInput from "./RequirmentInput";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Fileuploader from "./Fileuploader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createCourse } from "../Services/opeartions/course";

export default function Courseinfo() {

    const location = useLocation();

    const dispatch=useDispatch()

    let temp_id = useParams('id')


    const course_id = temp_id || ""

    const { data } = useSelector((state) => state.course)
    const { token } = useSelector((state) => state.user.userData)
    console.log("dtata", data)

    console.log(course_id)






    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm()

    function submitHandler(data) {
        console.log("data:",data.thumbnail[0])
         let formData = new FormData();
      formData.append("thumbnail", data.thumbnail[0]);
      formData.append("courseName", "nik");
      formData.append("courseDesc", data.desc);
      formData.append("whatYouWillLearn", data.benefits);
      formData.append("price", data.price);
      formData.append("tag", data.cat);

     //

    

        dispatch(createCourse(formData,token))
    }

    useEffect(()=>{
       
    
       
    },[])




    return (
        <div className="w-[600px] border-2 border-[#2C333F] p-5 rounded-lg mb-10" >
            <form className="text-white space-y-7 " onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label htmlFor="title">Course Title</label>
                    <input style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5" type="text" name="title" id="title "
                        {
                        ...register("title", { required: true })

                        }

                    />
                </div>

                <div>
                    <label htmlFor="desc">Course Short Desc</label>
                    <textarea style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5" type="text" name="desc" id="desc "
                        {
                        ...register("desc", { required: true })

                        }

                    />
                </div>

                <div className=" relative">
                    <label htmlFor="title">Course Price</label>
                    <input style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                        className="w-full rounded-[0.5rem] pl-10   bg-richblack-700 p-[12px] text-richblack-5" type="number" name="price" id="price "
                        {
                        ...register("price", { required: true })

                        }



                    />

                    <HiOutlineCurrencyRupee className=" absolute top-[40px] left-4" />

                </div>


                <div>
                    <label htmlFor="title">Course Category</label>

                    <select name="cat" id="cat" style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                        {
                        ...register("cat", { required: true })

                        }  >

                        <option value="webdev">WEbDev</option>


                    </select>



                </div>


                <div>
                    <label htmlFor="benefits">Course Benefits</label>
                    <textarea style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5" type="text" name="benefits" id="benefits "
                        {
                        ...register("benefits", { required: true })

                        }

                    />
                </div>

                <TagInput register={register} setValue={setValue} errors={errors} ></TagInput>

                <RequirmentInput register={register} setValue={setValue} errors={errors}></RequirmentInput>

                <Fileuploader register={register} setValue={setValue} errors={errors}></Fileuploader>

                {
                    course_id && (<div> <button type="submit">Save and Next</button>   <button>Continue withut saving</button> </div>)
                }

                {
                    course_id && (<div> <button type="submit"> Next</button> </div>)
                }






            </form>
        </div>

    )
}