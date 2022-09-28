import getGroups from "./groups/getGroups";
import getOneGroup from "./groups/getOneGroup";
import postGroup from "./groups/postGroup";
import deleteOneGroup from "./groups/deleteOneGroup";

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

import updateOne from "./updateOne";

export {
    deleteOneGroup,
    updateOne,
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
