import { Tree, Text } from '@List'

const filters = <>
    <Text
        column='Key'
        placeholder='Key'
    />
</>

const Nodes = () => {
    return <Tree
        title='Nodes'
        entityType='SnippetNode'
        filters={filters}
        show={(node) => `${node.key} ${node.value ? ' - ' + node.value : ''} ${node.nodeTypeKey === 'JsonObject' ? '{}' : (node.nodeTypeKey === 'JsonArray' ? '[]' : '')}`}
    />
}

export default Nodes