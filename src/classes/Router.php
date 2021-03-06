<?php
    namespace Classes;
    use Classes\Phim;
    class Router {
        public function index() {
            $ds_phim = Phim::getAll();
            $user = new User();
            include './view/home.php';
        }
        public function view($page) {
            include './view/'.$page.".php";
        }
        public function manage() {
            $ds_phim = Phim::getAll();
            include './view/admin.php';
        }
        public function phimAll() {
            $user = new User();
            $ds_phim = Phim::getAll();
            include './view/phim_all.php';
        }
        public function phim($phim_id) {
            $user = new User();
            $ds_phim = Phim::getAll();
            $phim = new Phim($phim_id);

            include './view/phim.php';
        }
        public function functions($page) {
            include './functions/'.$page.".php";
        }
        // public function pictures($img) {
        //     include './pictures/'.$img;
        // }
    }
?>