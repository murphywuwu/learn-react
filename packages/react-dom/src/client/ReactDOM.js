import {
  ELEMENT_NODE,
  COMMENT_NODE,
  DOCUMENT_NODE,
  DOCUMENT_FRAGMENT_NODE,
} from '../shared/HTMLNodeType';

function isValidContainer(node) {
  return !!(
    node &&
    node.nodeType === ELEMENT_NODE ||
    node.nodeType === DOCUMENT_NODE ||
    node.nodeType === DOCUMENT_FRAGMENT_NODE ||
    node.nodeType === COMMENT_NODE && node.nodeValue === ' react-mount-point-unstable'
  )
}


function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
  !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element') : void 0;

  {
    topLevelUpdateWarnings(container);
  }

  var root = container._reactRootContainer;

  return getPublicRootInstance(root._internalRoot);
}

var ReactDOM = {
  createPortal: createPortal, 
  findDOMNode: function(componentOrElement) {

  },
  hydrate: function(element, container, callback) {
    return legacyRenderSubtreeIntoContainer(null, element, container, true, callback);
  },
  render: function(element, container, callback) {
    return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
  },
  unstable_renderSubtreeIntoContainer: function(parentComponent, element, containerNode, callback) {
    !(parentComponent != null && has(parentComponent)) ? invariant(false, 'parentComponent must be a valid React Component') : void 0;

    return legacyRenderSubtreeIntoContainer(parentComponent, element, containerNode, false, callback);
  },

}


export default ReactDOM