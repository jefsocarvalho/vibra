"use client";

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-lavender-500 text-white shadow-glow hover:bg-lavender-600 focus-visible:outline-lavender-500",
        secondary: "bg-gold-200 text-lavender-900 hover:bg-gold-300 focus-visible:outline-gold-400",
        ghost: "border border-lavender-200 bg-white/60 text-lavender-700 hover:bg-white focus-visible:outline-lavender-400"
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return <Component className={cx(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";
