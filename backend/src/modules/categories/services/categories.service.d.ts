import { CreateCategoryBody, SetCategoryActiveBody, UpdateCategoryBody } from "../dtos/categories.dto";
export declare class CategoriesService {
    private readonly categoriesRepository;
    list(): import(".prisma/client").Prisma.PrismaPromise<({
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
    getById(id: string): Promise<{
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
    }>;
    create(body: CreateCategoryBody): import(".prisma/client").Prisma.Prisma__CategoryClient<{
        id: string;
        category_name: string;
        is_active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, body: UpdateCategoryBody): Promise<{
        id: string;
        category_name: string;
        is_active: boolean;
    }>;
    setActive(id: string, body: SetCategoryActiveBody): Promise<{
        id: string;
        category_name: string;
        is_active: boolean;
    }>;
}
//# sourceMappingURL=categories.service.d.ts.map