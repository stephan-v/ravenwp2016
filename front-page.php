<?php get_header(); ?>
        <div class="header index">
            <div class="container">
                <div class="absolute-center">
                    <h1>Welkom bij Raven Webdesign<span class="highlight">.</span></h1>
                    <p class="js-rotating" data-sentences="3">Wij kiezen voor een andere aanpak, Gedurfde websites met focus, Websites die het verschil maken</p>
                </div><!-- /.absolute-center -->
            </div><!-- /.container -->
        </div><!-- /.header -->

        <section class="about-us os-animation-fade no-opacity">
            <div class="container">
                <div class="row">
                    <div class="col-md-11 col-md-offset-1">
                        <h4>Wij geloven in -</h4>
                        <h3>Kwaliteitsgedreven digitale producten,<br>gemaakt met oog op de toekomst.</h3>
                    </div><!-- /.col-md-11 -->
                </div><!-- /.row -->
                <div class="row">
                    <div class="col-md-4 col-md-offset-2">
                        <p>Wij creeren website en webapplicaties met impact, websites die zorgen voor resultaat. Visueel aantrekkelijk en gebruiksvriendelijke websites die gemakkelijk te onderhouden zijn.</p>
                    </div><!-- /.col-md-4 -->
                    <div class="col-md-4">
                        <p>Door gebruik te maken van de laatste technologieen maken wij websites die geoptimaliseerd voor smartphones, tablets, laptops, desktops en alles er tussenin.</p>
                    </div><!-- /.col-md-4 -->
                </div><!-- /.row -->
            </div><!-- /.container -->
        </section><!-- /.row -->

        <div class="row mockup os-animation-left no-opacity">
            <div class="container">
                <div class="col-md-6">
                    <h2>Lorem ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos deserunt eligendi quia harum exercitationem vel, odio, nobis vero nulla ea, accusamus tenetur nesciunt! Ratione quis cupiditate natus excepturi assumenda voluptatibus!</p>
                </div><!-- /.col-md-6 -->

                <div class="col-md-6">
                    <img src="<?php bloginfo('template_directory'); ?>/assets/img/iphone-mockup.jpg" alt="iPhone mockup">
                </div><!-- /.col-md-6 -->
            </div><!-- /.container -->
        </div><!-- /.row -->
        
        <div class="container">
            <div class="portfolio-teaser">
                <div class="row os-animation-fade no-opacity">
                    <h2 class="text-center">Voorbeelden van ons werk</h2>
                    <hr>
                </div><!-- /.row -->
                <div class="row">
                    <!-- id 3 = portfolio -->
                    <?php $recentposts = wp_get_recent_posts(['numberposts' => 3, 'category' => 3]); ?>

                    <?php foreach($recentposts as $post): ?>
                        <div class="col-md-4 os-animation-fade no-opacity">
                            <div class="portfolio-item">
                                <a href="<?php the_permalink($post['ID']); ?>">
                                    <?php echo get_the_post_thumbnail($post['ID']); ?>
                                </a>
                            </div><!-- /.portfolio-item -->
                        </div><!-- /.col-md-4 -->
                    <?php endforeach; ?>
                </div><!-- /.row -->
            </div><!-- /.portfolio-teaser -->
        </div><!-- /.container -->
<?php require('footer.php'); ?>