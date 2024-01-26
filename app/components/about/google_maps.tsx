export default function GoogleMaps({ url }: { url: string }) {
  return (
    <div className="mx-auto size-full max-w-3xl shadow-xl md:rounded-xl lg:px-0">
      <div className="mx-auto size-full min-h-96 lg:mx-0 lg:min-h-0 lg:max-w-3xl xl:max-w-none">
        <iframe
          src={url}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="size-full md:rounded-xl"
        />
      </div>
    </div>
  );
}
