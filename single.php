<?php require('header.php'); ?>
	<div class="single-blog-header text-center">
    </div><!-- /.header -->

	<div class="container blog-single">
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<h1><?php single_post_title(); ?></h1>
				</div>

				<div class="col-md-10 col-md-offset-1">
					<?php the_post_thumbnail(); ?>
				</div><!-- /.col-md-12 -->
			</div><!-- /.row -->

			<div class="row">
				<div class="col-md-8 col-md-offset-2 main-text">
					<?php the_content(); ?>
				</div><!-- /.col-md-8 -->
			</div><!-- /.row -->
		<?php endwhile; endif; ?>
	</div><!-- /.container -->
<?php require('footer.php'); ?>