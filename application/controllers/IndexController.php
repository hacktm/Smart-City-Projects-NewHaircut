<?php

use \Core\Entities\AbstractController;

class IndexController extends AbstractController {

    public function indexAction()
    {
        $this->app->render('desktop/index.phtml');
    }

}