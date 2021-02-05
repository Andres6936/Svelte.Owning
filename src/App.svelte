<script>
	import Task from "./Task.svelte";
	import Sales from './Sales.svelte';
	import Header from './Header.svelte';
	import Footer from "./Footer.svelte";
	import Revenue from "./Revenue.svelte";
	import Invoices from "./Invoices.svelte";
	import PageTitle from './PageTitle.svelte';
	import Navigation from './Navigation.svelte';
	import NewClients from './NewClients.svelte';
	import NewWebsite from "./NewWebsite.svelte";
	import UIRedesign from "./UIRedesign.svelte";
	import ActiveUsers from './ActiveUsers.svelte';
	import UsingStorage from "./UsingStorage.svelte";
	import NewReport from "./Modal/NewReport.svelte";
	import RegisterEvents from "./RegisterEvents.svelte";
	import TrafficSummary from "./TrafficSummary.svelte";
	import MostVisitedPages from "./MostVisitedPages.svelte";
	import SocialMediaTraffic from "./SocialMediaTraffic.svelte";
	import DevelopmentActivity from "./DevelopmentActivity.svelte";
	import ComparativeResume from "./Component/ComparativeResume.svelte";
	import DailyResume from "./Component/DailyResume.svelte";
	import DollarSign from "./SVG/DollarSign.svelte";
	import ShoppingCart from "./SVG/ShoppingCart.svelte";
	import Members from "./SVG/Members.svelte";
	import Twitter from "./SVG/Twitter.svelte";
	import Facebook from "./SVG/Facebook.svelte";
</script>

<div class="page">
	<Header/>
	<Navigation/>
	<div class="content">
		<div class="container-xl">
			<PageTitle/>
			<div class="row row-deck row-cards">
				<div class="col-sm-6 col-lg-3">
					<Sales/>
				</div>
				<div class="col-sm-6 col-lg-3">
					<Revenue/>
				</div>
				<div class="col-sm-6 col-lg-3">
					<NewClients/>
				</div>
				<div class="col-sm-6 col-lg-3">
					<ActiveUsers/>
				</div>
				<div class="col-lg-6">
					<div class="row row-cards">
						<div class="col-12">
							<TrafficSummary/>
						</div>
						<div class="col-12">
							<UsingStorage/>
						</div>
					</div>

				</div>

				<!-- <WorldMap/> !-->

				<div class="col-lg-6">
					<div class="row row-cards row-deck">
						<div class="col-sm-6">
							<NewWebsite/>
						</div>
						<div class="col-sm-6">
							<UIRedesign/>
						</div>
						<div class="col-sm-4">
							<ComparativeResume titleResume="New Tickets" amountDaily="43" percentageGrowth="6"/>
						</div>
						<div class="col-sm-4">
							<ComparativeResume titleResume="Daily Earnings" amountDaily="95" percentageGrowth="-2"/>
						</div>
						<div class="col-sm-4">
							<ComparativeResume titleResume="New Replies" amountDaily="7" percentageGrowth="9"/>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<DevelopmentActivity/>
				</div>
				<div class="col-md-8">
					<RegisterEvents/>
				</div>
				<div class="col-md-4">
					<div class="row row-cards">
						<div class="col-12">
							<DailyResume titleResume="132 Sales" growthResume="12 waiting payments">
								<DollarSign/>
							</DailyResume>
						</div>
						<div class="col-12">
							<div class="card card-sm">
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col-auto">
                          <span class="bg-green text-white avatar">
							  <ShoppingCart/>
                          </span>
										</div>
										<div class="col">
											<div class="font-weight-medium">
												78 Orders
											</div>
											<div class="text-muted">
												32 shipped
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="card card-sm">
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col-auto">
                          <span class="bg-yellow text-white avatar">
							  <Members/>
                          </span>
										</div>
										<div class="col">
											<div class="font-weight-medium">
												1352 Members
											</div>
											<div class="text-muted">
												163 registered today
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="card card-sm">
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col-auto">
                          <span class="bg-twitter text-white avatar">
							  <Twitter/>
                          </span>
										</div>
										<div class="col">
											<div class="font-weight-medium">
												623 Shares
											</div>
											<div class="text-muted">
												16 today
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="card card-sm">
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col-auto">
                          <span class="bg-facebook text-white avatar">
							  <Facebook/>
                          </span>
										</div>
										<div class="col">
											<div class="font-weight-medium">
												132 Likes
											</div>
											<div class="text-muted">
												21 today
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12 col-lg-8">
					<MostVisitedPages/>
				</div>
				<div class="col-md-6 col-lg-4">
					<a href="https://github.com/sponsors/codecalm" class="card card-sponsor" target="_blank"
					   rel="noopener" style="background-image: url(./static/sponsor-banner-homepage.svg)"
					   aria-label="Sponsor Tabler!">
						<div class="card-body"></div>
					</a>
				</div>
				<div class="col-md-6 col-lg-4">
					<SocialMediaTraffic/>
				</div>
				<div class="col-md-12 col-lg-8">
					<Task/>
				</div>
				<div class="col-12">
					<Invoices/>
				</div>
			</div>
		</div>
		<Footer/>
	</div>
</div>
<NewReport/>
