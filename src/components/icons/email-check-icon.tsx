export default function EmailCheckIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-mail-check"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
      <path d="M3 7l9 6l9 -6" />
      <path d="M15 19l2 2l4 -4" />
    </svg>
  );
}