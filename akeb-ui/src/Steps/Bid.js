import { Button, Form, InputNumber } from 'antd'
import React from 'react'
import BidTimer from './Bid-Timer'

const Bid = () => {
    return (
        <div>
            <BidTimer />
        <Form
            layout='vertical'>
            <Form.Item
                label="Enter your bid"
                rules={[
                    {
                        required:true,
                        message:"Bid number is required"
                    }
                ]}>
                <InputNumber
                    style={{'minWidth':'200px'}}
                    size="large"
                    step="0.0000001"
                    stringMode />
            </Form.Item>
            <Button type='primary' htmlType='submit' block size='large'>
                Submit
            </Button>
            
        </Form>
        </div>
    )
}

export default Bid