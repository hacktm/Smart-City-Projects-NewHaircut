<?php

namespace Core;

class Application {

    public static function initialize($app)
    {
        $app->hook('slim.before.dispatch', function () use ($app) {

            $currentRoute = $app->router()->getCurrentRoute();
            $routeName    = $currentRoute->getName();
            $routeParts   = explode('/', $routeName);

            try {
                $controllerName = (empty($routeParts[0])) ? 'IndexController' : ucfirst($routeParts[0]) . 'Controller';
                $controllerFile = $controllerName . '.php';
                $actionName     = (empty($routeParts[1])) ? 'indexAction' : strtolower($routeParts[1]) . 'Action';

                if (is_file(APPLICATION_PATH . DS . 'controllers' . DS . $controllerFile)) {
                    require_once APPLICATION_PATH . DS . 'controllers' . DS . $controllerFile;

                    $object = new $controllerName();
                    $object->app = $app;
                    $object->{$actionName}();
                }
            } catch (\Exception $e) {
                /* Do nothing */
            }
        });
    }

}