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
    cost: 40,
    type: "perClick",
    title: "Force choke an annoying admiral",
    description: "Triples planets destroyed per click for 40 Galactic Credits",
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
    cost: 300,
    type: "perSecond",
    title: "Call TIE Fighter",
    description: "Destroys 2 planets per second for 300 Galactic Credits",
    update: (planetPerSecond) => planetPerSecond + 2,
  },
  {
    id: 5,
    status: true,
    opens: 8,
    cost: 500,
    type: "perSecond",
    title: "Call Command Cruiser",
    description: "Destroys 4 more planets per second for 500 Galactic Credits",
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
    cost: 1000,
    type: "perSecond",
    title: "Call additional TIE Fighters",
    description: "Destroys 4 more planets per second for 1000 Galactic Credits",
    update: (planetPerSecond) => planetPerSecond + 4,
  },

  {
    id: 8,
    status: false,
    cost: 40000,
    type: "perSecond",
    title: "Call additional Command Cruisers",
    description:
      "Destroys 8 more planets per second for 40000 Galactic Credits",
    update: (planetPerSecond) => planetPerSecond + 8,
  },
  {
    id: 9,
    status: false,
    cost: 2000,
    type: "perClick",
    title: "Double Superlaser Power",
    description:
      "Multiply planets destroyed per click by 8 for 2000 Galactic Credits",
    update: (planetPerClick) => planetPerClick * 8,
  },
  {
    id: 10,
    status: true,
    cost: 600,
    type: "perClick",
    title: "Use the force",
    description:
      "Multiplies planets destroyed per click by 5 for 600 Galactic Credits",
    update: (planetPerClick) => planetPerClick * 5,
  },

  {
    id: 11,
    status: true,
    cost: 200000,
    type: "perClick",
    title: "Freeze Han Solo in carbonite",
    description:
      "Multiplies planets destroyed per click by 10 for 200000 Galactic Credits",
    update: (planetPerClick) => planetPerClick * 10,
  },
  {
    id: 12,
    status: true,
    cost: 80000,
    type: "perClick",
    title: "Tell Luke who's the father",
    description:
      "Multiplies planets destroyed per click by 10 for 80000 Galactic Credits",
    update: (planetPerClick) => planetPerClick * 10,
  },
];
export default rules;
