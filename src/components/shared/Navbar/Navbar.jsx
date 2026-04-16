import Image from "next/image";
import LogoImage from "@/assets/logo.png"
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { PiChartLine } from "react-icons/pi";
import MyLink from "./MyLink";




const Navbar = () => {

    const navItems = [
        {
            id: 1,
            name: "Home",
            icon: <GoHome />,
            path: "/"
        },
        {
            id: 2,
            name: "Timeline",
            icon: <CiClock2 />,
            path: "/timeline"
        },
        {
            id: 3,
            name: "States",
            icon: <PiChartLine />,
            path: "/states"
        }
    ];

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="container mx-auto">
                <div className="navbar flex-col md:flex-row">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">
                            <Image src={LogoImage} alt="logoimage" />
                        </a>
                    </div>
                    <div className="flex-none">

                        <div>
                            
                            <ul className="flex items-center gap-3">
                                
                                {
                                    navItems.map((item)=> (
                                        <MyLink className="flex items-center gap-2 py-2.5 px-4 rounded-sm" href={item.path} key={item.id}>
                                            {item.icon}{item.name}</MyLink>
                                    ))
                                }
                            
                                
                            </ul>
                            

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;