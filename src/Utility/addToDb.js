import { toast } from 'react-toastify';  // Importing toast

const getStoreReadList = () => {
    const storeListStr = localStorage.getItem('read-list');
    if (storeListStr) {
        const storeList = JSON.parse(storeListStr);
        return storeList;
    } else {
        return [];
    }
};

const adToStoreReadList = (id) => {
    const storeList = getStoreReadList();
    if (storeList.includes(id)) {
        toast.warn('Already exists in the read list'); // Updated toast message
        console.log(id, 'Already exists in the read list');
    } else {
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storeListStr);
        toast.success('This book is added to your read list'); // Updated toast message
    }
};

const getStoreWishList = () => {
    const storeWishListStr = localStorage.getItem('wish-list');
    if (storeWishListStr) {
        const wishList = JSON.parse(storeWishListStr);
        return wishList;
    } else {
        return [];
    }
};

const addToStoreWishList = (id) => {
    const wishList = getStoreWishList();
    if (wishList.includes(id)) {
        toast.warn('Already exists in the Wish List'); // Updated toast message
        console.log(id, 'Already exists in the Wish List');
    } else {
        wishList.push(id);
        const storeWishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', storeWishListStr);
        toast.success('This book is added to your wish list'); // Added success toast
    }
};

export { adToStoreReadList, addToStoreWishList, getStoreReadList };
