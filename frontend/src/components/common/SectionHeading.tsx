
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "space-y-2 mb-8",
        centered && "text-center",
        className
      )}
    >
      <h2 className="font-bold text-balance">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
