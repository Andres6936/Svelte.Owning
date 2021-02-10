<script>
    import Task from "../Component/Task.svelte";
    import Sales from '../Component/Sales.svelte';
    import Revenue from "../Component/Revenue.svelte";
    import Invoices from "../Component/Invoices.svelte";
    import PageTitle from '../Component/PageTitle.svelte';
    import NewClients from '../Component/NewClients.svelte';
    import NewWebsite from "../Component/NewWebsite.svelte";
    import UIRedesign from "../Component/UIRedesign.svelte";
    import ActiveUsers from '../Component/ActiveUsers.svelte';
    import UsingStorage from "../Component/UsingStorage.svelte";
    import NewReport from "../Modal/NewReport.svelte";
    import RegisterEvents from "../Component/RegisterEvents.svelte";
    import TrafficSummary from "../Component/TrafficSummary.svelte";
    import MostVisitedPages from "../Component/MostVisitedPages.svelte";
    import SocialMediaTraffic from "../Component/SocialMediaTraffic.svelte";
    import DevelopmentActivity from "../Component/DevelopmentActivity.svelte";
    import ComparativeResume from "../Component/ComparativeResume.svelte";
    import DailyResume from "../Component/DailyResume.svelte";
    import DollarSign from "../SVG/DollarSign.svelte";
    import ShoppingCart from "../SVG/ShoppingCart.svelte";
    import Members from "../SVG/Members.svelte";
    import Twitter from "../SVG/Twitter.svelte";
    import Facebook from "../SVG/Facebook.svelte";
</script>

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
                    <DailyResume titleResume="78 Orders" growthResume="32 shipped" backgroundColor="bg-green">
                        <ShoppingCart/>
                    </DailyResume>
                </div>
                <div class="col-12">
                    <DailyResume titleResume="1352 Members" growthResume="163 registered today"
                                 backgroundColor="bg-yellow">
                        <Members/>
                    </DailyResume>
                </div>
                <div class="col-12">
                    <DailyResume titleResume="623 Shares" growthResume="16 today" backgroundColor="bg-twitter">
                        <Twitter/>
                    </DailyResume>
                </div>
                <div class="col-12">
                    <DailyResume titleResume="132 Likes" growthResume="21 today" backgroundColor="bg-facebook">
                        <Facebook/>
                    </DailyResume>
                    <div class="card card-sm">
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

<NewReport/>
