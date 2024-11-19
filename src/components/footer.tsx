
import Link from "next/link";
import { IoLogoVercel } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer id="contact" className="mt-10  text-center py-5" >
      
      <div className="flex justify-center space-x-4 mt-3">
      <Link
              target="_blank"
              href={"https://github.com/zakiabashir"}
              className="text-gray-500"
            >
              <FaGithub  className="text-3xl hover:text-pink-900" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/zakia-bashir-367b41254/"}
              className="text-gray-500"
            >
              <FaLinkedin className="text-3xl hover:text-blue-600" />
            </Link>
            <Link
              target="_blank"
              href={"https://vercel.com/zakiabashirs-projects"}
              className="text-gray-500"
            >
              <IoLogoVercel className="text-3xl hover:text-pink-900" />
            </Link>
      </div>
      <p className="mt-2">Copyright © 2024 Zakia Bashir. All rights reserved.</p>
    </footer>
  )
}