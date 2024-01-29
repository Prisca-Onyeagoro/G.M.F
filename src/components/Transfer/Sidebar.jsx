import { FaRegBell } from "react-icons/fa6";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { IoWater } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";
import Image from "next/image";

const Sidebar = ({ setSidebar }) => {
  return (
    <aside className="fixed h-screen w-3/4 md:w-1/2 text-white top-0 right-0 z-20">
      {/* Overlay */}
      <div
        className="h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-50 backdrop-blur z-10"
        onClick={() => setSidebar(false)}
      ></div>

      <div className="py-14 px-6 flex flex-col justify-between h-full z-20 relative bg-slate-900">
        <div>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10">
              <div className="h-full w-full relative">
                <Image src="/images/user.jpg" alt="user" layout="fill" quality={80} className="object-cover rounded-full" />
              </div>
            </div>
            <div className="grow">
              <h2 className="text-white font-semibold">Adegoke Samuel</h2>
              <p className="text-gray-500 text-sm">samuel@gmail.com</p>
            </div>
            <div>
              <FaRegBell className="inline text-2xl" />
            </div>
          </div>

          <div className="mt-20">
            <ul className="mx-4 flex flex-col gap-8">
              <li className="flex items-center gap-3 text-lg text-orange-500">
                <MdOutlineSpaceDashboard className="inline text-3xl" />{" "}
                Dashboard
              </li>

              <li className="flex items-center gap-3 text-lg hover:text-orange-500">
                <AiOutlineDollar className="inline text-3xl" />
                <span>
                    Savings
                </span>
                <span>
                    <RxCaretDown className="inline text-3xl" />
                </span>
              </li>

              <li className="flex items-center gap-3 text-lg hover:text-orange-500">
                <IoWater className="inline text-3xl" /> Invest
              </li>

              <li className="flex items-center gap-3 text-lg hover:text-orange-500">
                <FaRegUser className="inline text-3xl" /> Account
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-4">
          <button className="hover:text-orange-500 flex items-center gap-3">
            <span>
              <IoIosLogOut className="inline text-3xl" />
            </span>
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
