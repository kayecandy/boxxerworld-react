const CONTENT = {
  legCuts: [
    {
      id: "side-slit",
      img: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/leg_cut-side_slit.png)`,
      title: "Side Slit",
    },
    {
      id: "curve",
      img: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/leg_cut-curve_leg.png)`,
      title: "Curve Leg",
    },
  ],
  sizes: [
    {
      id: "standard",
      title: "Standard",
      img: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/size-standard.png)`,
    },
    {
      id: "retro",
      title: "Retro",
      img: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/size-retro.png)`,
    },
  ],
};

export default CONTENT;
