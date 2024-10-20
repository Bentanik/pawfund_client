declare namespace REQUEST {
  type TCreateCat = {
    catName: string;
    age: string;
    sex: string;
    weight: number;
    breed: string;
    description: string;
    color: string;
    images: File[];
  };
}

declare namespace API {}
