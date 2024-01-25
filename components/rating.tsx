import { StarIcon } from "@heroicons/react/20/solid";
export default function Rating({
  rating,
  centered = true,
  big = false,
  className,
}: {
  rating: number;
  centered?: boolean;
  big?: boolean;
  className?: string;
}) {
  return (
    <div>
      <p className="sr-only">{`${rating} out of 5 stars`}</p>
      <div
        className={`flex ${big ? "gap-x-1" : "gap-x-0.5"} ${centered ? "justify-center" : "justify-end"} ${className}`}
      >
        {[...Array(5)].map((_, index) => (
          <StarIcon
            className={`${big ? "size-6" : "size-5"} flex-none ${index < rating ? "text-green-500" : "text-green-100"}`}
            key={index}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
