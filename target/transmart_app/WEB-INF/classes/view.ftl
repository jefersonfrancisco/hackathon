<#assign coreContext='meu_layout'>
<#assign layoutContext='layoutangular'>

<link href="/${coreContext}/resources/styles.css" rel="stylesheet"/>

<#if pageRender.isEditMode()=true>
	<#import "/wcm.ftl" as wcm/>
	<div class="wcm-wrapper-content">
		<@wcm.header />
		<@wcm.menu />
		<div class="wcm-all-content">
			<div id="wcm-content" class="clearfix wcm-background">
				<div id="wcm_widget" class="clearfix">
					<app-root></app-root>
				</div>
				<@wcm.footer layoutuserlabel="wcm.user.footer" />
			</div>
		</div>
	</div>
<#else>
	<app-root></app-root>
</#if>

<script type="text/javascript">

	/**
	 * The script below sets some enviroment variables to be used inside
	 * Angular application. (see: app.config.ts)
	 */
	(function setEnvironmentParams() {

		// base url for frontend application
		window['_app_baseUrl'] = '${protectedContextPath}/${tenantCode}';

		// convention prefix used both in WCM and inside frontend application
		window['_app_prefix'] = '${layoutContext}';

	})();

</script>

<script type="text/javascript" src="/${coreContext}/resources/runtime.js"></script>
<script type="text/javascript" src="/${coreContext}/resources/polyfills.js"></script>
<!-- <script type="text/javascript" src="/${coreContext}/resources/scripts.js"></script> -->
<script type="text/javascript" src="/${coreContext}/resources/main.js"></script>

