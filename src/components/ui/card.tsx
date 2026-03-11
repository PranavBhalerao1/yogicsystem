import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "section-panel flex flex-col gap-3 rounded-[1.25rem] px-6 py-5",
          className
        )}
        {...props}
      >
        {title && <h3 className="text-lg font-semibold text-earth-800">{title}</h3>}
        {description && <p className="text-sm text-earth-600">{description}</p>}
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
