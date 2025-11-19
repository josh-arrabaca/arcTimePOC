import { cn } from "@/lib/utils";

export const AppLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={cn("fill-current", className)}
    >
      <path d="M2,28.5L8,28.5L8,24.1L18.7,4.3L26,24.1L26,28.5L32,28.5L32,22.1L20.2,1.5L12.8,1.5L2,21.6L2,28.5Z" />
    </svg>
  );
};
