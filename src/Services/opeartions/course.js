import { toast } from "react-hot-toast"
import { connectApi } from "../Apiconnector"
import { setCurrStep, setData } from "../../Redux/Slices/CourseSlice"


export function createCourse(data, token) {
  return async (dispatch) => {





    let tid = toast.loading("Creating Course.......");

    try {


      // Send the request with FormData
      let res = await connectApi("POST", "http://localhost:4000/createCourse", data, {
        Authorisation: `Bearer ${token}`,
      });

      if (!res.data.success) {
        console.log(res.data);
        throw new Error(res.data.message);
      }
      console.log(res.data.coursedata)

      // Dispatch the next step
      dispatch(setCurrStep(2));
      dispatch(setData(res.data.coursedata))
      toast.success(res.data.message)
    } catch (error) {
      toast.error(error.message);
    } finally {
      toast.dismiss(tid);
    }
  };
}


export function createSection(id, data, token) {

  return async (dispatch) => {
    console.log(data)
    let tid = toast.loading("Loading......")
    try {


      let res = await connectApi("POST", "http://localhost:4000/createSection", { courseId: id, name: data.sectionname }, { Authorisation: `Bearer ${token}` })

      if (!res.data.success) {
        throw new Error(res.data.message)
      }

      dispatch(setData(res.data.data))

      toast.success(res.data.message)




    } catch (error) {
      toast.error(error.message)

    } finally {
      toast.dismiss(tid)

    }

  }

}

export function createSubsection(data, token, id, course, index) {

  let tid = toast.loading("loading........")
  return async (dispatch) => {

    let formData = new FormData();
    formData.append("video", data.vdo[0]);
    formData.append("name", data.name);
    formData.append("sectionId", id);
    formData.append("desc", data.desc);



    try {

      let res = await connectApi("POST", "http://localhost:4000/createSubs", formData, { Authorisation: `Bearer ${token}` })

      console.log(res.data)

      if (!res.data.success) {
        throw new Error(res.data.message)
      }

      console.log("course", course)

      let newCourse = JSON.parse(JSON.stringify(course));;
      ///verify this ->
      newCourse.courseContent.splice(index, 1, res.data.data);
      console.log(newCourse)

      dispatch(setData(newCourse))






      toast.success(res.data.message)




    } catch (error) {


      toast.error(error.message)

    } finally {
      toast.dismiss(tid)

    }
  }
}

export async function  getCourses(token) {
  
    let tid = toast.loading("loading......")
    try {

      let res = await connectApi("GET", "http://localhost:4000/getAllCourses",{}, { Authorisation: `Bearer ${token}` })

      if (!res.data.success) {
        throw new Error(res.data.message)
      }
      console.log("courses",res.data.data)

      toast.success(res.data.message)
      return res.data.data.courses


    } catch (error) {

      toast.error(error.message)

    } finally {

      toast.dismiss(tid)

    }
    return []
  

}
