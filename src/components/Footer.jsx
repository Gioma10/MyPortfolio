import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className="text-[#23201A] text-xs md:text-sm lg:text-base py-5 gap-4 w-full flex flex-col items-center justify-center items-centera absolute bottom-0">
            <div className="flex gap-6 sm:gap-12 ">
                <div className="flex gap-2 justify-center items-center">
                    <FaPhoneAlt />
                    <a href="tel:+393513741721">+39 351 374 1721</a>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <AiOutlineMail size={20}/>
                    <a href="mailto:gmauro.work@gmail.com">gmauro.work@gmail.com</a>
                </div>
            </div>
            <div className="flex gap-8">
                <p>© Giovanni R. Mauro 2025</p>
            </div>
        </footer>
    )
}