import Item from 'core/data/Item';
import * as ItemTypes from 'core/data/ItemTypes';


/**
 * Implementation of the Comment item class
 * 
 * 
 * @class Comment
 * @extends {Item}
 */
class Comment extends Item {
    constructor(itemJSON) {
        super(itemJSON, ItemTypes.COMMENT);

        this._text = itemJSON.text;
        this._parentId = itemJSON.parent;
    }

    getText() {
        return this._text;
    }

    getParentId() {
        return this._parentId;
    }
}

export default Comment;