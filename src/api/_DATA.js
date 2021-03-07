const products = [
  {
    Id: "170e64cc-2b71-440e-94fe-90c98cb24abc",
    Name: "Port Ellen 21yr",
    Description: "21 year old sherry cask Port Ellen",
    Categories: [
      {
        Id: "ad327ca5-ec10-4051-9b05-43ebaa3157ce",
        Name: "Whisky",
      },
      {
        Id: "9f4b3e22-a369-4fb7-9832-cf83f0bc3663",
        Name: "Scotch",
      },
    ],
    SKU: "PORTELLEN21SHRY",
    Prices: [
      {
        Id: "0efe1c1a-5e9e-4997-8fd8-3facf8092a2a",
        Retailer: {
          Id: "e417d0b1-9cdf-48be-92b5-cf78a0eaa5d3",
          Name: "Omnia",
        },
        Price: 1000,
        Tier: 1,
        UpdateTime: "2019-03-08T08:56:24.9171117+01:00",
      },
    ],
  },
];

export const _getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...products }), 1000);
  });
};
