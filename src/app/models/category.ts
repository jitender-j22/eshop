export interface Category {
  id: number;
  parentId: number;
  hasSubCategory: number,
  title: string;
  description: string;
  images: string;
  subCategories:Category[];
} 

export const Categories: Category[] = [
  { id: 11,
    parentId: 0,
    hasSubCategory: 1,
    title: 'Sportswear',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images:'product11',
    subCategories:[
      { id: 12,
        parentId: 11,
        hasSubCategory: 0,
        title: 'Nike',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images:'product11',
        subCategories:[]
      },
      { id: 13,
        parentId: 11,
        hasSubCategory: 0,
        title: 'Adidas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images:'product11',
        subCategories:[]
      },
      { id: 14,
        parentId: 11,
        hasSubCategory: 0,
        title: 'Puma',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images:'product11',
        subCategories:[]
      }
    ]
  },
  { id: 15,
    parentId: 0,
    hasSubCategory: 1,
    title: 'Mens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images:'product11',
    subCategories:[
      { id: 16,
        parentId: 15,
        hasSubCategory: 0,
        title: 'Guess',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images:'product11',
        subCategories:[]
      },
      { id: 17,
        parentId: 15,
        hasSubCategory: 0,
        title: 'Dior',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images:'product11',
        subCategories:[]
      },
      { id: 18,
        parentId: 15,
        hasSubCategory: 0,
        title: 'Armani',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images:'product11',
        subCategories:[]
      }
    ]
  },
  { id: 19,
    parentId: 0,
    hasSubCategory: 1,
    title: 'Womens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images:'product11',
    subCategories:[
      { id: 20,
        parentId: 19,
        hasSubCategory: 0,
        title: 'Fendi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images:'product11',
        subCategories:[]
      },
      { id: 21,
        parentId: 19,
        hasSubCategory: 0,
        title: 'Valentino',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images:'product11',
        subCategories:[]
      },
      { id: 22,
        parentId: 19,
        hasSubCategory: 0,
        title: 'Versace',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images:'product11',
        subCategories:[]
      }
    ]
  },
  { id: 23,
    parentId: 0,
    hasSubCategory: 0,
    title: 'Fashion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images:'product11',
    subCategories:[]
  },
  { id: 24,
    parentId: 0,
    hasSubCategory: 0,
    title: 'Households',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images:'product11',
    subCategories:[]
  },
  { id: 25,
    parentId: 0,
    hasSubCategory: 0,
    title: 'Bags',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images:'product11',
    subCategories:[]
  },
  { id: 26,
    parentId: 0,
    hasSubCategory: 0,
    title: 'Shoes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images:'product11',
    subCategories:[]
  },
];
