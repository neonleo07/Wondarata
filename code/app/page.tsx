import { IMAGES, NAV_LINKS } from "@/Constants";
import Landing from "@/components/Landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden ">
      <Image
        src={IMAGES.HOME_BG}
        alt="Home Background"
        layout="fill"
        className=" -mt-6 h-screen"
      />
      <div className="w-screen flex justify-center">
        <Landing />
      </div>
    </div>
  );
}
