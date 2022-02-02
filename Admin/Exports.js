import EntityParameters from './EntityParameters/List'
import UpsertEntityParameter from './EntityParameters/Upsert'
import QueryParameters from './QueryParameter/List'
import Snippets from './Snippet/List'

const routes = [
    {
        "path": "/entityParameters",
        "component": EntityParameters
    },
    {
        "path": "/entityParameter",
        "component": UpsertEntityParameter
    },
    {
        "path": "/queryParameters",
        "component": QueryParameters
    },
    {
        "path": "/snippets",
        "component": Snippets
    }
]

export { routes as SeoRoutes } 