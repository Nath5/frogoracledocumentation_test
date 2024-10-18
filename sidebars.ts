import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  docs: [
    {
      type: "doc",
      id: "welcome",
      label: "Introduction"
    },
    {
      type: 'category',
      label: 'S/R Indicator',
      collapsed: false,
      items: [
        'sr/sr',
        'sr/sr_setup',
        'sr/sr_ui',
        'sr/sr_configuration'

      ],
    },
    {
      type: 'category',
      label: 'Volume Profile Indicator',
      items: [
        'vpd/vpd',
        'vpd/vpd_setup',
        'vpd/vpd_configuration'

      ],
    },
    {
      type: 'category',
      label: 'Trade Strategies',
      items: [
        'strategies/sr_strategies',
        'strategies/vpd_strategies',
        'strategies/fib_strategies'
      ],
    },
    {
      type: "doc",
      id: "example_trades/examples",
      label: "Example Trades"
    }
  ]
};

export default sidebars;
