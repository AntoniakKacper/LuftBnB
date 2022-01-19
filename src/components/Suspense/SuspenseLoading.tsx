import React, {Suspense} from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface SuspenseLoadingProps {
  children: JSX.Element;
  spinnerSize?: number | string;
}

const SuspenseLoading: React.FC<SuspenseLoadingProps> = ({children, spinnerSize}) => {
  return (

    <Suspense fallback={<div className="circular-progress"><CircularProgress size={spinnerSize}/></div>}>
        {children}
      </Suspense>

  );
};

export default SuspenseLoading;