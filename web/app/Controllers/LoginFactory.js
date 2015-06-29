angular.module('LoginFactoryModule', ['ngRoute', 'ConfigFactoryModule'])

        /* Configuracao de requisicao HTTP */
        .config(['$httpProvider', function ($httpProvider) {

                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
                $httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded'};
            }
        ])

        /* Componente de Resposta */
        .factory('LoginFactory', function ($http, $location, ConfigFactory) {

            return {
                isLogin: function () {

                    $http({
                        method: "post",
                        url: "http://localhost/mongodb/",
                        data: "action=user&action_args=isUser",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                            .success(function (data) {
                                
                                if (data['status'] === 'false') {
                                    $location.url("login");
                                }

                            })
                            .error(function (e) {

                                console.log(e);
                            });
                }
            };
        });