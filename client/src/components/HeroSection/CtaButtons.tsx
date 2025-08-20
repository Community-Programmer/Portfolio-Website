import type { CTA } from '@/types/types';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import DynamicIcon from '../DynamicIcon/DynamicIcon';



const CtaButtons: React.FC<{ ctas: CTA[] }> = ({ ctas = [],  }) => {
  return (
    <div
        className={"flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"}
        style={{ animationDelay: "0.2s" }}
    >
      {ctas.map((cta, index) => {
        const isPrimary = cta.variant === "primary";

        const baseStyles =
          "px-8 py-6 text-lg font-medium transition-all duration-300 group flex items-center justify-center";
        const primaryStyles =
          "bg-[var(--portfolio-primary)] hover:bg-[var(--portfolio-accent)] text-white transform hover:scale-105 hover:shadow-lg";
        const outlineStyles =
          "border-[var(--portfolio-primary)] text-[var(--portfolio-primary)] hover:bg-[var(--portfolio-primary)] hover:text-white bg-transparent border";

        const buttonClass = `${baseStyles} ${
          isPrimary ? primaryStyles : outlineStyles
        }`;

        const iconClass =
          cta.iconPosition === "left"
            ? "mr-2 w-5 h-5 transition-transform group-hover:translate-y-1"
            : "ml-2 w-5 h-5 transition-transform group-hover:translate-x-1";

        return (
         <Link
            key={index}
            to={cta.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={buttonClass} size="lg">
              {cta.icon && cta.iconPosition === "left" && (
                <DynamicIcon iconName={cta.icon} className={iconClass} />
              )}
              {cta.text}
              {cta.icon && cta.iconPosition === "right" && (
                <DynamicIcon iconName={cta.icon} className={iconClass} />
              )}
            </Button>
          </Link>
        );
      })}
    </div>
  )
}

export default CtaButtons