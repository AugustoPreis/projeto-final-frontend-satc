import React from 'react';
import { Col, Row } from 'antd';
import Screen from '../components/Screen';
import { manutencoes } from '../manutencao/Manutencao';
import Item from '../manutencao/Item';
import './dashboard.css';

export default function Dashboard() {
  return (
    <Screen>
      <Row>
        <Col span={24}
          className='dashboard-title'>
          Últimas 4 manutenções
        </Col>
        <Col span={24}>
          <Row gutter={[20, 20]}>
            {manutencoes.slice(0, 4).map((el) => (
              <Col key={el.id}
                md={12}
                xs={24}>
                <Item manutencao={el}
                  removeButtons
                  className='dashboard-item' />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Screen>
  );
}