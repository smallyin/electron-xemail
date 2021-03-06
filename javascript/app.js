var angular = require('angular'),
    angularAnimiate = require('angular-animate'),
    angularAria = require('angular-aria'),
    angularMaterial = require('angular-material'),
    angularMdIcons = require('angular-material-icons'),
    angularMdTable = require('angular-material-data-table'),
    app = angular.module('app', [
        angularAnimiate,
        angularAria,
        angularMaterial,
        angularMdIcons,
        angularMdTable,
        'app.router',
        'app.directive',
        'app.controller',
        'app.database',
        'app.config',
        'app.service',
        'app.filter',
        ]);

app.run(['$rootScope', '$state', '$mdColors', 'settingService', 'templateService' ,function ($rootScope, $state,$mdColors, settingService, templateService) {

    $rootScope.mdPrimaryColor = $mdColors.getThemeColor('pink');
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.showIndicator = true;
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.showIndicator = false;
    });

    settingService.init();
    templateService.init();

}])
;
app.bootstrap = function () {
    angular.bootstrap(window.document, ['app']);
};
app.bootstrap();

