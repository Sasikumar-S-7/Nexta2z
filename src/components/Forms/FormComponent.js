'use client';

import React, { useState } from "react";
import { Form, Input, Select, Button, Checkbox, notification } from "antd";
import Link from "next/link";
import axios from "axios";

const { Option } = Select;

const FormComponent = ({ title, buttonText }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: [],
    industry: "",
    terms: false,
  });

  // Handle form submission
  const onFinish = async (values) => {
    try {
      const data = { ...values, access_key: "0c511151-8204-4f6f-8485-932700f9e589" };

      const response = await axios.post("https://api.web3forms.com/submit", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        notification.success({
          message: "Success",
          description: "Your form has been submitted successfully!",
        });
        // Reset form
        form.resetFields();
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          services: [],
          industry: "",
          terms: false,
        });
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: "There was an error submitting your form. Please try again later.",
      });
    }
  };

  return (
    <div className="p-3 border-0 rounded bg2 aos shadow-sm">
      <h3 className="mb-3 text-center">{title}</h3>
      <p className="text-center">Get started in just a few steps and go live within minutes.</p>
      <Form 
        form={form}
        layout="vertical" 
        onFinish={onFinish} 
        size="large"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Enter Your Name" />
        </Form.Item>

        <Form.Item
          label="Company"
          name="company"
        >
          <Input placeholder="Enter Your Company Name (Optional)" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input type="email" placeholder="Enter Your Email Address" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
        >
          <Input addonBefore="+91" placeholder="Enter Your Phone Number" />
        </Form.Item>

        <Form.Item
          label="Services Interested"
          name="services"
          rules={[{ required: true, message: 'Please select at least one service' }]}
        >
          <Select
            mode="multiple"
            placeholder="Select Services"
            allowClear
          >
            <Option value="Waba Service">Waba Service</Option>
            <Option value="RCS Service">RCS Service</Option>
            <Option value="Bulk SMS Service">Bulk SMS Service</Option>
            <Option value="Voice Call Service">Voice Call Service</Option>
            <Option value="OTP Service">OTP Service</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Industry"
          name="industry"
        >
          <Select
            placeholder="Select Industry (Optional)"
            allowClear
          >
            <Option value="Real Estate">Real Estate</Option>
            <Option value="Food & Beverage">Food & Beverage</Option>
            <Option value="Healthcare">Healthcare</Option>
            <Option value="Tours & Travels">Tours & Travels</Option>
            <Option value="Gaming">Gaming</Option>
            <Option value="Retail & eCommerce">Retail & eCommerce</Option>
            <Option value="Media">Media</Option>
            <Option value="Government">Government</Option>
            <Option value="Education">Education</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[{
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Please accept the terms and conditions')),
          }]}
        >
          <Checkbox>
            I accept the{" "}
            <Link href="/terms" target="_blank">
              terms and conditions
            </Link>{" "}
            and agree to receive communication about services.
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;