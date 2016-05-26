<?php get_header(); ?>
        <div class="header blog-header">
            <div class="container">
                <div class="absolute-center">
                    <h1 class="animated fadeInDown">
                        Onze laatste hersenspinsels samengevat<span class="highlight">.</span>
                    </h1>
                </div><!-- /.absolute-center -->
            </div><!-- /.container -->
        </div><!-- /.header -->

        <div class="container blog-page">
            <?php $posts = query_posts('cat=4'); ?>

            <div class="col-md-12">
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="post-item">
                            <a href="<?php the_permalink(); ?>">
                                <div class="post-thumbnail">
                                    <?php the_post_thumbnail('blog'); ?>
                                </div><!-- /.thumbnail -->
                                <div class="post-content">
                                    <h4><?php the_title(); ?></h4>
                                    <?php the_excerpt(); ?>
                                    <a href="#" class="post-readmore">Verder lezen</a>
                                </div><!-- /.content -->
                            </a>
                        </div><!-- /.blogitem -->
                    </div><!-- /.col-md-3 -->
                <?php endwhile; else : ?>
                    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
                <?php endif; ?>
                </div><!-- /.col-md-12 -->
        </div><!-- /.container -->
<?php require('footer.php'); ?>