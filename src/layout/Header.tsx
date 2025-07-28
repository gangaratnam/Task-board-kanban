import { Avatar } from "@mantine/core";
import type React from "react"
import { BsFillKanbanFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Header: React.FC = () => {
    const navigate =useNavigate()
    return (
        <div className="header p-3 d-flex flex-between align-items-center shadow-2xs">
            <div onClick={()=>navigate("/")}>
                <BsFillKanbanFill size={26} className="black-font cursor-pointer" />
            </div>
            <div >
                {/* <CgProfile size={26} className="black-font" /> */}
                  <Avatar variant="filled" radius="sm" color="yellow" src="" className="cursor-pointer" />
            </div>
        </div>
    )
}
export default Header;