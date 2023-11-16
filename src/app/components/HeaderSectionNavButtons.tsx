'use client';

import { useRouter } from 'next/navigation';
import { Button, styled, Typography } from '@mui/material';
import { orderedSections } from '../constants/Sections';
import Icon from '@mdi/react';

const Root = styled('div')(
  ({ theme }) => `
& .MuiButton-root:not(:last-of-type) {
    margin-right: ${theme.spacing(2)};
}

& .MuiButton-root .MuiTypography-root {
    margin-right: ${theme.spacing(2)};
}

${theme.breakpoints.down('md')} {
    & .MuiButton-root .MuiTypography-root {
        display: none;
    }
}
`
);

export default function HeaderSectionNavButtons() {
  const router = useRouter();

  return (
    <Root>
      {orderedSections.map((s) => (
        <Button key={s.name} onClick={() => router.push(s.basePath)}>
          <Typography variant='button'>{s.name}</Typography>
          <Icon path={s.iconPath} size={1.25} />
        </Button>
      ))}
    </Root>
  );
}
