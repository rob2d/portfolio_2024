'use client';

import { PDFViewer } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { styled } from '@mui/material';

const Root = styled('div')(
  ({ theme }) => `
& {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

& .pdf-viewer {
  height: calc(100% - 16px);
  aspect-ratio: 8.5/11;
}`
);

export default function CVPage() {
  return (
    <Root>
      <PDFViewer className='pdf-viewer'>
        <ResumePDF />
      </PDFViewer>
    </Root>
  );
}
