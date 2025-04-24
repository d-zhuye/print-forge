import { getAllModels } from "../lib/models";
import { Model } from "../types/types";
import ModelCard from "./ModelCard";

export default async function Models() {
  const models: Model[] = await getAllModels();

  const modelElements = models.map((model) => {
    return <ModelCard key={model.id} model={model} />;
  });

  return (
    <main>
      <section className="flex flex-col gap-4">{modelElements}</section>
    </main>
  );
}
