<?php
/**
 * The main template file
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package WordPress
 * @subpackage Skeleton
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<main id="main" class="SiteMain" role="main">
	<?php get_template_part('template-parts/plugins/plugin','lightbox');?>
	<?php get_template_part('template-parts/page/intro','page');?>
	<?php get_template_part('template-parts/propostas/section','propostas-blocks'); ?>
	<?php get_template_part('template-parts/videos/section','videos'); ?>
	<?php get_template_part('template-parts/propostas/section','propostas'); ?>
	<?php get_template_part('template-parts/cta/section','newsletter'); ?>
	<?php get_template_part('template-parts/na-midia/section','na-midia'); ?>
	<?php get_template_part('template-parts/blog/section','blog'); ?>
	<?php get_template_part('template-parts/depoimentos/section','depoimentos'); ?>
	<?php get_template_part('template-parts/contact/section','contact'); ?>
</main><!-- #main -->



<?php get_footer();
