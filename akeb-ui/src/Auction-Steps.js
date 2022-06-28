import React, { useContext } from 'react'

import { MoneyCollectFilled, ExperimentFilled, RightCircleFilled, WalletFilled,TrophyFilled } from '@ant-design/icons';
import { Steps } from "antd"
import "./Styles/Styles.css"
import StepStateContext from './Context/StepStateContext';

const { Step } = Steps;

const StepsBar = () => {
    const {stepsState} = useContext(StepStateContext)

    return (
        <Steps current={stepsState} className='Auction-Steps'>
            <Step title="Connect" icon={<WalletFilled />} />
            <Step title="Enter" icon={<RightCircleFilled />} />
            <Step title="Bid" icon={<MoneyCollectFilled />} />
            <Step title="Confirm" icon={<ExperimentFilled />} />
            <Step title="End" icon={<TrophyFilled />} />
        </Steps>
    )
}

export default StepsBar