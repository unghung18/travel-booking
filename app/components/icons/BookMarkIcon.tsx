export const BookmarkIcon = ({
  size = 32,
  color = "#ff4d4f",
  className = "",
}) => (
  <div className={className}>
    <svg width={size} height={size * 1.25} viewBox="0 0 32 40">
      <path
        d="M6 2 C4 2 2 4 2 6 V36 L16 28 L30 36 V6 C30 4 28 2 26 2 Z"
        fill={color}
      />
    </svg>
  </div>
);
