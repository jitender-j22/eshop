export interface Category {
  hasSubCategory: number,
  title: string;
  description: string;
  images: string;
  subCategories:Category[];
  checked:boolean;
}
