export interface Category {
  _id: string,
  hasSubCategory: number,
  title: string;
  description: string;
  images: string;
  subCategories:Category[];
  checked:boolean;
}
