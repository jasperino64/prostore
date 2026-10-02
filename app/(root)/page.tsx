import React from "react";
import { Metadata } from "next";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export const metadata: Metadata = {
    title: "Home",
    description: "A modern e-commerce store built with Next.js.",
};
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = () => {
    // await delay(2000); // Simulate a delay
    console.log("Rendering Homepage with sample data:", sampleData);
    return <ProductList data={sampleData.products} title="New Arrivals" limit={4} />;
};

export default Homepage;
