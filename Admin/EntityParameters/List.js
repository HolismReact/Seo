import { List } from '@List'
import UpsertEntityParameter from './Upsert'

const card = (item) => <>
    <div>{item.pageTitle}</div>
    <div>{item.metaTitle}</div>
</>

const EntityParameters = () => {
    return <List
        title='SEO Entity Parameters'
        entityType='EntityParameter'
        card={card}
        upsert={UpsertEntityParameter}
    />
}

export default EntityParameters