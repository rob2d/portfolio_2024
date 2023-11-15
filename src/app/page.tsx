'use client';

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeaderSectionNavButtons from './components/HeaderSectionNavButtons';

const Root = styled('div')(
  ({ theme }) => `
  & {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  & > .header-bar {
    display: flex;
    justify-content: space-between;
    border-color: #f00;
    border-width: 1px;
    border-style: dashed;
    padding: 0px ${theme.spacing(3)};

    & > * {
      display: flex;
      align-items: center;
    }
  }

  & > *:nth-of-type(2) {
    border-color: #0f0;
    border-width: 1px;
    border-style: dashed;

    flex-grow: 1;
  }

  ${theme.breakpoints.down('md')} {
    & .md-hidden {
      display: none;
    }
  }
`
);

export default function HomePage() {
  return (
    <Root>
      <div className='header-bar'>
        <HeaderSectionNavButtons />
        <div>
          <Typography variant='h6' aria-label='Robert Concepción III'>
            R
            <span className='md-hidden' aria-hidden={true}>
              obert&nbsp;
            </span>
            C
            <span className='md-hidden' aria-hidden={true}>
              oncepción&nbsp;
            </span>
            III
          </Typography>
        </div>
      </div>
      <div></div>
    </Root>
  );
}
