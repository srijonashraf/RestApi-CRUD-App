function simpleNotify(e) {
    $(e).notify("Simple Notify");
}
function notifySuccess(message) {
    $.notify(message, { position: "top center", className: "success" });
}

function notifyError(message) {
    $.notify(message, { position: "top center", className: "error" });
}

function notifyInfoLeft(message) {
    $.notify(message, { position: "left", className: "info" });
}

function notifyWarningRight(message) {
    $.notify(message, { position: "right", className: "warn" });
}

function notifyInfoTopLeft(message) {
    $.notify(message, { position: "top left", className: "info" });
}

function notifyInfoTopRight(message) {
    $.notify(message, { position: "top right", className: "info" });
}

function notifyInfoBottomRight(message) {
    $.notify(message, { position: "bottom right", className: "info" });
}

function notifyInfoBottomCenter(message) {
    $.notify(message, { position: "bottom center", className: "info" });
}
