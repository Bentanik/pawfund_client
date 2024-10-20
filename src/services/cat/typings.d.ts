declare namespace REQUEST {
  type TCreateCat = {
    catName: string;
    age: string;
    sex: int;
    weight: number;
    breed: string;
    description: string;
    color: string;
    images: File[];
  };
}

declare namespace API {}
