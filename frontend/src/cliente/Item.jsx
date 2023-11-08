import React from 'react';
import { Button, Card, Col, Popconfirm, Row } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Detalhes from './Detalhes';

export default function Item({ cliente, onDelete }) {

  return (
    <Card>
      <Row gutter={[10, 5]}
        justify='space-between'>
        <Col sm={20}
          xs={21}>
          <a style={{ fontSize: 20 }}>
            {cliente.id} - {cliente.nome}
          </a>
        </Col>
        <Col sm={4}
          xs={3}>
          <Row gutter={[5, 5]}
            justify='end'>
            <Col>
              <Detalhes currentData={cliente}>
                <Button icon={<EditOutlined />} />
              </Detalhes>
            </Col>
            <Col>
              <Popconfirm title='Deseja deletar?'
                onConfirm={onDelete}>
                <Button danger
                  icon={<DeleteOutlined />} />
              </Popconfirm>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}