import Image from "next/image";

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-slate-400">Image Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            key={index}
          >
            <img
              src={`https://img-optmize.aiji42.com?blur=1&minimize=1&polish=1&src=https://picsum.photos/seed/${
                index * 10
              }/2400/1600`}
              alt="Image"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
