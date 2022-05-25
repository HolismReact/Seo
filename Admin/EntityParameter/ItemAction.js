import FindInPageIcon from '@mui/icons-material/FindInPage';
import { ItemAction } from '@List'

const EntitySeo = ({ entityType, entityGuid }) => {
    return <ItemAction
        title='Manage SEO'
        icon={FindInPageIcon}
        goTo={`/entityParameter?entityType=${entityType}&entityGuid=${entityGuid}`}
        superAdmin
    />
}

export default EntitySeo