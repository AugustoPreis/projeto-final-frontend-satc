import React from 'react';
import { Button, Card, Col, Popconfirm, Row } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import ItemInfo from '../components/ItemInfo';
import { formatStatusManutencao } from '../formatters/statusManutencao';
import { formatVeiculo } from '../formatters/veiculo';
import Detalhes from './Detalhes';

export default function Item({ manutencao, onDelete }) {

  return (
    <Card>
      <Row gutter={[10, 5]}
        justify='space-between'
        align='middle'>
        <Col sm={20}
          xs={21}>
          <Row gutter={[50, 5]}>
            <Col span={24}>
              <a style={{ fontSize: 20 }}>
                {manutencao.id} - {manutencao.descricao}
              </a>
            </Col>
            <Col>
              <ItemInfo title='Status'>
                {formatStatusManutencao(manutencao.status)}
              </ItemInfo>
            </Col>
            <Col>
              <ItemInfo title='Cliente'>
                {manutencao.cliente.nome}
              </ItemInfo>
            </Col>
            <Col>
              <ItemInfo title='Veículo'>
                {formatVeiculo(manutencao.veiculo)}
              </ItemInfo>
            </Col>
          </Row>
        </Col>
        <Col sm={4}
          xs={3}>
          <Row gutter={[5, 5]}
            justify='end'>
            <Col>
              <Detalhes currentData={manutencao}>
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