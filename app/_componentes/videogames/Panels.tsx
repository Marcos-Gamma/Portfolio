import { Dispatch, SetStateAction, useState } from "react";

type videos = {
    setVideo:Dispatch<SetStateAction<string>>
}

function Panels({setVideo}:videos) {
    const [panelActive, setPanelActive] = useState("")
    const defaultStyle = "cursor-pointer h-64 w-[6vw] bg-cover rounded-[5rem] bg-center bg-no-repeat transition-all duration-1000"

    function resize(e:any){
        let active = document.getElementsByClassName("active")[0];
        if (!e.target.classList.contains("active")) {
            active.classList.remove("active");
            e.target.classList.add("active");
        }
        setVideo(e.target.id);
    }

    return (
        <article className="flex justify-center ">
            <div id="La Huida" className={`bg-laHuida ${defaultStyle}`} onClick={resize} >
            </div>
            <div id="Time Wanderer" className={`bg-timeWanderer ${defaultStyle}`} onClick={resize} >
            </div>
            <div id="Project_R" className={`bg-fondoProjectR ${defaultStyle} active`} onClick={resize} >
            </div>
            <div id="CrazyRacy" className={`bg-fondoCrazyRacy ${defaultStyle}`} onClick={resize} >
            </div>
            <div id="Los tercios" className={`bg-tercios ${defaultStyle}`} onClick={resize} >
            </div>
        </article>
    )
}

export default Panels;