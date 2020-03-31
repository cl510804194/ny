import React, { useState, useEffect } from 'react';
import { Grid, Table, Form, NumberPicker, Button, Divider } from '@alifd/next';

const { Row, Col } = Grid;
const FormItem = Form.Item;
const formConfig = [
  {
    label: '楼宇容量',
    unit: 'KW',
    default: 800
  },
  {
    label: '最大需量值',
    unit: 'KW',
    default: 300
  },
  {
    label: '光伏容量',
    unit: 'KW',
    default: 800
  },
  {
    label: '电池容量',
    unit: 'Ah',
    default: 2500
  },
  {
    label: '充电速度',
    unit: 'C',
    default: 1
  },
  {
    label: '放电速度',
    unit: 'C',
    default: 1
  }
];
function Index() {
  const renderItem = () => {
    return formConfig.map(item => {
      return (
        <Col key={`${item.label}`} xxs={12} xs={12} s={8} m={4}>
          <FormItem labelAlign="top" label={`${item.label}(${item.unit})`}>
            <NumberPicker defaultValue={item.default}></NumberPicker>
          </FormItem>
        </Col>
      );
    });
  };
  return (
    <Row
      className="infotable-container simulate-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col className="simulate-form" span={24}>
        <Form>
          <Row
            className="infotable-container"
            justify="space-between"
            gutter={5}
            wrap
          >
            {renderItem()}
            <Col span={24}>
              <Divider></Divider>
            </Col>
            <Col>
              <Button type="primary">开始模拟</Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
