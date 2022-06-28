import { Button } from 'antd'
import React, { useContext } from 'react'
import StepStateContext from '../Context/StepStateContext'

const Connect = () => {
    const {stepsState, setStepsState} = useContext(StepStateContext)

    const onConnectHandler = () => {
        setStepsState(stepsState + 1)
    }

    return (
        <Button type='primary' onClick={onConnectHandler}>
            Connect your wallet
        </Button>
    )
}

export default Connect