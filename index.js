"use strict";

module.exports = function(moduleName) {
    try {
        require.resolve(moduleName);
    }
    catch (error) {
        if (error.code === "MODULE_NOT_FOUND") {
            return false;
        }
        throw error;
    }
    return true;
};
