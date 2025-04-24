import { Model } from "../types/types";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import heroImage from "@/public/hero-image.png";

export default function ModelCard({ model }: { model: Model }) {
  const slug = model.name.toLowerCase().split(" ").join("-");

  return (
    <span className="w-full p-0">
      <Link href={`/3d-models/${slug}`}>
        <Image className="rounded-t-xl" src={heroImage} alt={model.name} />
      </Link>
      <div className="p-2 border-[1px] border-neutral-600/50 rounded-b-xl flex flex-col gap-4">
        <h2>{model.name}</h2>
        <p>{model.description}</p>
        <div className="flex items-center gap-1 ">
          <FaRegHeart />
          <p>{model.likes}</p>
        </div>
      </div>
    </span>
  );
}
