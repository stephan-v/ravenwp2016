<?php get_header(); ?>
	<div class="header portfolio-header">
        <div class="container">
            <div class="absolute-center">
                <h1 class="js-rotating" data-sentences="3">
                    Werk waar we plezier in hebben,
                    Werk dat voor zichzelf spreekt,
                    Werk waar we trots op zijn.
                </h1>
            </div><!-- /.absolute-center -->
        </div><!-- /.container -->
    </div><!-- /.jumbotron -->

	<div class="portfolio">
		<!-- id 3 = portfolio -->
		<?php query_posts('cat=3'); ?>

		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

			<div class="portfolio-item" style="background-color: <?php the_field('backgroundcolor'); ?>;">
				<div class="container">
					<div class="row">
						<div class="col-sm-6 portfolio-text">
							<h2><?php the_title(); ?></h2>
							<?php the_excerpt(); ?>

							<div class="btn">Preview</div>
						</div><!-- /.col-md-6 -->

						<div class="col-sm-6">
							<?php
								if ( has_post_thumbnail() ) {
									the_post_thumbnail('full');
								} 
							?>
						</div><!-- /.col-md-6 -->
					</div><!-- /.row -->
				</div><!-- /.container -->
			</div><!-- /.portfolio-item -->

		<?php endwhile; else : ?>
			<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
		<?php endif; ?>
	</div><!-- /.portfolio -->
<?php get_footer(); ?>