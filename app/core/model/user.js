"use strict";
var User = (function () {
    function User(uid, email, password, displayName, updatedBy, updatedDate) {
        this.uid = uid;
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map