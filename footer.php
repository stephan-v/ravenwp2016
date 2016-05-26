        <?php if(!is_page('Contact')): ?>
            <div class="row contact-us">
                <div class="container">
                    <div class="col-md-5">
                        <h1>Laten we samenwerken<div class="highlight">.</div></h1>
                        <p>Klaar om een project te starten of simpelweg nieuwsgierig naar de mogelijkheden? We bespreken het graag.</p>
                        <a class="btn" href="contact">Maak kennis</a>
                    </div>
                </div>
            </div><!-- /.row -->
        <?php endif; ?>

        <footer>
            <div class="container">
                <img src="<?php bloginfo('template_directory'); ?>/assets/img/banner.svg" alt="Footer banner" class="logo">

                <div class="row">
                    <div class="col-sm-3 col-sm-offset-1">
                        <img src="<?php bloginfo('template_directory'); ?>/assets/img/logo-horizontal.svg" alt="Horizontaal logo" class="logo-horizontal">
                    </div><!-- /.col-sm-4 -->

                    <div class="col-sm-2 col-sm-offset-0 col-xs-5 col-xs-offset-1">
                        <h3>Menu</h3>
                        <?php wp_nav_menu(); ?>
                    </div><!-- /.col-sm-2 -->

                    <div class="col-sm-2 col-xs-5">
                        <h3>Raven</h3>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Voorwaarden</a></li>
                            <li><a href="#">Client Portal</a></li>
                        </ul>
                    </div><!-- /.col-sm-2 -->

                    <div class="clearfix visible-xs-block"></div>

                    <div class="col-sm-3 contact">
                        <h3>Contact</h3>
                        <p>06 - 54795053</p>
                        <a href="#">info@ravenwebdesign.nl</a>
                    </div><!-- /.col-sm-4 -->
                </div><!-- /.row -->
            </div><!-- /.container -->
        </footer>

        <?php wp_footer(); ?>
    </body>
</html>