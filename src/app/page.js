import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-7/12 mx-auto py-20">
      <div className="text-center space-y-4">
        <h2 className="text-[#1F2937] font-bold text-5xl">Friends to keep close in your life</h2>
        <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
          relationships that matter most.</p>

        <div>
          <button className="btn bg-green-800 text-white"><FaPlus />Add a Friend</button>
        </div>
      </div>

    </div>


  );
}
