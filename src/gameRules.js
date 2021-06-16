const rules = [
  {
    id: 1,
    status: true,
    cost: 10,
    type: "perClick",
    title: "Drink Dark-Side Blend coffee",
    description: "Doubles planets destroyed per click for 10 planets",
    update: (planetPerClick) => planetPerClick * 2,
  },
  {
    id: 2,
    status: true,
    cost: 30,
    type: "perClick",
    title: "Force choke an annoying admiral",
    description: "Triples planets destroyed per click for 30 planets",
    update: (planetPerClick) => planetPerClick * 3,
  },
  {
    id: 3,
    status: true,
    cost: 70,
    type: "perClick",
    title: "Increase Superlaser Power",
    description: "Quadruples planets destroyed per click for 70 planets",
    update: (planetPerClick) => planetPerClick * 4,
  },
  {
    id: 4,
    status: true,
    cost: 50,
    type: "perSecond",
    title: "Call TIE Fighter",
    description: "Destroys 2 planets per second for 50 planets",
    update: (planetPerSecond) => planetPerSecond * 2,
  },
];
export default rules;
