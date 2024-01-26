import Image from "next/image";
import Link from "next/link";

export type Plant = {
  id: number;
  link: string;
  name: string;
  price: number;
  image: string;
};

export type PlantsArray = Plant[];

export function PlantItem({ plant }: { plant: Plant }) {
  return (
    <Link href={plant.link} className="group">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
        <Image
          src={plant.image}
          alt={plant.name}
          className="size-full object-cover object-center"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-purple-50">
        {plant.name}
      </h3>
      <p className="mt-2 text-4xl font-bold text-purple-100">${plant.price}</p>
    </Link>
  );
}

export default function FeaturedPlants({
  title,
  description,
  plants,
}: {
  title: string;
  description: string;
  plants: PlantsArray;
}) {
  return (
    <section className="relative isolate bg-purple-800 py-12 shadow-2xl md:py-32">
      <div className="mx-auto mb-16 max-w-4xl px-6">
        <h3 className="text-center text-4xl/normal font-bold tracking-tight text-purple-50 sm:text-5xl/normal">
          {title}
        </h3>
        <p className="mt-6 text-balance text-center text-lg/relaxed text-purple-100 sm:text-xl/relaxed">
          {description}
        </p>
      </div>
      <div className="mx-auto grid max-w-sm grid-cols-1 gap-9 gap-x-12 px-6 sm:max-w-2xl sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-4 lg:gap-x-6 xl:px-8">
        {plants.map((plant) => (
          <PlantItem plant={plant} key={plant.id} />
        ))}
      </div>
    </section>
  );
}
