import ItemTypes from 'core/data/ItemTypes';

/**
 * A static class that helps creating different type of items
 * 
 * @class ItemCreator
 */
class ItemCreator {

    static createItem(itemJSON) {
        let item = null;

        switch(itemJSON.type) {
            case ItemTypes.STORY:
                item = createStory(itemJSON);
                break;
        }

        return item;
    }

    static createStory(itemJSON) {
        
    }
}

export default ItemCreator;