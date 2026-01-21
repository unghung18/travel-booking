import { FaStar } from "react-icons/fa";

type props = {
  rating: number;
};
const RatingStart = ({ rating }: props) => {
  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const currentRating = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              style={{ display: "none" }}
            />
            <FaStar
              size={14}
              color={currentRating <= rating ? "#1EC6B6" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStart;
