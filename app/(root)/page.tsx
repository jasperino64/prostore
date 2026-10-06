import React from "react";
import { Metadata } from "next";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata: Metadata = {
    title: "Home",
    description: "A modern e-commerce store built with Next.js.",
};
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
    // await delay(2000); // Simulate a delay
    const latestProducts = await getLatestProducts();
    return <ProductList data={latestProducts} title="New Arrivals" />;
};

export default Homepage;
