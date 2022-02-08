import { Tree } from '@List'

const Nodes = () => {
    return <Tree
        title='Nodes'
        entityType='SnippetNode'
        show={(node) => `${node.key} ${node.value ? ' - ' + node.value : ''} ${node.nodeTypeKey === 'JsonObject' ? '{}' : (node.nodeTypeKey === 'JsonArray' ? '[]' : '')}`}
    />
}

export default Nodes