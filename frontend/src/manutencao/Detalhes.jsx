import React, { useState } from 'react';
import { Row, Modal, Form, message, Col, Input, Select, Card, InputNumber } from 'antd';
import { clientes } from '../cliente/Cliente';

export default function Detalhes({ currentData, children }) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const modal = (e) => {
    e.stopPropagation();
    setVisible(true);

    if (currentData) {
      let cliente = currentData.cliente;

      if (cliente) {
        cliente = `${cliente.id} - ${cliente.nome}`;
      }

      form.setFieldsValue({
        status: currentData.status,
        descricao: currentData.descricao,
        cliente,
        observacao: currentData.observacao,
        marca: currentData.veiculo?.marca,
        ano: currentData.veiculo?.ano,
        modelo: currentData.veiculo?.modelo,
      });
    }
  }

  const handleSubmit = () => {
    message.success(`Manutenção ${currentData ? 'alterada' : 'salva'} com sucesso!`);
    handleClear();
  }

  const findCliente = () => {
    const id = form.getFieldValue('cliente');

    if (isNaN((Number(id)))) {
      form.setFieldValue('cliente', null);

      return;
    }

    const cliente = clientes.find((el) => el.id === Number(id));

    form.setFieldValue('cliente', cliente ? `${cliente.id} - ${cliente.nome}` : null);
  }

  const handleClear = () => {
    form.resetFields();
    setVisible(false);
  }

  return (
    <span>
      <span onClick={modal}
        style={{ cursor: 'pointer' }}>
        {children}
      </span>
      <Modal open={visible}
        title={currentData ? `Alteração da manutenção ${currentData.id}` : 'Cadastro de Manutenção'}
        okText='Salvar'
        centered
        width={1250}
        onCancel={handleClear}
        onOk={form.submit}>
        <Form form={form}
          layout='vertical'
          onFinish={handleSubmit}>
          <Row gutter={[25, 5]}>
            <Col lg={12}
              xs={24}>
              <Row gutter={[10, 5]}>
                <Col md={8}
                  sm={10}
                  xs={24}>
                  <Form.Item name='status'
                    label='Status'
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <Select options={[
                      { label: 'Em aguardo', value: '1' },
                      { label: 'Em andamento', value: '2' },
                      { label: 'Finalizada', value: '3' },
                    ]} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name='descricao'
                    label='Descrição'
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <Input maxLength={100} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name='cliente'
                    label='Cliente'
                    extra='Informe o ID do cliente'
                    rules={[{ required: true, message: 'Campo obrigatório!' }]}
                  >
                    <Input onBlur={findCliente}
                      onFocus={(e) => e.target.select?.()} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name='observacao'
                    label='Descrição detalhada'>
                    <Input.TextArea maxLength={500}
                      autoSize={{ minRows: 3, maxRows: 7 }} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col lg={12}
              xs={24}>
              <Row gutter={[10, 5]}>
                <Col span={24}
                  style={{ marginTop: 10 }}>
                  <Card size='small'
                    title='Detalhes do veículo'>
                    <Row gutter={[10, 5]}>
                      <Col sm={14}
                        xs={24}>
                        <Form.Item name='marca'
                          label='Marca'
                          rules={[{ required: true, message: 'Campo obrigatório' }]}
                        >
                          <Input maxLength={100} />
                        </Form.Item>
                      </Col>
                      <Col sm={10}
                        xs={24}>
                        <Form.Item name='ano'
                          label='Ano'
                          rules={[{ required: true, message: 'Campo obrigatório' }]}
                        >
                          <InputNumber maxLength={4}
                            style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item name='modelo'
                          label='Modelo'
                          rules={[{ required: true, message: 'Campo obrigatório' }]}
                        >
                          <Input maxLength={150} />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal>
    </span>
  );
}