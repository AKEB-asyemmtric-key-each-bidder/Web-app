import React from 'react'

import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from "antd"
import "./Styles/Styles.css"

const { Step } = Steps;



const AuctionSteps = () => {
    return (
        <Steps className='Auction-Steps'>
            <Step status="finish" title="Login" icon={<UserOutlined />} />
            <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
            <Step status="process" title="Pay" icon={<LoadingOutlined />} />
            <Step status="wait" title="Done" icon={<SmileOutlined />} />
        </Steps>
    )
}

export default AuctionSteps