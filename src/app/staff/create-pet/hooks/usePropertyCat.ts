export default function usePropertyCat() {
  const sexProperties = [
    {
      id: "1",
      value: "Male",
    },
    {
      id: "2",
      value: "FMale",
    },
  ];
  const breedProperties = [
    { id: "1", value: "British Shorthair" },
    { id: "2", value: "Persian" },
    { id: "3", value: "Siamese" },
    { id: "4", value: "Maine Coon" },
    { id: "5", value: "Sphynx" },
    { id: "6", value: "Ragdoll" },
    { id: "7", value: "Bengal" },
    { id: "8", value: "Scottish Fold" },
    { id: "9", value: "Abyssinian" },
    { id: "10", value: "Birman" },
  ];
  const colorProperties = [
    { id: "1", value: "Gray" },
    { id: "2", value: "White" },
    { id: "3", value: "Cream with Dark Points" },
    { id: "4", value: "Brown Tabby" },
    { id: "5", value: "Pinkish or Skin Tones" },
    { id: "6", value: "Seal or Blue" },
    { id: "7", value: "Golden Brown with Black Spots" },
    { id: "8", value: "Gray or Blue" },
    { id: "9", value: "Ruddy or Red" },
    { id: "10", value: "Cream with Dark Points" },
  ];
  return { sexProperties, breedProperties, colorProperties };
}
