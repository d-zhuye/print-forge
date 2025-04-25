import { getAllModels } from "@/app/lib/models";
import { Model } from "@/app/types/types";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/hero-image.png";
import { FaRegHeart } from "react-icons/fa";

type Params = {
  state: string;
};

export default async function ModelDetails({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const data = await getAllModels();

  const model: Model | undefined = data.find((product: Model) => {
    const skeweredName = product.name.toLowerCase().split(" ").join("-");
    return skeweredName == slug;
  });

  if (!model) throw new Error();

  return (
    <main>
      <Link href="/3d-models" className="block py-4 uppercase text-center">
        Back to overview
      </Link>
      <section className="flex flex-col justify-start items-start gap-4">
        <Image src={heroImage} alt={model.name} />
        <div className="text-2xl flex items-center gap-1 mt-auto">
          <FaRegHeart className="hover:fill-red-700 hover:cursor-pointer" />
          <p>{model.likes}</p>
        </div>
        <h2>{model.name}</h2>
        <span className="px-3 border-[1px] border-neutral-400/60 rounded-2xl relative">
          {model.category}
        </span>
        <p>{model.description}</p>
      </section>
    </main>
  );
}
