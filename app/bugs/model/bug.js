"use strict";
var Bug = (function () {
    function Bug(id, title, status, severity, description, createdBy, createdDate, updatedBy, updatedDate) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.severity = severity;
        this.description = description;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }
    Bug.prototype.clone = function (bug) {
        var newBug = new Bug(bug.id, bug.title, bug.status, bug.severity, bug.description, bug.createdBy, bug.createdDate, bug.updatedBy, bug.updatedDate);
        return newBug;
    };
    return Bug;
}());
exports.Bug = Bug;
//# sourceMappingURL=bug.js.map