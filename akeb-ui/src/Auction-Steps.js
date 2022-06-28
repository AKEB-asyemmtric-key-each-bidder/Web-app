import React from 'react'

import { MoneyCollectFilled, ExperimentFilled, RightCircleFilled, WalletFilled,TrophyFilled } from '@ant-design/icons';
import { Steps } from "antd"
import "./Styles/Styles.css"

const { Step } = Steps;



const AuctionSteps = () => {
    return (
        <Steps className='Auction-Steps'>
            <Step status="finish" title="Connect" icon={<WalletFilled />} />
            <Step status="finish" title="Enter" icon={<RightCircleFilled />} />
            <Step status="process" title="Bid" icon={<MoneyCollectFilled />} />
            <Step status="wait" title="Confirm" icon={<ExperimentFilled />} />
            <Step status="wait" title="End" icon={<TrophyFilled />} />
        </Steps>
    )
}

export default AuctionSteps