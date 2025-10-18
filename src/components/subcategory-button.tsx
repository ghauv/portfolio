"use client";

import { CATEGORIES_CONFIG } from "@/types/types";
import { Focus, SubCategory } from "@/types/types";

interface SubCategoryButtonsProps {
  focus: Focus;
  activeSubCategory: SubCategory;
  onSubCategoryChange: (subCategory: SubCategory) => void;
}

export default function SubCategoryButtons({
  focus,
  activeSubCategory,
  onSubCategoryChange,
}: SubCategoryButtonsProps) {
  const subCategories = CATEGORIES_CONFIG[focus];

  return (
    <div className="flex gap-2 flex-wrap">
      {subCategories.map((subCat) => (
        <button
          key={subCat.id}
          onClick={() => onSubCategoryChange(subCat.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-al transition-colors ${
            activeSubCategory === subCat.id
              ? "bg-foreground text-white"
              : "bg-neutral-100 text-gray-800 hover:bg-neutral-200"
          }`}
        >
          {subCat.label}
        </button>
      ))}
    </div>
  );
}
