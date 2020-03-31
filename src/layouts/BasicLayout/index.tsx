import React from 'react';
import { Shell, Search, Button, MenuButton, Icon } from '@alifd/next';
import _ from 'lodash';
import PageNav from './components/PageNav';
import Footer from './components/Footer';

import './index.scss';
const { Item, Group, Divider } = MenuButton;
declare global {
  interface Window {
    webpackJsonp: any[];
  }
}

const { useEffect, useState } = React;
export default function BasicLayout(props: {
  children: React.ReactNode;
  pathname: string;
  appLeave: { path: string };
}) {
  const { children, pathname, appLeave } = props;
  const leavePath = appLeave && appLeave.path;
  const [device, setdevice] = useState('desktop');
  useEffect(() => {
    if (leavePath === '/angular' && window.webpackJsonp) {
      // remove webpackJsonp added by Angular app
      delete window.webpackJsonp;
    }
    window.onresize = _.debounce(() => {
      const offsetWid = document.documentElement.clientWidth;
      if (offsetWid > 780) {
        setdevice('desktop');
      } else if (offsetWid > 400 && offsetWid < 780) {
        setdevice('tablet');
      } else {
        setdevice('phone');
      }
    }, 150);
  }, [leavePath, device]);

  return (
    <Shell
      device={device}
      id="header"
      type="light"
      style={{
        minHeight: '100vh'
      }}
    >
      <Shell.Branding>
        <div className="header-container">
          <span className="header-title">中工研院</span>
          <ul className="header-but-group">
            <li className="header-item1">
              <Search shape="simple"></Search>
            </li>
            <li className="header-item2">
              <Button component="a">帮助</Button>
            </li>
            <li className="header-item3">
              <Button component="a">提醒</Button>
            </li>
            <li className="header-item4">
              <MenuButton component="a" label="User Demo">
                <Item key="undo">个人中心</Item>
                <Item key="redo">Redo</Item>
              </MenuButton>
            </li>
            {/* <li className="header-item5">
              <Button component="a">English</Button>
            </li> */}
          </ul>

          {/* <div className="header-but-group">
            <Search size="small" type="normal" shape="simple"></Search>
            <Button>
              <Icon type="help" />
            </Button>
            <Button>
              <Icon type="prompt" />
            </Button>
            <MenuButton type="primary" label="Document Edit">
              <Item key="undo">Undo</Item>
              <Item key="redo">Redo</Item>
              <Divider />
              <Group>
                <Item key="cut">Cut</Item>
                <Item key="copy">Copy</Item>
                <Item key="paste">Paste</Item>
              </Group>
            </MenuButton>
            <Button size="small">English</Button>
          </div> */}
        </div>
      </Shell.Branding>

      <Shell.Navigation>
        <PageNav pathname={pathname} />
      </Shell.Navigation>

      <Shell.Content>{children}</Shell.Content>
      <Shell.Footer>{/* <Footer /> */}</Shell.Footer>
    </Shell>
  );
}
