import {
  mdiBriefcase,
  mdiDiceMultiple,
  mdiHumanGreetingVariant,
  mdiNote
} from '@mdi/js';

export const Sections = [
  {
    name: 'About',
    nameUnabbrev: 'About',
    iconPath: mdiHumanGreetingVariant,
    getTooltipText: () => 'About',
    basePath: '/'
  },
  {
    name: 'Projects',
    nameUnabbrev: 'Projects',
    iconPath: mdiBriefcase,
    getTooltipText: () => 'Projects',
    basePath: '/projects'
  },
  {
    name: 'Misc',
    nameUnabbrev: 'Miscellaneous',
    iconPath: mdiDiceMultiple,
    getTooltipText: () => 'Miscellaneous',
    basePath: '/misc'
  },
  {
    name: 'CV',
    nameUnabbrev: 'CV',
    iconPath: mdiNote,
    getTooltipText: () => 'CV',
    basePath: '/cv'
  }
];
