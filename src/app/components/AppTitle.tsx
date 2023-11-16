'use client';

import { sectionsByBasePath } from '@/app/constants/Sections';

const APP_NAME = `Rob's Portfolio`;

export function useMyAppTitle() {
  let section = sectionsByBasePath[window.location.pathname];

  if (!section) {
    const pathname = window.location.pathname.substring(
      0,
      window.location.pathname.lastIndexOf('/')
    );
    section = sectionsByBasePath[pathname];
  }
  if (section) {
    return `${section.name} | ${APP_NAME}`;
  }
  return `My App`;
}

export default function AppTitle() {
  const appTitle = useMyAppTitle();

  return <title>{appTitle}</title>;
}
