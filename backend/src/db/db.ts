import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const createPrismaClient = (datasourceUrl: string) => {
    return new PrismaClient({
        datasourceUrl: datasourceUrl,
    }).$extends(withAccelerate());
};

export default createPrismaClient;
