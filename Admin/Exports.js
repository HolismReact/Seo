import EntityParameters from './EntityParameter/List'
import UpsertEntityParameter from './EntityParameter/Upsert'
import QueryParameters from './QueryParameter/List'
import Nodes from './Node/Tree'
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
    },
    {
        "path": "/snippetNodes",
        "component": Nodes
    }
]

export { routes as SeoRoutes } 