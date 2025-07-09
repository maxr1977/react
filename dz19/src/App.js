import React, { useState } from 'react'
import { Form, Input, Button, Card, Typography } from 'antd'
import 'antd/dist/reset.css'

const { Title, Paragraph, Text } = Typography

function App() {
  const [submittedData, setSubmittedData] = useState(null)

  const handleFormSubmit = (values) => {
    console.log('Полученные значения:', values)
    setSubmittedData(values)
  }

  return (
    <div style={{ padding: '50px', maxWidth: '650px', margin: '0 auto' }}>
      <Title level={2}>Форма с использованием Ant Design</Title>

      <Form layout="vertical" onFinish={handleFormSubmit} autoComplete="off">
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: 'Пожалуйста, введите описание!' }]}
        >
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card style={{ marginTop: '20px' }} title="Отправленные данные:">
          <Paragraph>
            <Text strong>Имя:</Text> {submittedData.name}
          </Paragraph>
          <Paragraph>
            <Text strong>Описание:</Text> {submittedData.description}
          </Paragraph>
        </Card>
      )}
    </div>
  )
}

export default App
