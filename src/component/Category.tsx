import React from "react";
import CategoryCard from "./Card";
import { CATEGORY_ITEMS } from "@/constant/constant";

const Category: React.FC = () => {
  return (
    <section id="categories" className="w-full px-4 py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-[600] text-gray-700 mb-8 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CATEGORY_ITEMS.map((item, index) => (
            <CategoryCard
              key={item.id}
              Icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
