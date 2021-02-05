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
                          <span class="bg-green text-white avatar"><svg xmlns="http://www.w3.org/2000/svg" class="icon"
																		width="24" height="24" viewBox="0 0 24 24"
																		stroke-width="2" stroke="currentColor"
																		fill="none" stroke-linecap="round"
																		stroke-linejoin="round"><path stroke="none"
																									  d="M0 0h24v24H0z"
																									  fill="none"/><circle
								  cx="9" cy="19" r="2"/><circle cx="17" cy="19" r="2"/><path
								  d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2"/></svg>
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
                          <span class="bg-yellow text-white avatar"><svg xmlns="http://www.w3.org/2000/svg" class="icon"
																		 width="24" height="24" viewBox="0 0 24 24"
																		 stroke-width="2" stroke="currentColor"
																		 fill="none" stroke-linecap="round"
																		 stroke-linejoin="round"><path stroke="none"
																									   d="M0 0h24v24H0z"
																									   fill="none"/><circle
								  cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path
								  d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg>
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
                          <span class="bg-twitter text-white avatar"><svg xmlns="http://www.w3.org/2000/svg"
																		  class="icon" width="24" height="24"
																		  viewBox="0 0 24 24" stroke-width="2"
																		  stroke="currentColor" fill="none"
																		  stroke-linecap="round"
																		  stroke-linejoin="round"><path stroke="none"
																										d="M0 0h24v24H0z"
																										fill="none"/><path
								  d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"/></svg>
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
                          <span class="bg-facebook text-white avatar"><svg xmlns="http://www.w3.org/2000/svg"
																		   class="icon" width="24" height="24"
																		   viewBox="0 0 24 24" stroke-width="2"
																		   stroke="currentColor" fill="none"
																		   stroke-linecap="round"
																		   stroke-linejoin="round"><path stroke="none"
																										 d="M0 0h24v24H0z"
																										 fill="none"/><path
								  d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"/></svg>
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
