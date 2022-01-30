import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="cf733693-d8b7-45e8-b130-32766afa030c" language="en-US">
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>,
    document.getElementById('root'),
  );