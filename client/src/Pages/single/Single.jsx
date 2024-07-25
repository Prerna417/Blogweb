
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"

export default function Single() {
  return (
    <div className=" md:flex-row flex flex-col">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
