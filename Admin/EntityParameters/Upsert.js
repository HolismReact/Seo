import { Form } from '@Form'
import Inputs from '../ParameterObject/Inputs'

const UpsertEntityParameter = () => {
    return <Form
        entityType='EntityParameter'
        inputs={Inputs}
    />
}

export default UpsertEntityParameter