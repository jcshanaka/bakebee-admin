import { Prisma } from "@prisma/client";
export declare class SubCategoriesRepository {
    list(): Prisma.PrismaPromise<({
        main_category: {
            id: string;
            category_name: string;
            is_active: boolean;
        };
    } & {
        id: string;
        is_active: boolean;
        sub_category_name: string;
        main_category_id: string;
    })[]>;
    getById(id: string): Prisma.Prisma__SubCategoryClient<({
        main_category: {
            id: string;
            category_name: string;
            is_active: boolean;
        };
    } & {
        id: string;
        is_active: boolean;
        sub_category_name: string;
        main_category_id: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    create(data: {
        sub_category_name: string;
        main_category_id: string;
    }): Prisma.Prisma__SubCategoryClient<{
        id: string;
        is_active: boolean;
        sub_category_name: string;
        main_category_id: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(id: string, data: {
        sub_category_name?: string | undefined;
        main_category_id?: string | undefined;
    }): Prisma.Prisma__SubCategoryClient<{
        id: string;
        is_active: boolean;
        sub_category_name: string;
        main_category_id: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    setActive(id: string, is_active: boolean): Prisma.Prisma__SubCategoryClient<{
        id: string;
        is_active: boolean;
        sub_category_name: string;
        main_category_id: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}
//# sourceMappingURL=sub-categories.repository.d.ts.map