import React, { useState } from 'react';
import { Row, Modal, Form, message, Col, Input } from 'antd';

function Detalhes({ currentData, children }) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const modal = (e) => {
    e.stopPropagation();
    setVisible(true);

    if (currentData) {
      form.setFieldsValue({
        nome: currentData.nome,
        login: currentData.login,
      });
    }
  }

  const handleSubmit = () => {
    message.success(`Usuário ${currentData ? 'alterado' : 'salvo'} com sucesso!`);
    handleClear();
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
        title={currentData ? `Alteração do usuário ${currentData.id}` : 'Cadastro de Usuário'}
        okText='Salvar'
        centered
        width={550}
        onCancel={handleClear}
        onOk={form.submit}>
        <Form form={form}
          layout='vertical'
          onFinish={handleSubmit}>
          <Row gutter={[10, 5]}>
            <Col span={24}>
              <Form.Item name='nome'
                label='Nome'
                rules={[{ required: true, message: 'Campo obrigatório' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name='login'
                label='Login'
                rules={[{ required: true, message: 'Campo obrigatório' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name='senha'
                label='Senha'
                extra='Informe caso queira alterar'>
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </span>
  );
}

export default Detalhes;