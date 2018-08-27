<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Skeleton
 * @since 1.0
 * @version 1.0
 */

?>
		</div><!-- #content -->

		<footer class="Site-footer" role="contentinfo">
				<?php  get_template_part('template-parts/footer/section','footer-content'); ?>
				<?php  get_template_part('template-parts/footer/section','footer-info'); ?>
		</footer>
	</div><!-- .site-content-contain -->
</div><!-- #page -->
<!-- <script type="text/javascript" src="<?php //echo get_template_directory_uri() . '/assets/js/jquery-3.2.1.min.js'; ?>"></script>
<script type="text/javascript" src="<?php //echo get_template_directory_uri() . '/assets/js/main.min.js'; ?>"></script> -->
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/owl.carousel.min.js'; ?>"></script>
<link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/assets/css/owl.carousel.min.css'; ?>" />

<?php wp_footer(); ?>
</body>
</html>
