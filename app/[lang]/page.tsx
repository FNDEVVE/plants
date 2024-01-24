import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { StarIcon } from "@heroicons/react/20/solid";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">{`5 ${dictionary.of} 5 ${dictionary.stars}`}</p>
        <div className="flex gap-x-1 text-indigo-600">
          <StarIcon className="size-5 flex-none" aria-hidden="true" />
          <StarIcon className="size-5 flex-none" aria-hidden="true" />
          <StarIcon className="size-5 flex-none" aria-hidden="true" />
          <StarIcon className="size-5 flex-none" aria-hidden="true" />
          <StarIcon className="size-5 flex-none" aria-hidden="true" />
        </div>
        <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
          <p>{`“${dictionary.review}”`}</p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-12 rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
            alt=""
          />
          <div className="text-sm leading-6">
            <div className="font-semibold text-gray-900">
              {dictionary.author}
            </div>
            <div className="mt-0.5 text-gray-600">{dictionary.position}</div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
