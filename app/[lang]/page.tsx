import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { StarIcon } from "@heroicons/react/20/solid";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return <h1>{dictionary.hello}</h1>;
}
