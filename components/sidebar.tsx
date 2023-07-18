import Navigation from "./navigation"

export default function Sidebar(props){

    return(
        <aside className={`col-span-${props.cols} sideBar pt-5`}>
            <h2 className="text-2xl">Men-You</h2>
            <Navigation type="sidebar" />
        </aside>
    ) 
}