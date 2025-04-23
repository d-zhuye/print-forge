import Image from "next/image";
import heroImg from "../public/hero-image.png";

export default function App() {
  return (
    <>
      <main className="w-11/12 lg:flex lg:gap-16 lg:justify-between lg:items-center">
        <section className="lg:w-1/2 flex flex-col gap-4 lg:gap-2 items-start justify-start">
          <p className="hidden lg:block uppercase ">
            Your go-to platform for 3D printing files
          </p>
          <h1>Discover what&apos;s possible with 3D printing</h1>
          <p className="text-2xl tracking-wide">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <a
            className="text-xl uppercase inline-block p-2 border-[2px] my-6 lg:my-10 "
            href="#"
          >
            Browse Models
          </a>
        </section>
        <div className="w-screen md:w-2/3 mx-auto aspect-square relative left-[-1rem] flex justify-center items-center">
          <Image
            src={heroImg}
            alt="marble scultures on table"
            className="rounded-full"
          />
          <div className="w-[40%] h-[40%] bg-white absolute rounded-full"></div>
          <div className="w-[105%] h-[20%] bg-white absolute rotate-45"></div>
        </div>
      </main>
    </>
  );
}
