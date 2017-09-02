import ItemTypes from 'core/data/ItemTypes';


/**
 * Implementation of the Story item class
 * 
 * 
 * @class Story
 * @extends {Item}
 */
class Story extends Item {
    constructor(itemJSON) {
        super(itemJSON, ItemTypes.STORY);

        this._title = itemJSON.title;
        this._text = itemJSON.text;
        this._url = itemJSON.url;
        this._score = itemJSON.score;
        this._commentsCount = itemJSON.descendants;
    }

    getTitle() {
        return this._title;
    }

    getText() {
        return this._text;
    }

    getURL() {
        return this._url;
    }

    getScore() {
        return this._score;
    }

    getCommentsCount() {
        return this._commentsCount;
    }
}

export default Story;