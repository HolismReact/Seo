import { useState, useEffect } from 'react'
import { Form, Progress, app, get } from '@Form'
import Inputs from '../ParameterObject/Inputs'

const UpsertEntityParameter = () => {

    const { entityType, entityGuid } = app.parseQuery()
    const [progress, setProgress] = useState()

    useEffect(() => {
        if (entityType && entityGuid) {
            setProgress(true)
            get(`/entityParameter/getRecord?entityType=${entityType}&entityGuid=${entityGuid}`)
                .then(data => {
                    app.emit(app.editRequested, { entity: data })
                    setProgress(false)
                }, error => {
                    setProgress(false)
                    app.error(error)
                })
        }
    }, [])

    return progress ? <Progress /> : <Form
        entityType='EntityParameter'
        inputs={Inputs}
    />
}

export default UpsertEntityParameter