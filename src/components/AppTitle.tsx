'use client';

import { sectionsByBasePath } from '@/app/constants/Sections';

export const APP_NAME = `Rob's Portfolio`;

export function useMyAppTitle() {
  let section = sectionsByBasePath[globalThis.location?.pathname];

  if (!section) {
    const pathname = globalThis.location?.pathname.substring(
      0,
      globalThis.location?.pathname.lastIndexOf('/')
    );
    section = sectionsByBasePath[pathname];
  }
  if (section) {
    return `${section.name} | ${APP_NAME}`;
  }

  return APP_NAME;
}

export default function AppTitle() {
  const appTitle = useMyAppTitle();

  return <title>{appTitle}</title>;
}
