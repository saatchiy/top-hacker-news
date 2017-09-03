
/**
 * A base class that contains all the common fields of every type
 * of an item
 * 
 * 
 * @class Item
 */
class Item {
    constructor(itemJSON, itemType) {
        this._id = itemJSON.id;
        this._type = itemType;
        this._deleted = itemJSON.deleted;
        this._authorId = itemJSON.by;
        this._time = new Date(itemJSON.time);
        this._commentsIds = itemJSON.kids;
        this._dead = itemJSON.dead;
    }

    getId() {
        return this._id;
    }

    isDeleted() {
        return this._deleted;
    }

    getType() {
        return this._type;
    }

    getAuthor() {
        return this._authorId;
    }

    getCreationTime() {
        return this._time.toLocaleString();
    }

    getCommentsIds() {
        return this._commentsIds;
    }

    isDead() {
        return this._dead;
    }
}

export default Item;