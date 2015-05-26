myModule.directive('myDiv', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */

    directive.template = "My first directive: Wahid Shaikh";

    directive.scope = {
        customerInfo: '=info'
    }

    return directive;
});


myModule.directive('mySharedScope', function () {
    return {
        template: 'Name: {{user.firstName}}'
    };
});