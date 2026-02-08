-- CreateTable
CREATE TABLE "Category" (
    "id" UUID NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" UUID NOT NULL,
    "sub_category_name" TEXT NOT NULL,
    "main_category_id" UUID NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_main_category_id_fkey" FOREIGN KEY ("main_category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
