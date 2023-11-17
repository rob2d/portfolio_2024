'use client';
import { styled, Typography } from '@mui/material';
import HeaderSectionNavButtons from './HeaderSectionNavButtons';

const Root = styled('div')(
  ({ theme }) => `
  
    &  {
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
  
    ${theme.breakpoints.down('md')} {
      & .md-hidden {
        display: none;
      }
    }
  `
);

export default function AppHeader() {
  return (
    <Root>
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
    </Root>
  );
}
