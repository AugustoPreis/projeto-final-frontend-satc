import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Input, Row, message } from 'antd';
import Screen from '../components/Screen';
import Item from './Item';
import Detalhes from './Detalhes';

const clientes = [
  { id: 1, nome: 'Helena', contato: 'Telefone: 48 9 9999-9999\nemail: helena@gmail.com' },
  { id: 2, nome: 'Vitor', contato: 'Telefone: 48 9 9999-9999\nemail: vitor@gmail.com' },
  { id: 3, nome: 'Manoel', contato: 'Telefone: 48 9 9999-9999\nemail: manoel@gmail.com' },
  { id: 4, nome: 'Hugo', contato: 'Telefone: 48 9 9999-9999\nemail: hugo@gmail.com' },
  { id: 5, nome: 'Pedro', contato: 'Telefone: 48 9 9999-9999\nemail: pedro@gmail.com' },
];

export default function Cliente() {
  const [data, setData] = useState(clientes);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const filtered = clientes.filter((el) => {
      if (typeof filtro != 'string') {
        return true;
      }

      return el.nome.toLowerCase().includes(filtro.trim().toLowerCase());
    });

    setData(filtered);
  }, [filtro]);

  const handleDelete = () => {
    message.success('Cliente deletado com sucesso!');
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
                  placeholder='Filtrar por nome...'
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
                <Item cliente={el}
                  onDelete={() => handleDelete(el)} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Screen>
  );
}