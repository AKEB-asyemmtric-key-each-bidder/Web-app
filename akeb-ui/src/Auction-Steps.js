import React from 'react'

import { LoadingOutlined, SmileOutlined, SolutionOutlined, WalletFilled } from '@ant-design/icons';
import { Steps } from "antd"
import "./Styles/Styles.css"

const { Step } = Steps;



const AuctionSteps = () => {
    return (
        <Steps className='Auction-Steps'>
            <Step status="finish" title="Connect" icon={<WalletFilled />} />
            <Step status="finish" title="Enter Auction" icon={<SolutionOutlined />} />
            <Step status="process" title="Bid" icon={<LoadingOutlined />} />
            <Step status="wait" title="Confirm winner" icon={<SmileOutlined />} />
            <Step status="wait" title="End" icon={<SmileOutlined />} />
        </Steps>
    )
}

export default AuctionSteps