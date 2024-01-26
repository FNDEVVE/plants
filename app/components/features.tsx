import React from "react";

export type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type FeaturesArray = Feature[];

export function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="mx-auto flex flex-col sm:max-w-md md:max-w-none">
      <dt className="mb-4 flex items-center justify-center gap-x-3 font-display text-xl font-semibold uppercase tracking-wide text-purple-600 md:justify-start">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-purple-600">
          <feature.icon className="size-6 text-purple-50" aria-hidden="true" />
        </div>
        {feature.title}
      </dt>
      <dd className="mt-1 flex flex-auto flex-col text-balance text-center text-base/loose text-gray-800 md:text-left">
        <p className="flex-auto">{feature.description}</p>
      </dd>
    </div>
  );
}

export default function Features({ features }: { features: FeaturesArray }) {
  return (
    <dl className="mt-20 grid grid-cols-1 gap-10 px-6 md:grid-cols-3 lg:px-0">
      {features.map((feature, index) => (
        <FeatureItem feature={feature} key={index} />
      ))}
    </dl>
  );
}
