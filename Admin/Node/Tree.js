import { Tree } from '@Tree'

const Nodes = () => {
    return <Tree
        title='Nodes'
        entityType='SnippetNode'
        show={(node) => `${node.key} ${node.value ? ' - ' + node.value : ''}`}
    />
}

export default Nodes