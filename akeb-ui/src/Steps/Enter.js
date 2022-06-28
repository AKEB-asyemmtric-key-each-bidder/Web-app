import { Button } from 'antd'
import React, { useContext } from 'react'
import StepStateContext from '../Context/StepStateContext'

const Enter = () => {
    const {stepsState, setStepsState} = useContext(StepStateContext)

    const onEnterHandler = () => {
        setStepsState(stepsState + 1)
    }

    return (
        <Button type="primary" size='large' onClick={onEnterHandler}>
            Enter the auction!
        </Button>
    )
}

export default Enter