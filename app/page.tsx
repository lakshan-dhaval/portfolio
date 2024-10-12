import Approach from "@/Components/Approach";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProject from "@/Components/RecentProject";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex
    justify-center items-center flex-col
    mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProject />
        <Approach />
        <Footer />
      </div> 
    </main>
  )
}
