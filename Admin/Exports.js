import EntityParameters from './EntityParameters/List'
import QueryParameters from './QueryParameter/List'
import Snippets from './Snippet/List'

const routes = [
    {
        "path": "/entityParameters",
        "component": EntityParameters
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