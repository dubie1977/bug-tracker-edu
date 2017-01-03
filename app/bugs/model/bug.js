"use strict";
var Bug = (function () {
    function Bug(id, titel, status, severity, description, createdBy, createdDate, updatedBy, updatedDate) {
        this.id = id;
        this.titel = titel;
        this.status = status;
        this.severity = severity;
        this.description = description;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }
    return Bug;
}());
exports.Bug = Bug;
//# sourceMappingURL=bug.js.map