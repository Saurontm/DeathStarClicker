const rules = [
  {
    id: 1,
    status: true,
    cost: 10,
    type: "perClick",
    title: "Drink Dark-Side Blend coffee",
    description: "Doubles planets destroyed per click",
    update: (planetPerClick) => planetPerClick * 2,
  },
  {
    id: 2,
    status: true,
    cost: 30,
    type: "perClick",
    title: "Force choke an annoying admiral",
    description: "Triples planets destroyed per click",
    update: (planetPerClick) => planetPerClick * 3,
  },
  {
    id: 2,
    status: true,
    cost: 50,
    type: "perClick",
    title: "Increase Superlaser Power",
    description: "Quadruples planets destroyed per click",
    update: (planetPerClick) => planetPerClick * 4,
  },
];
export default rules;
