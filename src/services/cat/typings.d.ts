declare namespace REQUEST {
  type TGetCats = {
    pageIndex: number;
    pageSize?: number;
    catName?: string;
    age?: string;
    sex?: string;
    // breed: string;
    color?: string;
    sterilization?: string;
  };

  type TCreateCat = {
    catName: string;
    age: string;
    sex: int;
    weight: number;
    breed: string;
    description: string;
    color: string;
    images: File[];
    sterilization: boolean;
  };

  type TGetCat = {
    Id: string;
  };
}

declare namespace API {
  type CatImage = {
    imageUrl: string;
    publicImageId: string;
  };

  type CatAdopt = {
    id: string;
    name: string;
    age: string;
    breed: string;
    color: string;
    description: string;
    sterilization: boolean;
    sex: number;
    imageCats: CatImage[];
  };

  type TGetCats = {
    items: CatAdopt[];
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };

  type TGetCat = {
    id: string;
    sex: "Male" | "Female";
    name: string;
    age: string;
    breed: string;
    weight: number;
    color: string;
    description: string;
    images: string[];
  };
}
