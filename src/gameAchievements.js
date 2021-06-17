import gif1 from "./this-is-where-the-fun-begins.gif";
import gif2 from "./wipe-them-out-all-of-them.gif";
import gif3 from "./execute-order-sixty-six.gif";
import gif4 from "./darth-vader.gif";
import gif5 from "./unlimited-power.gif";

const achievements = [
  {
    id: 1,
    title: "Welcome to The Dark Side",
    description:
      "You just destroyed your first planet. Congratulations on getting the Acolyte achievement.",
    name: "Acolyte",
    planets: 1,
    buttonText: "Let the fun begin!",
    gif: <img id="gif1" src={gif1} alt="gif" />,
  },
  {
    id: 2,
    title: "Wipe Them Out. All Of Them!",
    description:
      "You have managed to destroy 100 planets. Congratulations on getting the Apprentice achievement, the dark side is a good color on you.",
    name: "Apprentice",
    planets: 100,
    buttonText: "Keep going!",
    gif: <img id="gif2" src={gif2} alt="gif" />,
  },
  {
    id: 3,
    title: "Execute Order Sixty-Six!",
    description:
      "1000 planets and counting. Congratulations on getting the Lord achievement.",
    name: "Lord",
    planets: 1000,
    buttonText: "Not done yet!",
    gif: <img id="gif3" src={gif3} alt="gif" />,
  },
  {
    id: 4,
    title: "Be careful not to choke on your aspirations",
    description:
      "Congratulations, you have earned yourself the Darth achievement.",
    name: "Darth",
    planets: 5000,
    buttonText: "No… I am your Father!",
    gif: <img id="gif4" src={gif4} alt="gif" />,
  },

  {
    id: 5,
    title: "Power!",
    description:
      "The galaxy just found itself a new Emperor. Congratulations on getting the Emperor achievement.",
    name: "Emperor",
    planets: 10000,
    buttonText: "Unlimited Power!",
    gif: <img id="gif5" src={gif5} alt="gif" />,
  },
];
export default achievements;
