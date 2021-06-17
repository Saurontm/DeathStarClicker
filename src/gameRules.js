const rules = [
  {
    id: 1,
    status: true,
    cost: 10,
    type: "perClick",
    title: "Drink Dark-Side Blend coffee",
    description: "Doubles planets destroyed per click for 10 Galactic Credits",
    update: (planetPerClick) => planetPerClick * 2,
  },
  {
    id: 2,
    status: true,
    cost: 50,
    type: "perClick",
    title: "Force choke an annoying admiral",
    description: "Triples planets destroyed per click for 30 Galactic Credits",
    update: (planetPerClick) => planetPerClick * 3,
  },
  {
    id: 3,
    status: true,
    opens: 9,
    cost: 70,
    type: "perClick",
    title: "Increase Superlaser Power",
    description:
      "Quadruples planets destroyed per click for 70 Galactic Credits",
    update: (planetPerClick) => planetPerClick * 4,
  },
  {
    id: 4,
    opens: 7,
    status: true,
    cost: 100,
    type: "perSecond",
    title: "Call TIE Fighter",
    description: "Destroys 2 planets per second for 50 Galactic Credits",
    update: (planetPerSecond) => planetPerSecond + 2,
  },
  {
    id: 5,
    status: true,
    opens: 8,
    cost: 200,
    type: "perSecond",
    title: "Call Command Cruiser",
    description: "Destroys 4 more planets per second for 100 Galactic Credits",
    update: (planetPerSecond) => planetPerSecond + 4,
  },
  {
    id: 6,
    status: true,
    cost: 1000,
    type: "perSecond",
    title: "Call Star Destroyer",
    description:
      "Destroys 10 more planets per second for 1000 Galactic Credits",
    update: (planetPerSecond) => planetPerSecond + 10,
  },

  {
    id: 7,
    status: false,
    cost: 500,
    type: "perSecond",
    title: "Call additional TIE Fighters",
    description: "Destroys 4 more planets per second for 500 Galactic Credits",
    update: (planetPerSecond) => planetPerSecond + 4,
  },

  {
    id: 8,
    status: false,
    cost: 800,
    type: "perSecond",
    title: "Call additional Command Cruisers",
    description: "Destroys 8 more planets per second for 800 Galactic Credits",
    update: (planetPerSecond) => planetPerSecond + 8,
  },
  {
    id: 9,
    status: false,
    cost: 2000,
    type: "perClick",
    title: "Double Superlaser Power",
    description:
      "Doubles effect of current SuperLaser for 2000 Galactic Credits",
    update: (planetPerClick) => planetPerClick * 8,
  },
];
export default rules;
