<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/home", name="home")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    
    /**
     * @Route("/page0", name="page0")
     */
    public function video(): Response
    {
        return $this->render('home/page0.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
     /**
     * @Route("/page1", name="page1")
     */
    public function debutjeu(): Response
    {
        return $this->render('home/page1.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
       /**
     * @Route("/page2", name="page2")
     */
    public function marche(): Response
    {
        return $this->render('home/page2.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
       /**
     * @Route("/page3", name="page3")
     */
    public function passante(): Response
    {
        return $this->render('home/page3.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

         /**
     * @Route("/page4", name="page4")
     */
    public function avion(): Response
    {
        return $this->render('home/page4.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

          /**
     * @Route("/controles", name="controles")
     */
    public function controle(): Response
    {
        return $this->render('home/controles.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
             /**
     * @Route("/page6", name="page6")
     */
    public function fin(): Response
    {
        return $this->render('home/page6.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
