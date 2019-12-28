define(
	[
		'handlebars',
		'text!templates/table.html',
		'text!templates/row.html',
		'text!templates/editor.html',
		'text!templates/tour.html',
		'text!templates/node.html',
		'text!templates/header.html',
		'text!templates/panel.html',
		'text!templates/dianping.html',
		'text!templates/dashboard.html',
		'text!templates/business.html',
		'text!templates/page.html',
		'text!templates/signin.html',
		'text!templates/homepage.html',
		'text!templates/footer.html',
		'text!templates/products.html',
		'text!templates/marketing.html',
		'text!templates/stock.html',
		'text!templates/admin/admin.html',
		'text!templates/admin/topbar.html',
		'text!templates/admin/bottom.html',
		'text!templates/admin/menu.html',
		'text!templates/admin/customer.html',
		'text!templates/cloud.html',
		'text!templates/d3/bubbleChart.html',
		'text!templates/db/indexed.html',
		'text!templates/db/pouch.html',
		'text!templates/db/localForage.html',
		'text!templates/themes/creative.html',
		'text!templates/sidebar.html',
	],
	function(
		Handlebars,
		TableTpl,
		RowTpl,
		EditorTpl,
		TourTpl,
		NodeTpl,
		HeaderTpl,
		PanelTpl,
		DianpingTpl,
		DashboardTpl,
		BusinessTpl,
		PageTpl,
		SignInTpl,
		HomepageTpl,
		FooterTpl,
		ProductsTpl,
		MarketingTpl,
		StockTpl,
		AdminTpl,
		TopbarTpl,
		BottomTpl,
		MenuTpl,
		CustomerTpl,
		CloudTpl,
		BubbleChartTpl,
		IndexedTpl,
		PouchTpl,
		LocalForageTpl,
		CreativeTpl,
		SidebarTpl
	) {
		return {
			TableTemplate: Handlebars.compile(TableTpl),
			RowTemplate: Handlebars.compile(RowTpl),
			EditorTemplate: Handlebars.compile(EditorTpl),
			TourTemplate: Handlebars.compile(TourTpl),
			NodeTemplate: Handlebars.compile(NodeTpl),
			HeaderTemplate: Handlebars.compile(HeaderTpl),
			PanelTemplate: Handlebars.compile(PanelTpl),
			DianpingTemplate: Handlebars.compile(DianpingTpl),
			DashboardTemplate: Handlebars.compile(DashboardTpl),
			BusinessTemplate: Handlebars.compile(BusinessTpl),
			PageTemplate: Handlebars.compile(PageTpl),
			SignInTemplate: Handlebars.compile(SignInTpl),
			HomepageTemplate: Handlebars.compile(HomepageTpl),
			FooterTemplate: Handlebars.compile(FooterTpl),
			ProductsTemplate: Handlebars.compile(ProductsTpl),
			MarketingTemplate: Handlebars.compile(MarketingTpl),
			StockTemplate: Handlebars.compile(StockTpl),
			AdminTemplate: Handlebars.compile(AdminTpl),
			TopbarTemplate: Handlebars.compile(TopbarTpl),
			BottomTemplate: Handlebars.compile(BottomTpl),
			MenuTemplate: Handlebars.compile(MenuTpl),
			CustomerTemplate: Handlebars.compile(CustomerTpl),
			CloudTemplate: Handlebars.compile(CloudTpl),
			BubbleChartTemplate: Handlebars.compile(BubbleChartTpl),
			IndexedTemplate: Handlebars.compile(IndexedTpl),
			PouchTemplate: Handlebars.compile(PouchTpl),
			LocalForageTemplate: Handlebars.compile(LocalForageTpl),
			CreativeTemplate: Handlebars.compile(CreativeTpl),
			SidebarTemplate: Handlebars.compile(SidebarTpl),
		};
	}
);