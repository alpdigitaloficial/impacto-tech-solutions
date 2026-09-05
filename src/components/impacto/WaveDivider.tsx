export function WaveDivider({ className = "text-section" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 72"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 -top-8 h-8 w-full ${className}`}
      aria-hidden
    >
      <path d="M0 34C190 70 376 66 566 30c226-43 425-39 618 2 99 21 184 23 256 9v31H0Z" fill="currentColor" />
    </svg>
  );
}