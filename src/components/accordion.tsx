"use client";

import React, { createContext, useContext, useState } from "react";

interface AccordionContextValue {
  openValue: string | null;
  toggleValue: (value: string) => void;
  collapsible: boolean;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined
);

interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Accordion({
  type = "single",
  collapsible = false,
  className = "",
  children,
}: AccordionProps) {
  const [openValue, setOpenValue] = useState<string | null>(null);

  const toggleValue = (value: string) => {
    if (type === "single") {
      setOpenValue((prev) => (prev === value && collapsible ? null : value));
    }
  };

  return (
    <AccordionContext.Provider value={{ openValue, toggleValue, collapsible }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const isOpen = context.openValue === value;

  return (
    <div className="border-b border-neutral-200" data-value={value}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{
              isOpen?: boolean;
              onToggle?: () => void;
            }>,
            {
              isOpen,
              onToggle: () => context.toggleValue(value),
            }
          );
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionTrigger({
  children,
  className = "",
  isOpen = false,
  onToggle,
}: AccordionTriggerProps) {
  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center justify-between py-4 px-2 text-left transition-colors ${className}`}
    >
      {children}
      <svg
        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-2 ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

export function AccordionContent({
  children,
  isOpen = false,
}: AccordionContentProps) {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-2 pb-4 text-neutral-600">{children}</div>
    </div>
  );
}
