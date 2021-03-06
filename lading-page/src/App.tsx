import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch } from 'react-router-dom';
import LayoutApp from './components/layouts/LayoutApp';
import { BACKGROUND_CONSTANT } from './constant/ImagesConstant';
import store from './store';

import './stylesGlobal.scss';

function App() {
  return (
    <div className="app">
      <div className="background-image-static">
        <img src={BACKGROUND_CONSTANT.BackgroundImg} alt="container-background" />
      </div>
      <Provider store={store}>
        <Router>
          <Switch>  
            <LayoutApp />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
