import { Prisma } from "@prisma/client";
export declare class CategoriesRepository {
    list(): Prisma.PrismaPromise<({
        sub_categories: {
            id: string;
            is_active: boolean;
            sub_category_name: string;
            main_category_id: string;
        }[];
    } & {
        id: string;
        category_name: string;
        is_active: boolean;
    })[]>;
    getById(id: string): Prisma.Prisma__CategoryClient<({
        sub_categories: {
            id: string;
            is_active: boolean;
            sub_category_name: string;
            main_category_id: string;
        }[];
    } & {
        id: string;
        category_name: string;
        is_active: boolean;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    create(data: {
        category_name: string;
    }): Prisma.Prisma__CategoryClient<{
        id: string;
        category_name: string;
        is_active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(id: string, data: {
        category_name?: string | undefined;
    }): Prisma.Prisma__CategoryClient<{
        id: string;
        category_name: string;
        is_active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    setActive(id: string, is_active: boolean): Prisma.Prisma__CategoryClient<{
        id: string;
        category_name: string;
        is_active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}
//# sourceMappingURL=categories.repository.d.ts.map