/**
 * Created by Padmavati on 5/20/2017.
 */

var services = angular.module('nest.services', ['ngResource']);

services.factory('UserFactory', function ($resource) {
    return $resource('/nest/login', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
})
