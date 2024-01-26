import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries/get-dictionary";
import FeaturedPlants, { PlantsArray } from "@/app/components/featured-plants";
import Reviews, { ReviewsArray } from "@/app/components/reviews";
import { FeaturesArray } from "@/app/components/features";
import {
  GlobeEuropeAfricaIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import About from "@/app/components/about/about";
import Hero from "@/app/components/hero";
export default async function Template({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  const features: FeaturesArray = [
    {
      title: "Plant Variety",
      description:
        "Explore our wide selection of plants, from local varieties to exotic species, perfect for any garden style. Our collection caters to all preferences, ensuring you find just what you need for your unique landscape.",
      icon: GlobeEuropeAfricaIcon,
    },
    {
      title: "Landscaping Services",
      description:
        "Our comprehensive landscaping services cover everything from garden installation to irrigation system maintenance. Trust our expertise to keep your outdoor spaces thriving and beautiful throughout the year.",
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "Outdoor Enhancements",
      description:
        "Elevate your outdoor space with our range of barns, chicken coops, and greenhouses. Each product is designed to enhance your garden's functionality and aesthetic, creating the perfect backyard retreat",
      icon: HomeModernIcon,
    },
  ];

  const plants: PlantsArray = [
    {
      id: 1,
      link: "/products/bonsai-ginsend-focus",
      name: `Bonsai "Ginseng Ficus"`,
      price: 840,
      image: "/bonsai-1.jpg",
    },
    {
      id: 2,
      link: "/products/bonsai-jasmine",
      name: `Bonsai "Jasmine"`,
      price: 1200,
      image: "/bonsai-2.jpg",
    },
    {
      id: 3,
      link: "/products/bonsai-chinese-juniper",
      name: `Bonsai "Chinese Juniper"`,
      price: 350,
      image: "/bonsai-3.jpg",
    },
    {
      id: 4,
      link: "/products/bonsai-viburnum",
      name: `Bonsai "Viburnum"`,
      price: 600,
      image: "/bonsai-4.jpg",
    },
  ];

  const reviews: ReviewsArray = [
    [
      [
        {
          text: "Visited Garden City in Phoenix and was amazed by their selection, especially the fruit trees. The staff were knowledgeable and helpful, guiding me to the perfect choices for my garden. I also appreciated their efficient installation service for my new drip system. Fair prices and great service – they've earned a repeat customer in me!",
          rating: 5,
          author: {
            name: "Emily T.",
            state: "Utah",
          },
          featured: true,
        },
        {
          text: "Amazing variety of cacti and native plants! The staff was incredibly helpful in guiding me through my xeriscape project. Highly recommend!",
          rating: 5,
          author: {
            name: "Mike J.",
            state: "Texas",
          },
        },
        {
          text: "Drove from California for their unique selection of tropical plants. Totally worth the trip! The staff's knowledge and passion really shine through.",
          rating: 5,
          author: {
            name: "Sarah D.",
            state: "California",
          },
        },
      ],
      [
        {
          text: "Been a regular since 2015. The quality of fruit trees here is unmatched, and the prices are always fair. A true gem in Phoenix!",
          rating: 5,
          author: {
            name: "Linda R.",
            state: "New Mexico",
          },
        },
      ],
    ],
    [
      [
        {
          text: "Loved the variety of fruit trees. Bought a couple of citrus trees, and they're thriving. Excellent quality and prices.",
          rating: 5,
          author: {
            name: "Karen P.",
            state: "Arizona",
          },
        },
      ],
      [
        {
          text: "I needed specific edibles for my garden, and Garden City had it all. Although their local delivery service was a little late and prices could be better.",
          rating: 4,
          author: {
            name: "Ethan B.",
            state: "Nevada",
          },
        },
        {
          text: "Impressive range of landscaping supplies. Their irrigation system installation service was top-notch. Highly recommend!",
          rating: 5,
          author: {
            name: "David M.",
            state: "Colorado",
          },
        },
      ],
    ],
  ];

  return (
    <>
      <Hero
        title="Garden City Arizona"
        description="Welcome to Richard's Garden Center, your trusted partner in gardening and landscaping since 1973. We specialize in fruit, citrus, edibles, and native plants."
        number={16234346922}
      />
      <About
        subtitle="Quality, service and selection"
        title="Your One-Stop Landscape Solution"
        description="We're not just about plants. Alongside our vast range of locally-grown greenery, we offer everything for your landscaping needs. This includes installation services for trees, plants, and hard goods, plus repair and installation of irrigation systems. Our expanded product lines now feature barns, chicken coops, greenhouses, and more, making us your comprehensive go-to for outdoor living."
        google_maps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735216.6528073017!2d-111.87692468468683!3d33.58616498607751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b643426b2c5e9%3A0x1ee95355cee21499!2sRichard&#39;s%20Garden%20Center%2C%20LLC.!5e0!3m2!1spl!2spl!4v1706105500790!5m2!1spl!2spl"
        features={features}
      />
      <FeaturedPlants
        title="Garden City Bonsais"
        description="Our bonsai trees are more than just plants; they're symbols of harmony and patience. From petite wonders perfect for your desk to majestic larger specimens that command the space in your garden or the biggest room in your house, explore our exclusive range and find the perfect miniature tree to enhance any area of your home or office."
        plants={plants}
      />
      <Reviews
        subtitle="Reviews from our clients"
        title="Over the years we built a lot of trust"
        description="Explore the stories of our satisfied customers. Their feedback is a testament to our commitment to quality and service in every garden we touch."
        reviews={reviews}
      />
    </>
  );
}
