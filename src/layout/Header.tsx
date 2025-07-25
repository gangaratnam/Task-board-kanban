import { Avatar } from "@mantine/core";
import type React from "react"
import { BsFillKanbanFill } from "react-icons/bs";


const Header: React.FC = () => {
    return (
        <div className="header p-3 d-flex flex-between align-items-center shadow-2xs">
            <div>
                <BsFillKanbanFill size={26} className="black-font" />
            </div>
            <div>
                {/* <CgProfile size={26} className="black-font" /> */}
                  <Avatar variant="filled" radius="sm" color="yellow" src="" className="cursor-pointer" />
            </div>
        </div>
    )
}
export default Header;