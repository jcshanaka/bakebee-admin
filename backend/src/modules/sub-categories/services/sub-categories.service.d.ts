import { CreateSubCategoryBody, SetSubCategoryActiveBody, UpdateSubCategoryBody } from "../dtos/sub-categories.dto";
export declare class SubCategoriesService {
    private readonly subCategoriesRepository;
    list(): import(".prisma/client").Prisma.PrismaPromise<({
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
    getById(id: string): Promise<{
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
    }>;
    create(body: CreateSubCategoryBody): import(".prisma/client").Prisma.Prisma__SubCategoryClient<{
        id: string;
        is_active: boolean;
        sub_category_name: string;
        main_category_id: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, body: UpdateSubCategoryBody): Promise<{
        id: string;
        is_active: boolean;
        sub_category_name: string;
        main_category_id: string;
    }>;
    setActive(id: string, body: SetSubCategoryActiveBody): Promise<{
        id: string;
        is_active: boolean;
        sub_category_name: string;
        main_category_id: string;
    }>;
}
//# sourceMappingURL=sub-categories.service.d.ts.map