import Rating from "@/app/components/rating";
import Image from "next/image";

import { classNames } from "@/app/components/util";

export type Review = {
  text: string;
  rating: number;
  author: {
    name: string;
    state: string;
  };
  featured?: boolean;
};

export type ReviewsArray = Review[][][];

export function ReviewItem({ review }: { review: Review }) {
  return (
    <figure
      className={`bg-gray-50 ring-1 ring-gray-900/5 ${
        review.featured
          ? "rounded-2xl shadow-xl sm:col-span-2 xl:col-start-2 xl:row-end-1"
          : "rounded-xl p-6 pb-4 shadow-lg"
      }`}
    >
      <blockquote
        className={`text-balance text-green-900 ${
          review.featured
            ? "p-6 pb-2 text-lg/relaxed font-medium tracking-tight sm:p-10 sm:pb-4 sm:text-xl/relaxed"
            : "mb-2 text-base/relaxed"
        }`}
      >
        <p>{`“${review.text}”`}</p>
        {review.featured ? (
          <Rating rating={review.rating} big={true} className="my-4" />
        ) : (
          <Rating rating={review.rating} className="my-2" />
        )}
      </blockquote>
      <figcaption
        className={`flex items-center gap-4 ${
          review.featured && "px-6 pb-4 sm:px-10 sm:pb-10"
        }`}
      >
        <div
          className={`relative aspect-[4/3] ${
            review.featured ? "h-12 shadow-lg sm:h-16" : "h-10 shadow-md"
          }`}
        >
          <Image
            src={`/us_states/Flag_of_${review.author.state.replaceAll(" ", "_")}.svg`}
            alt={`Flag of ${review.author.state} state`}
            unoptimized
            fill
            className={`object-cover ${
              review.featured ? "rounded-lg shadow-lg" : "rounded shadow-md"
            }`}
          />
        </div>
        <div>
          <div
            className={`font-semibold ${
              review.featured
                ? "text-lg text-gray-900 sm:text-xl"
                : "text-gray-800 sm:text-lg"
            }`}
          >
            {review.author.name}
          </div>
          <div
            className={
              review.featured
                ? "text-gray-700 sm:text-lg"
                : "text-sm text-gray-600 sm:text-base"
            }
          >{`from ${review.author.state}`}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Reviews({
  subtitle,
  title,
  description,
  reviews,
  backgroundEffect = true,
}: {
  subtitle: string;
  title: string;
  description: string;
  reviews: ReviewsArray;
  backgroundEffect?: boolean;
}) {
  const featuredReview =
    reviews.flat(2).find((review) => review.featured) || false;

  return (
    <section className="relative isolate py-12 md:py-32">
      {backgroundEffect && (
        <>
          <div
            className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            aria-hidden="true"
          >
            <div
              className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-red-200 to-purple-300 opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-20 blur-3xl sm:pt-40 xl:justify-end"
            aria-hidden="true"
          >
            <div
              className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-purple-200 to-red-300 xl:ml-0 xl:mr-[calc(50%-12rem)]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </>
      )}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-xl font-semibold uppercase tracking-wide text-purple-600">
            {subtitle}
          </h2>
          <h1 className="mt-4 text-3xl/normal font-bold tracking-tight text-green-900 sm:text-4xl/normal">
            {title}
          </h1>
          <p className="mt-6 text-balance text-xl/normal font-medium text-green-800">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 grid-rows-1 gap-8 text-gray-900 sm:mt-12 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {featuredReview && <ReviewItem review={featuredReview} />}
          {reviews.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === reviews.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8",
                  )}
                >
                  {column
                    .filter((review) => review.featured != true)
                    .map((review, index) => (
                      <ReviewItem review={review} key={index} />
                    ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
