'use strict';

angular.module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', function <%= cameledName %>() {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            someMethod: function () {
                return meaningOfLife;
            }
        };
    });
