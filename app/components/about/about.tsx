import GoogleMaps from "@/app/components/about/google_maps";
import Features, { FeaturesArray } from "@/app/components/features";

export default function About({
  subtitle,
  title,
  description,
  google_maps,
  features,
}: {
  subtitle: string;
  title: string;
  description: string;
  google_maps: string;
  features: FeaturesArray;
}) {
  return (
    <section className="relative isolate overflow-hidden py-12 md:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="mx-auto max-w-3xl px-6 lg:max-w-lg lg:px-0 xl:max-w-none">
            <h2 className="text-center font-display text-xl font-semibold uppercase tracking-wide text-purple-600 md:text-left">
              {subtitle}
            </h2>
            <p className="mt-4 text-center text-3xl/relaxed font-bold tracking-tight text-green-900 sm:text-4xl/relaxed md:text-left">
              {title}
            </p>
            <p className="mt-4 text-balance text-center text-lg/loose text-green-800 md:text-left">
              {description}
            </p>
          </div>
          <GoogleMaps url={google_maps} />
        </div>
        <Features features={features} />
      </div>
    </section>
  );
}
