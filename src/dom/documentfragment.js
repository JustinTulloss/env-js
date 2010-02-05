
/**
 * @class  DocumentFragment - 
 *      DocumentFragment is a "lightweight" or "minimal" Document object.
 * @extends Node
 * @author orignially Jon van Noort (jon@webarcana.com.au) 
 *      and David Joham (djoham@yahoo.com)
 * @param  ownerDocument :  The Document object associated with this node.
 */
DocumentFragment = function(ownerDocument) {
  this.Node = Node;
  this.Node(ownerDocument);
  this.nodeName  = "#document-fragment";
};
DocumentFragment.prototype = new Node;
__extend__(DocumentFragment.prototype,{
    get nodeType(){
        return Node.DOCUMENT_FRAGMENT_NODE;
    },
    get xml(){
        var xml = "",
            count = this.childNodes.length;
        
        // create string concatenating the serialized ChildNodes
        for (var i = 0; i < count; i++) {
            xml += this.childNodes.item(i).xml;
        }
        
        return xml;
    },
    toString : function(){
        return "[object DocumentFragment]";
    },
    get localName(){
        return null;
    }
});
