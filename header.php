<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Skeleton
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="shortcut icon" href="<?php echo get_site_icon_url(); ?>" />
<?php wp_head(); ?>



</head>

<body <?php body_class(); ?>>


	
<div id="page" class="Site">
	<header id="masthead" class="Site-header u-positionRelative u-sizeFull u-paddingHorizontal--inter u-displayFlex u-flexAlignItemsCenter is-animating u-zIndex20">
		
		<div class="u-maxSize--container u-alignCenterBox u-sizeFull">
			<div class="Site-header-line1 u-marginVertical u-displayFlex u-flexAlignItemsCenter_ u-flexFolowSize">
				<!-- Logo do site -->
				<div class="Site-header-branding u-displayFlex u-size6of24"> 
					<a href="<?php echo linkHome(); ?>" class="u-displayBlock <?php echo classScrollDown(); ?>">
						<img src="<?php echo  get_template_directory_uri(); ?>/assets/images/logotipo-politico--header.png" alt="Welton Lemos">
					</a>
					<div class="Slogan u-marginLeft--inter--px">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-welton-lemos-o-amigo-que-temos-mobile.png" />
					</div>
					<?php // get_template_part('template-parts/header/header','branding');?>
				</div>
				<!-- Navigation -->
				<?php  get_template_part('template-parts/header/header','navigation'); ?>
				<?php  //get_template_part('template-parts/header/header','search-form'); ?>
			</div>
		</div>

	</header><!-- #masthead -->

	

	<div class="Site-container">
		<div id="content" class="Site-container-content">
