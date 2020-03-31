import React, { useState, useEffect } from 'react';
import { List, Collapse, Radio, Button } from '@alifd/next';
import moment from 'moment';
const Panel = Collapse.Panel;
const RadioGroup = Radio.Group;
function PanelTitle({ title, icontype }) {
  return (
    <ul className="map-panel-container">
      <li>
        <span className={`icontype-item${icontype} icon-class-pie`}></span>{' '}
        {title}
      </li>
      <li className="map-panel-toggle">
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
          }}
        >
          toggle
        </a>
      </li>
    </ul>
  );
}
const panelConfig = [
  {
    title: 'Junctions',
    icontype: '3'
  },
  {
    title: 'Pipes',
    icontype: '1'
  },
  {
    title: 'Reservoirs',
    icontype: '4'
  },
  {
    title: 'Valves',
    icontype: '6'
  }
];

//
interface IDataItem {
  name: string;
  value: string;
}

const dataList: Array<IDataItem> = [
  {
    name: 'Pipe',
    value: 'L07kECIA'
  },
  {
    name: 'Start node',
    value: 'CAIVVFYH73'
  },

  {
    name: 'End node',
    value: 'CAE6C5W3QA'
  },

  {
    name: 'Length',
    value: '30.20931'
  },
  {
    name: 'Diameter',
    value: '97'
  }
];
function Index() {
  const [now, setnow] = useState(moment().format('HH:mm:ss'));
  useEffect(() => {
    const timer = setInterval(() => {
      const moment1 = moment().format('HH:mm:ss');
      setnow(moment1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [now]);
  const renderPanelItem = () => {
    return panelConfig.map((item, index) => {
      return (
        <Panel
          key={`panel-title${index}`}
          title={
            <PanelTitle
              title={item.title}
              icontype={item.icontype}
            ></PanelTitle>
          }
        >
          <div></div>
        </Panel>
      );
    });
  };
  const renderDataItem = () => {
    return dataList.map((item, index) => {
      const { name, value } = item;
      return (
        <li className={`map-data-item${index}`} key={`mapPanel${name}`}>
          <span className="data-item-left">{name}</span>:
          <span className="data-item-right">{value}</span>
        </li>
      );
    });
  };
  return (
    <List size="small">
      <List.Item>
        <p>Current Time</p>
        <span>{now}</span>
      </List.Item>
      <List.Item>
        <p>Next Update</p>
        <span>17:15:03</span>
      </List.Item>
      <List.Item>
        <Collapse className="map-collapse">{renderPanelItem()}</Collapse>
      </List.Item>
      <List.Item className="map-data-ls-item">
        <p>Component Data</p>
        <ul className="map-data-container">{renderDataItem()}</ul>
        <RadioGroup aria-labelledby="groupId">
          <Radio id="open" value="open">
            open
          </Radio>
          <Radio id="cloase" value="close">
            close
          </Radio>
        </RadioGroup>
        <Button className="map-data-button" type="primary" size="small">
          Add Actions
        </Button>
      </List.Item>
    </List>
  );
}
export default React.memo(Index);
