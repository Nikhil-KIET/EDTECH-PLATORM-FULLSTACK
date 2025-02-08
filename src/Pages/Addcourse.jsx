import Stepper from "../Components/Stepper";

export default function Addcourse(){

    const steps=[
        {"id":"1","title":"Course Information"},
        {"id":"2","title":"Course Builder"},
        {"id":"3","title":"Publish"}

    ]
    return (
        <div className=" text-white ml-32 mt-10  ">
            <h1 className=" text-3xl font-medium ">Edit Course</h1>
            <Stepper steps={steps}></Stepper>
        </div>
    )
}