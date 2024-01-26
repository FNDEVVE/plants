import Image from "next/image";
import { formatPhoneNumber } from "@/app/components/util";

export default function Hero({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: number;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 shadow-2xl sm:py-32">
      <Image
        src="/header.jpg"
        alt=""
        fill
        sizes="100vw"
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
        <h1 className="mb-4 font-display text-5xl/normal font-bold uppercase tracking-tight text-green-25 sm:text-6xl/normal">
          {title}
        </h1>
        <p className="mb-8 text-xl/relaxed font-medium text-green-50">
          {description}
        </p>
        <a
          href={`tel:+${number}`}
          className="font-display text-4xl font-black uppercase tracking-wide text-green-25 sm:text-5xl"
        >
          {"☎️ "}
          {formatPhoneNumber(number)}
        </a>
      </div>
    </section>
  );
}
