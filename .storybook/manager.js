import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "Maya Shavin",
  brandUrl: 'https://mayashavin.com',
  brandImage: 'https://res.cloudinary.com/mayashavin/image/upload/q_auto,f_auto,w_48/v1594814559/mayashavin/white-logo',
  colorPrimary: '#3d1472',
  colorSecondary: '#157efa',
  //UI
  appBg: '#3d1472',
  // appContentBg: '#4e1992',
  //Typography
  fontBase: '"Avenir", sans-serif',
  fontCode: 'monospace',
  textColor: 'white',
  textInverseColor: 'black',
  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#4e1992',
});

addons.setConfig({
  theme,
});