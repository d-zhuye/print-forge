import Image from "next/image";
import heroImg from "../../public/hero-image.png";
import { RiStackLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { IoFlagOutline } from "react-icons/io5";
import HighlightBlock from "./HighlightBlock";
import DividerLine from "./DividerLine";

export default function About() {
  return (
    <main
      id="about-page"
      className="w-screen p-[5vw] flex flex-col lg:flex-row lg:flex-wrap lg:gap-8 lg:justify-center lg:items-center"
    >
      <Image
        width={800}
        height={800}
        className="md:w-full md:h-[200px] md:object-cover md:object-[0%_30%] lg:h-[300px] xl:w-[43vw] xl:h-[43vw]"
        src={heroImg}
        alt="marble sculptures on table"
      />
      <section className="w-full flex flex-col gap-6 py-8 xl:w-[43vw]">
        <p className="uppercase lg:text-xl">About PrintForge</p>
        <h1 className="leading-12">Empowering makers worldwide</h1>
        <p className="text-2xl">
          Founded in 2023, PrintForge has quickly become the go-to platform for
          3D printing enthusiasts, makers, and professional designers to share
          and discover amazing STL files for 3D printing.
          <br />
          <br />
          Our mission is to foster a vibrant community where creativity meets
          technology, enabling anyone to bring their ideas to life through 3D
          printing.
        </p>
      </section>

      <DividerLine />

      <section className="flex flex-col gap-y-8 py-8 lg:flex-row lg:justify-center lg:gap-x-4">
        <HighlightBlock
          icon={<RiStackLine className="w-full h-full" />}
          header="100K+ Models"
          content="Access our vast library of community-created 3D models, from
            practical tools to artistic creations."
          styles="lg:w-1/3 lg:border-r-[1px]"
        />
        <HighlightBlock
          icon={<CiGlobe className="w-full h-full" />}
          header="Active Community"
          content="Join thousands of makers who share tips, provide feedback, and
            collaborate on projects."
          styles="lg:w-1/3 lg:border-r-[1px]"
        />
        <HighlightBlock
          icon={<IoFlagOutline className="w-full h-full" />}
          header="Free to Use"
          content="Most models are free to download, with optional premium features for
            power users."
          styles="lg:w-1/3"
        />
      </section>

      <DividerLine />
      <section className="flex flex-col gap-y-8 my-4 lg:w-3/5 lg:mx-auto">
        <h1>Our vision</h1>
        <p className="text-2xl">
          At PrintForge, we believe that 3D printing is revolutionizing the way
          we create, prototype, and manufacture. Our platform serves as a bridge
          between designers and makers, enabling the sharing of knowledge and
          creativity that pushes the boundaries of what&apos;s possible with 3D
          printing.
        </p>

        <div className="w-1/3 h-[1px] bg-slate-800/70 mx-auto"></div>

        <p className="text-2xl">
          Whether you&apos;re a hobbyist looking for your next weekend project,
          an educator seeking teaching materials, or a professional designer
          wanting to share your creations, PrintForge provides the tools and
          community to support your journey in 3D printing.
        </p>
      </section>
    </main>
  );
}
