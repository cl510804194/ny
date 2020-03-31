import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  Grid,
  Table,
  Icon,
  Form,
  Divider,
  Input,
  DatePicker
} from '@alifd/next';
import TableCard from '../TableCard/';
const FormItem = Form.Item;

const cardList = [
  {
    label: '计划完成总量',
    data: '76万'
  },
  {
    label: '累积完成总量',
    data: '35万'
    // desc: '当日预测峰值1093KW'
  },
  {
    label: '差值',
    data: '41万'
  }
];
const formItemLayout = {
  labelWidth: 100
};

const { Row, Col } = Grid;
function Index({ diaLogVisible, showVisible }) {
  //   const propVisible = diaLogVisible;
  const [visible, setvisible] = useState(diaLogVisible);

  const renderCardItem = () => {
    return cardList.map(item => {
      return (
        <Col className="loader-tablecard" key={`load${item.data}`} span={8}>
          <TableCard {...item}></TableCard>
        </Col>
      );
    });
  };
  useEffect(() => {
    setvisible(diaLogVisible);
    return () => {};
  }, [diaLogVisible]);
  const closeDialog = () => {
    setvisible(false);
    showVisible(false);
  };
  return (
    <Dialog
      title="生产排期"
      visible={visible}
      className="laod-dialog"
      isFullScreen
      footerAlign="center"
      onOk={closeDialog}
      onCancel={closeDialog}
      onClose={closeDialog}
    >
      <Row
        className="infotable-container fan-container"
        justify="center"
        gutter={5}
        wrap
      >
        {renderCardItem()}
        <Col className="load-table" span={24}>
          <Table>
            <Table.Column title="生产单号" dataIndex="id" />
            <Table.Column title="计划完成量" dataIndex="plan" />
            <Table.Column title="累计完成量" dataIndex="all" />
            <Table.Column title="差值" dataIndex="diff" />
            <Table.Column title="计划完成天数" dataIndex="planDate" />
            <Table.Column title="剩余天数" dataIndex="resDate" />
            <Table.Column title="预计每小时产量" dataIndex="panOneHour" />
            <Table.Column title="当前每小时产量" dataIndex="nowOneHour" />
          </Table>
        </Col>
        <Col className="load-table" span={24}>
          <Button>
            <Icon type="add" /> 添加
          </Button>
          <Divider></Divider>
        </Col>
        <Col className="load-table" span={24}>
          <Form>
            <FormItem {...formItemLayout} label="生产单号:">
              <Input name="productId" placeholder="" />
            </FormItem>
            <FormItem {...formItemLayout} label="开工时间:">
              <DatePicker name="productDate" placeholder="请选择日期" />
            </FormItem>
            <FormItem {...formItemLayout} label="计划完成量:">
              <Input name="planFinish" placeholder="" />
            </FormItem>
            <FormItem {...formItemLayout} label="计划完成天数:">
              <Input name="planDate" placeholder="" />
            </FormItem>
          </Form>
        </Col>
      </Row>
    </Dialog>
  );
}
export default React.memo(Index);
