<?php

use \Core\Entities\AbstractController;

class IndexController extends AbstractController {

    public function indexAction()
    {
        $this->app->view->setData('message', 'red');
        $this->app->render('index.php');
    }

}