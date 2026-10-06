import { prisma } from "../lib/prisma";
import sampleData from "./sample-data";

async function main() {
    await prisma.product.deleteMany();
    await prisma.product.createMany({
        data: sampleData.products,
    });
    console.log("Database has been seeded successfully.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
