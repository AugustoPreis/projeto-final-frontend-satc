import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Input, Row, message } from 'antd';
import Screen from '../components/Screen';
import Item from './Item';
import Detalhes from './Detalhes';

const manutencoes = [
  {
    id: 1,
    status: '1',
    descricao: 'Troca de óleo',
    observacao: 'Troca de óleo do motor e do câmbio',
    cliente: { id: 1, nome: 'Helena' },
    veiculo: { id: 1, marca: 'Ford', modelo: 'KA', ano: 2011 },
  },
  {
    id: 2,
    status: '1',
    descricao: 'Revisão pré-viagem',
    observacao: 'Revisão de freios e fluidos, cliente irá fazer uma viagem em 2 semanas',
    cliente: { id: 2, nome: 'Vitor' },
    veiculo: { id: 2, marca: 'Volkswagen', modelo: 'Jetta', ano: 2021 },
  },
  {
    id: 3,
    status: '2',
    descricao: 'Retífica do motor',
    observacao: 'Carro está com problemas, precisa fazer o motor e trocar o escape, que está com rachaduras',
    cliente: { id: 3, nome: 'Manoel' },
    veiculo: { id: 3, marca: 'Pegeout', modelo: '206', ano: 2008 },
  },
  {
    id: 4,
    status: '3',
    descricao: 'Troca de Pneus',
    observacao: 'Trocar pneus e verificar os freios',
    cliente: { id: 4, nome: 'Hugo' },
    veiculo: { id: 4, marca: 'Toyota', modelo: 'Hilux', ano: 2016 },
  },
  {
    id: 5,
    status: '3',
    descricao: 'Funilaria e pintura',
    observacao: 'Carro arranhou o parachoques e amassou a porta do passageiro',
    cliente: { id: 5, nome: 'Pedro' },
    veiculo: { id: 5, marca: 'Fiat', modelo: 'Toro', ano: 2023 },
  },
];

export default function Manutencao() {
  const [data, setData] = useState(manutencoes);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const filtered = manutencoes.filter((el) => {
      if (typeof filtro != 'string') {
        return true;
      }

      return el.descricao.toLowerCase().includes(filtro.trim().toLowerCase());
    });

    setData(filtered);
  }, [filtro]);

  const handleDelete = () => {
    message.success('Manutenção deletada com sucesso!');
  }

  return (
    <Screen>
      <Row gutter={[10, 5]}>
        <Col span={24}>
          <Card>
            <Row gutter={[10, 5]}
              justify='space-between'>
              <Col xl={6}
                lg={7}
                md={12}
                sm={14}
                xs={24}>
                <Input value={filtro}
                  placeholder='Filtrar por descrição...'
                  onChange={(e) => setFiltro(e.target.value)} />
              </Col>
              <Col xl={3}
                lg={4}
                md={6}
                sm={10}
                xs={24}>
                <Detalhes>
                  <Button block
                    type='primary'>
                    Cadastrar
                  </Button>
                </Detalhes>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={24}
          style={{ marginTop: 20 }}>
          <Row gutter={[10, 10]}>
            {data.map((el) => (
              <Col key={el.id}
                span={24}>
                <Item manutencao={el}
                  onDelete={() => handleDelete(el)} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Screen>
  );
}