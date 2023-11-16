import {
  mdiBriefcase,
  mdiDiceMultiple,
  mdiHumanGreetingVariant,
  mdiNote
} from '@mdi/js';

export const orderedSections = [
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
    name: 'CV',
    nameUnabbrev: 'CV',
    iconPath: mdiNote,
    getTooltipText: () => 'CV',
    basePath: '/cv'
  }
];

export const sectionsByBasePath = Object.fromEntries(
  orderedSections.map((section) => [section.basePath, section])
);
