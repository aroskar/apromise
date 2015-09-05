module.exports = {
    defer: function () {
        var resolvedCallback,
            rejectedCallback,
            data,
            error,
            actionCompleted = false;

        return {
            promise: {
                then: function (success, fail) {
                    resolvedCallback = success;
                    rejectedCallback = fail;

                    if (actionCompleted  && data) {
                        resolvedCallback.call(null, data);
                    }

                    if (actionCompleted && error) {
                        rejectedCallback.call(null, error);
                    }

                }
            }, 
            resolve: function (d) {
                data = d;
                actionCompleted = true;

                if (resolvedCallback) {
                    resolvedCallback.call(null, d);
                }
            },
            reject: function (e) {
                error = e;
                actionCompleted = true;

                if (rejectedCallback) {
                    rejectedCallback.call(null, error);
                }
            }
        }
    }
};