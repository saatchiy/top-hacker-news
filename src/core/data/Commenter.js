
/**
 * Implementation of a simple class that holds a user id
 * and the number of the comments the user has submitted 
 * on the loaded stories.
 * 
 * @class Commenter
 */
class Commenter {
    constructor(author) {
        this._author = author;
        this._commentCount = 1;
    }

    /**
     * Gets the user id of the author of comments
     * 
     * @returns 
     * @memberof Commenter
     */
    getAuthor() {
        return this._author;
    }

    /**
     * Gets the number of comments the user has submitted on the
     * loaded stories
     * 
     * @returns 
     * @memberof Commenter
     */
    getCommentCount() {
        return this._commentCount;
    }

    incrementCommentCount() {
        this._commentCount++;
    }
}

export default Commenter;