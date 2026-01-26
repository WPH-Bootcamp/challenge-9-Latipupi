function ReviewCard(review :{name?: string, date?: string, star?: number, comment?: string, avatar?: string}) {
    const rating = review?.star || 0;
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-5">
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <img
          src={review?.avatar}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <p className="font-medium">{review?.name}</p>
          <p className="text-xs text-gray-500">
            {review?.date}
          </p>
        </div>
      </div>

      {/* RATING */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: rating  }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>

      {/* COMMENT */}
      <p className="text-sm text-gray-600 mt-2">
        {review?.comment}
      </p>
    </div>
  );
}
export default ReviewCard;