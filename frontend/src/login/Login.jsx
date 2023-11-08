import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Form, Input, Row } from 'antd';
import { UnlockOutlined, UserOutlined } from '@ant-design/icons';
import './login.css';

export default function Login() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (user) => {
    navigate('/dashboard');
  }

  return (
    <Row justify='center'
      align='middle'
      className='login'>
      <Col xl={7}
        lg={8}
        md={10}
        sm={14}
        xs={24}>
        <Form form={form}
          layout='vertical'
          onFinish={handleSubmit}>
          <Row gutter={[10, 0]}
            justify='center'
            className='login-card'>
            <Col span={24}
              className='login-title'>
              MSystem
            </Col>
            <Col span={24}
              className='login-subtitle'>
              Informe seus dados no formulário abaixo para acessar o sistema.
            </Col>
            <Col span={24}>
              <Form.Item name='login'
                label='Login'
                rules={[{ required: true, message: 'Informe o login' }]}>
                <Input placeholder='Informe o login'
                  prefix={<UserOutlined />} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name='senha'
                label='Senha'
                rules={[{ required: true, message: 'Informe a senha' }]}>
                <Input.Password placeholder='Informe a senha'
                  prefix={<UnlockOutlined />} />
              </Form.Item>
            </Col>
            <Col xl={8}
              lg={9}
              md={8}
              sm={7}
              xs={24}>
              <Button block
                type='primary'
                onClick={form.submit}>
                Entrar
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}