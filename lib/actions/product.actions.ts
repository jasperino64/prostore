import { prisma } from "../prisma";
import { prismaToJson } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
// Get latest products
export async function getLatestProducts(limit: number = LATEST_PRODUCTS_LIMIT) {
    const data = await prisma.product.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take: limit,
    });
    return prismaToJson(data);
}
