import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries/get-dictionary";
import Image from "next/image";
export default async function Template({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
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
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-gray-50 sm:text-6xl">
            Richard&apos;s Garden Center
          </h2>
          <p className="mt-6 text-xl font-medium leading-9 text-gray-100">
            Welcome to Garden City Arizona, your trusted partner in gardening
            and landscaping since 1973. We specialize in fruit, citrus, edibles,
            and native plants.
          </p>
          <p className="mt-9 font-display text-3xl font-bold text-gray-50 sm:text-5xl">
            CALL US: 623-434-6922
          </p>
        </div>
      </section>
      {/*HEADER END*/}
      {/*MAP + CONTACT START*/}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="sm:px-6 lg:px-0">
              <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-lg xl:max-w-none">
                <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-purple-700">
                  Quality, service, and selection
                </h2>
                <p className="mt-4 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                  Your One-Stop Landscape Solution
                </p>
                <p className="mt-4 text-lg leading-8 text-green-800">
                  We&apos;re not just about plants. Alongside our vast range of
                  locally-grown greenery, we offer everything for your
                  landscaping needs. This includes installation services for
                  trees, plants, and hard goods, plus repair and installation of
                  irrigation systems. Our expanded product lines now feature
                  barns, chicken coops, greenhouses, and more, making us your
                  comprehensive go-to for outdoor living. Trust us to bring your
                  vision to life with ease and expertise.
                </p>
              </div>
            </div>
            <div className="h-full shadow-xl sm:rounded-xl sm:px-6 lg:px-0">
              <div className="mx-auto size-full min-h-64 max-w-3xl sm:min-h-0 lg:mx-0 lg:max-w-lg xl:max-w-none">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735216.6528073017!2d-111.87692468468683!3d33.58616498607751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b643426b2c5e9%3A0x1ee95355cee21499!2sRichard&#39;s%20Garden%20Center%2C%20LLC.!5e0!3m2!1spl!2spl!4v1706105500790!5m2!1spl!2spl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full sm:rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*MAP + CONTACT END*/}
    </>
  );
}
