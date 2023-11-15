import { Button, styled, Typography } from '@mui/material';
import { Sections } from '../constants/Sections';
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
  return (
    <Root>
      {Sections.map((s) => (
        <Button key={s.name} onClick={() => window.alert(s.basePath)}>
          <Typography variant='button'>{s.name}</Typography>
          <Icon path={s.iconPath} size={1.25} />
        </Button>
      ))}
    </Root>
  );
}
