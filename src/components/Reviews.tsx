import { StarIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

export interface ReviewsProps {
  averageRating?: number;
  reviewCount?: number;
}

export const initialProps: ReviewsProps = {
  averageRating: 5,
  reviewCount: 1995,
};

const Reviews = ({ averageRating, reviewCount }: ReviewsProps) => {
  return (
    <div className="ml-4 border-l border-gray-300 pl-4">
      <h2 className="sr-only">Reviews</h2>
      <div className="flex items-center">
        <div>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={twMerge(
                  rating < (averageRating || 5)
                    ? "text-yellow-400"
                    : "text-gray-300",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        <p className="ml-2 text-sm text-gray-500">{reviewCount} reviews</p>
      </div>
    </div>
  );
};

export default Reviews;
