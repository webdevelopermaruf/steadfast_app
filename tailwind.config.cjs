/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = withMT({
  content: [ "./src/**/*.{js,ts,jsx,tsx}" ,  "./node_modules/flowbite/**/*.js" ,   flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin') ,  flowbite.plugin() ],
});
