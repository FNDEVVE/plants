import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries/get-dictionary";
import Image from "next/image";
import Rating from "@/components/rating";
export default async function Template({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const featuredTestimonial = {
    body: "Visited Garden City in Phoenix and was amazed by their selection, especially the fruit trees. The staff were knowledgeable and helpful, guiding me to the perfect choices for my garden. I also appreciated their efficient installation service for my new drip system. Fair prices and great service – they've earned a repeat customer in me!",
    author: {
      name: "Emily T.",
      state: "Utah",
      imageUrl: "/us_flags/Flag_of_Utah_(2011-present).svg",
    },
  };
  const testimonials = [
    [
      [
        {
          body: "Amazing variety of cacti and native plants! The staff was incredibly helpful in guiding me through my xeriscape project. Highly recommend!",
          author: {
            name: "Mike J.",
            state: "Arizona",
            imageUrl: "/us_flags/Flag_of_Arizona.svg",
          },
        },
        {
          body: "Drove from California for their unique selection of tropical plants. Totally worth the trip! The staff's knowledge and passion really shine through.",
          author: {
            name: "Sarah D.",
            state: "California",
            imageUrl: "/us_flags/Flag_of_California.svg",
          },
        },
      ],
      [
        {
          body: "Been a regular since 2015. The quality of fruit trees here is unmatched, and the prices are always fair. A true gem in Phoenix!",
          author: {
            name: "Linda R.",
            state: "New Mexico",
            imageUrl: "/us_flags/Flag_of_New_Mexico.svg",
          },
        },
      ],
    ],
    [
      [
        {
          body: "Loved the variety of fruit trees. Bought a couple of citrus trees, and they're thriving. Excellent quality and prices.",
          author: {
            name: "Karen P.",
            state: "Arizona",
            imageUrl: "/us_flags/Flag_of_Arizona.svg",
          },
        },
      ],
      [
        {
          body: "I needed specific edibles for my garden, and Garden City had it all. Their local delivery service was a lifesaver. Exceptional service!",
          author: {
            name: "Ethan B.",
            state: "Nevada",
            imageUrl: "/us_flags/Flag_of_Nevada.svg",
          },
        },
        {
          body: "Impressive range of landscaping supplies. Their irrigation system installation service was top-notch. Highly recommend!",
          author: {
            name: "David M.",
            state: "Colorado",
            imageUrl:
              "/us_flags/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg",
          },
        },
      ],
    ],
  ];

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      {/*HEADER START*/}
      <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:py-32 lg:px-8">
        <Image
          src="/header.jpg"
          alt=""
          fill
          className="absolute inset-0 -z-10 size-full object-cover brightness-50"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-black to-black opacity-50"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-black to-black opacity-50"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-green-25 sm:text-6xl">
            Richard&apos;s Garden Center
          </h2>
          <p className="mt-6 text-xl font-medium leading-9 text-green-50">
            Welcome to Garden City Arizona, your trusted partner in gardening
            and landscaping since 1973. We specialize in fruit, citrus, edibles,
            and native plants.
          </p>
          <p className="mt-9 font-display text-3xl font-bold text-green-25 sm:text-5xl">
            CALL US: 623-434-6922
          </p>
        </div>
      </section>
      {/*HEADER END*/}
      {/*MAP + CONTACT START*/}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0">
              <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-lg xl:max-w-none">
                <h2 className="text-center font-display text-lg font-semibold uppercase tracking-wide text-purple-700 md:text-left">
                  Quality, service and selection
                </h2>
                <p className="mt-4 text-center text-3xl font-bold tracking-tight text-green-900 sm:text-4xl md:text-left">
                  Your One-Stop Landscape Solution
                </p>
                <p className="mt-4 text-balance text-center text-lg leading-8 text-green-800 md:text-left">
                  We&apos;re not just about plants. Alongside our vast range of
                  locally-grown greenery, we offer everything for your
                  landscaping needs. This includes installation services for
                  trees, plants, and hard goods, plus repair and installation of
                  irrigation systems. Our expanded product lines now feature
                  barns, chicken coops, greenhouses, and more, making us your
                  comprehensive go-to for outdoor living.
                </p>
              </div>
            </div>
            <div className="h-full shadow-xl md:rounded-xl lg:px-0">
              <div className="mx-auto size-full min-h-96 max-w-3xl md:min-h-0 lg:mx-0 lg:max-w-lg xl:max-w-none">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735216.6528073017!2d-111.87692468468683!3d33.58616498607751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b643426b2c5e9%3A0x1ee95355cee21499!2sRichard&#39;s%20Garden%20Center%2C%20LLC.!5e0!3m2!1spl!2spl!4v1706105500790!5m2!1spl!2spl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full md:rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*MAP + CONTACT END*/}
      {/*/!*FEATURED PRODUCTS START*!/*/}
      {/*/!*FEATURED PRODUCTS END*!/*/}
      {/*TESTIMONIALS START*/}
      <div className="relative isolate pb-32 pt-24 sm:pt-32">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-purple-700">
              Reviews from our clients
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              Over the years we built a lot of trust
            </p>
            <p className="mt-6 text-balance text-xl font-medium leading-8 text-green-800">
              Explore the stories of our satisfied customers. Their feedback is
              a testament to our commitment to quality and service in every
              garden we touch.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 leading-6 text-gray-900 sm:mt-12 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-gray-50 shadow-xl ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="text-balance p-6 pb-2 text-lg font-medium leading-7 tracking-tight text-green-900 sm:p-10 sm:pb-4 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
                <Rating rating={5} big={true} centered={false} />
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-4 px-6 pb-4 sm:flex-nowrap">
                <div className="relative aspect-[4/3] h-12 shadow-lg sm:h-16">
                  <Image
                    src={featuredTestimonial.author.imageUrl}
                    alt={`${featuredTestimonial.author.state} flag`}
                    unoptimized={true}
                    fill
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
                <div className="flex-auto">
                  <div className="text-lg font-semibold text-gray-900 sm:text-xl">
                    {featuredTestimonial.author.name}
                  </div>
                  <div className="text-gray-700 sm:text-lg">{`from ${featuredTestimonial.author.state}`}</div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? "xl:row-span-2"
                        : "xl:row-start-1",
                      "space-y-8",
                    )}
                  >
                    {column.map((testimonial, index) => (
                      <figure
                        key={index}
                        className="rounded-2xl bg-gray-50 p-6 pb-4 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="mb-4 text-balance text-sm leading-6 text-green-900 sm:text-base">
                          <p>{`“${testimonial.body}”`}</p>{" "}
                          <Rating
                            rating={5}
                            centered={false}
                            className="mt-2"
                          />
                        </blockquote>
                        <figcaption className="relative flex items-center gap-x-4">
                          <div className="relative aspect-[4/3] h-10 shadow-md">
                            <Image
                              src={testimonial.author.imageUrl}
                              alt={`${testimonial.author.state} flag`}
                              unoptimized={true}
                              fill
                              className="rounded object-cover shadow-md"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 sm:text-lg">
                              {testimonial.author.name}
                            </div>
                            <div className="text-sm text-gray-600 sm:text-base">{`from ${testimonial.author.state}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*TESTIMONIALS END*/}
    </>
  );
}
