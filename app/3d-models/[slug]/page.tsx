import { getAllModels } from "@/app/lib/models";
import { Model } from "@/app/types/types";

export default async function ModelDetails({ params }) {
  const { slug } = await params;
  console.log(slug);

  const data = await getAllModels();

  const product: Model | undefined = data.find((product: Model) => {
    const skeweredName = product.name.toLowerCase().split(" ").join("-");
    return skeweredName == slug;
  });
  console.log(product);
  return <h1>Model Details</h1>;
}
