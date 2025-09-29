// components/TestimonialCard.tsx
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  image: string;
  name: string;
  location: string;
  review: string;
  rating?: number;
}

export default function TestimonialCard({
  image,
  name,
  location,
  review,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 relative max-w-md mx-auto">
      {/* Profile Image */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
      </div>

      {/* Review Content */}
      <div className="mt-10 text-gray-600 text-sm leading-relaxed">
        “{review}”
      </div>

      {/* Footer */}
      <div className="mt-6 border-t pt-4 flex items-center justify-between">
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
        <div className="flex items-center gap-1 text-purple-500">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
      </div>
    </div>
  );
}
