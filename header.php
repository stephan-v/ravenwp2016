<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title><?php echo get_bloginfo( 'name' ); ?></title>
        <link rel="apple-touch-icon" sizes="57x57" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//apple-touch-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//apple-touch-icon-180x180.png">
        <link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//android-chrome-192x192.png" sizes="192x192">
        <link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//manifest.json">
        <link rel="mask-icon" href="<?php bloginfo('template_directory'); ?>/assets/img/favicons//safari-pinned-tab.svg" color="#000000">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-67055393-3', 'auto');
            ga('send', 'pageview');
        </script>

        <?php wp_head(); ?>
    </head>
    <body>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <div id="menu-icon-wrapper">
                    <svg width="1000px" height="1000px">
                        <path id="pathA" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                        <path id="pathB" d="M 300 500 L 700 500"></path>
                        <path id="pathC" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                    </svg>
                </div><!-- /.menu-icon-wrapper -->

                <a href="<?php echo get_site_url(); ?>" class="logo">
                    <img src="<?php bloginfo('template_directory'); ?>/assets/img/banner.svg" alt="Logo banner">
                </a>
            </div><!-- /.nav-header -->

            <div class="collapse navbar-collapse"  id="bs-example-navbar-collapse-1">
                <?php 
                    wp_nav_menu([
                        'menu' => 'main-navigation', 
                        'menu_class' => 'nav navbar-nav navbar-right', 
                        'link_before' => '<span data-hover="link">', 
                        'link_after' => '</span>'
                    ]); 
                ?>
            </div><!-- /.collapse -->
        </div><!-- /.container -->
    </nav><!-- /.navbar-default -->

    <div class="cd-transition-layer closing visible"> 
        <div class="bg-layer"></div>
    </div> <!-- .cd-transition-layer -->

