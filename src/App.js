import React from 'react';
import 'antd/dist/antd.css';
import { HomeRouter } from "@/Common/Router/CommonRouter";
//将store提供给视图组件
import { Provider } from 'react-redux';
import store from '@/Store/Store';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { createHashHistory } from "history";
import ar_EG from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
const history = createHashHistory();
function App() {
  return (
      <ConfigProvider locale={ar_EG}>
          <Provider store={ store }>
              <BrowserRouter history={history}>
                  <Switch>
                      {
                          HomeRouter.map( ({path, componentName, routes = []},index) => {
                              return <Route
                                  key={index}
                                  path={path}
                                  component={componentName}
                                  render={props => (
                                      <componentName {...props} routes={routes} />
                                  )}
                              />
                          })
                      }

                  </Switch>
              </BrowserRouter>
          </Provider>
      </ConfigProvider>
  );
}

export default App;
