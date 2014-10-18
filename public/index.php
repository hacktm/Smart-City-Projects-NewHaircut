<?php

defined('DS') || define('DS', DIRECTORY_SEPARATOR);

define('BASE_PATH', realpath(__DIR__ . DS . '..'));
define('PUBLIC_PATH', realpath(__DIR__));
define('PROJECT_PATH', BASE_PATH);
define('LIBRARIES_PATH', PROJECT_PATH . DS . 'libraries');
define('APPLICATION_PATH', PROJECT_PATH . DS . 'application');

// Ensure library/ is on include_path
set_include_path(implode(PATH_SEPARATOR, array(
    realpath(BASE_PATH . '/libraries'),
    get_include_path(),
)));

require_once LIBRARIES_PATH . DS . 'Slim' . DS . 'Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim(require_once BASE_PATH . DS . 'configs' . DS . 'application.php');

\Core\Application::initialize($app);

/** Define Routes */
$app->notFound(function () use ($app) {
    $app->render('error/404.php');
});

$app->get('/',
    function () use ($app) {

    }
)->name('index');

$app->get('/mobile(/)',
    function () use ($app) {

    }
)->name('mobile');

/** Start Application */
$app->run();