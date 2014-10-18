<?php

use \Core\Entities\AbstractController;

class MobileController extends AbstractController {

    public function indexAction()
    {
        $this->app->render('mobile/index.php');
    }

}