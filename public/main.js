require(
	[
		'jquery', 'app', 'views/tour', 'views/header', 'router',
		'views/table', 'views/dianping', 'views/dashboard', 'views/dummy',
		'models/session', 'views/panel', 'mobile-detect', 'views/signin',
		'views/homepage', 'views/products', 'views/footer', 'views/marketing',
		'views/stock', 'views/admin/admin', 'views/cloud', 'views/d3/bubbleChart',
		'views/db/indexed', 'views/db/pouch', 'views/db/localForage', 'views/themes/creative',
		'bootstrap', 'highcharts'
	],
	function(
		$, app, Tour, Header, Router,
		Table, Dianping, Dashboard, Dummy, SessionModel, Panel, MobileDetect,
		SignIn, Homepage, Products, Footer, Marketing, Stock, Admin, Cloud, BubbleChart,
		Indexed, Pouch, LocalForage, Creative
	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		var contextMap = {
			"": Homepage,
			"Homepage": Homepage,
			"Products": Products,
			"Marketing": Marketing,
			"Tour": Tour,
			"Stock": Stock,
			"Admin": Admin,
			"Cloud": Cloud,
			"BubbleChart": BubbleChart,
			"Indexed": Indexed,
			"Pouch": Pouch,
			"LocalForage": LocalForage,
			"Creative": Creative,
			"Editors": Dummy,
			"Table": Table,
			"Dianping": Dianping,
			"Dashboard": Dashboard,
			"HighCharts": Dummy,
			"3d": Dummy,
			"SignIn": SignIn,
			"other": Dummy,
		};

		app.navigateTo = function(context, options) {
			app.mainRegion.show(new contextMap[context](options));
		};

		app.addInitializer(function(options) {
			app.md = new MobileDetect(window.navigator.userAgent);

			app.router = new Router();
			app.session = new SessionModel();

			app.addRegions({
				headerRegion: 'header[class="main-header"]',
				mainRegion: 'main[role="main"]',
				footerRegion: 'footer[role="contentinfo"]',
			});

			app.headerRegion.show(new Header());
			app.footerRegion.show(new Footer());

			app.session.checkAuth({
				complete: function() {
					Backbone.history.start();
				}
			});
		});
	}
);