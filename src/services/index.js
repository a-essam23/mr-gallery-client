import getGroups from "./groups/getGroups";
import getOneGroup from "./groups/getOneGroup";
import postGroup from "./groups/postGroup";

import getCollections from "./collections/getCollections";
import getOneCollection from "./collections/getOneCollection";
import postCollection from "./collections/postCollection";
import deleteOneCollection from "./collections/deleteOneCollection";
import searchOneCollection from "./collections/searchOneCollection";

import getAlbums from "./albums/getAlbums";
import getOneAlbum from "./albums/getOneAlbum";
import postAlbum from "./albums/postAlbum";
import searchOneAlbum from "./albums/searchOneAlbum";

import loginPost from "./auth/loginPost";

export {
    searchOneCollection,
    searchOneAlbum,
    deleteOneCollection,
    loginPost,
    getGroups,
    getOneGroup,
    postGroup,
    getCollections,
    getOneCollection,
    postCollection,
    getAlbums,
    getOneAlbum,
    postAlbum,
};
