import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const fetchReviews = async () => {
  const response = await fetch(
    "https://dummyjson.com/products?limit=10&skip=10&select=reviews"
  );
  const data = await response.json();
  return data.products.flatMap((p) => p.reviews);
};

const Reviews = () => {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });
  const navigate = useNavigate();

  if (isLoading) return <p className="text-black">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center w-screen mt-4 bg-white">
      <div className="bg-purple-700 md:text-xl text-[1rem] font-semibold p-6 rounded-2xl w-[100vw] lg:w-[90vw] flex-wrap flex items-center justify-center lg:justify-between gap-6 text-white ">
        <p>1209 people are creating their Resume right now</p>
        <p className="text-center w-fit rounded-2xl text-[1rem] bg-[#05A2FF] text-white p-2"
        onClick={()=>navigate("/createcv")}
        >
          Create My Resume
        </p>
      </div>

      <div className="mt-6 w-full overflow-hidden">
        <h1 className="text-center mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold">
          What are our customers saying?
        </h1>

\        <div className="relative w-full overflow-hidden ">
          <div className="flex gap-6 animate-slide whitespace-nowrap">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[350px] bg-purple-700  shadow-lg rounded-xl p-4 text-white"
              >
                <p className="font-semibold">{r.reviewerName}</p>
                <p className="text-sm mt-2">{r.comment}</p>
                <p className="text-white mt-2">⭐ {r.rating}</p>
              </div>
            ))}

            {reviews.map((r, i) => (
              <div
                key={`copy-${i}`}
                className="min-w-[300px] max-w-[350px] bg-[#f5f5f5] shadow-lg rounded-xl p-4 text-white"
              >
                <p className="font-semibold">{r.reviewerName}</p>
                <p className="text-sm mt-2">{r.comment}</p>
                <p className="text-white mt-2">⭐ {r.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .animate-slide {
          display: flex;
          animation: slide 5s linear infinite;
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Reviews;
