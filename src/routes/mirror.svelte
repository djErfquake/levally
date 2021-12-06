<script>
    import moment from 'moment';
    import Fa from 'svelte-fa';
    import { faCar } from '@fortawesome/free-solid-svg-icons';
    const trafficIconTheme = { primaryColor: '#fff', size: '10vh' };
    import Mirror from '../data/mirror';

    let time = {
        clock: "",
        date: "",
        updateInterval: null,
        start: function() {
            if (this.updateInterval) { 
                clearInterval(this.updateInterval);
                u.interval = null;
            }
            this.update();
            // update every second
            this.updateInterval = setInterval(this.update, 1000);
        },
        update: function() {
            const m = new moment();
            this.clock = m.format('h:mm A');
            // this.clock = m.format('h:mm:ss A');
            this.date = m.format('dddd MMMM Do YYYY');
            time = this;
        }
    };
    let traffic = Mirror.traffic;
    let weather = {
        start: function() {
            if (this.updateInterval) { 
                clearInterval(this.updateInterval);
                u.interval = null;
            }
            this.update();
            // update every fifteen minutes
            this.updateInterval = setInterval(this.update, 1000 * 60 * 15);
        },
        update: function() {

        }
    };
    let calendar = {
        ids: Mirror.calendar.ids,
        start: function() {
            if (this.updateInterval) { 
                clearInterval(this.updateInterval);
                u.interval = null;
            }
            this.update();
            // update every hour
            this.updateInterval = setInterval(this.update, 1000 * 60 * 60);
        },
        update: function() {

        }
    }

    if (process.browser) {
        window.initTraffic = function() {
            traffic.destinations.forEach(d => {
                console.log(`checking traffic for ${d.name}`);
                d.text = "";
                d.warningText = "";
                const m = new moment();
                if (m.day() >= d.timeframe.day.min && m.day() <= d.timeframe.day.max && m.hour() >= d.timeframe.hour.min && m.hour() <= d.timeframe.hour.max) {
                    const googleDirections = new google.maps.DirectionsService();
                    googleDirections.route({
                        origin: traffic.home,
                        destination: d.address,
                        travelMode: 'DRIVING' 
                    }, (response, status) => {
                        console.log(`${d.name}'s route`, response);
                        if (status === 'OK') {
                            d.text = response.routes[0].legs[0].duration.text;
                            if (response.routes[0].warnings.length > 0) {
                                d.warningText = response.routes[0].warnings[0].text;
                            }
                        }
                        d.collected = true;
                        traffic = traffic;
                    });
                }
            });
        };

        window.initCalendar = function() {
            console.log("initCalendar");
            // gapi.load('client:auth2', () => {
            //     gapi.client.init({
            //         discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
            //         clientId: Mirror.calendar.apiClientId,
            //         scope: 'https://www.googleapis.com/auth/calendar.readonly'
            //     }).then(function() {
            //         // listen for sign-in state changes
            //         gapi.auth2.getAuthInstance().isSignedIn.listen(updateGoogleSignInStatus);

            //         // handle the initial sign-in state
            //         updateGoogleSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            //     });
            // });

            // let updateGoogleSignInStatus = (isSignedIn) => {
            //     gapi.auth2.getAuthInstance().signIn().then(() => {
            //         /*
            //         // get calendar list
            //         let calendarRequest = gapi.client.calendar.calendarList.list();
            //         calendarRequest.execute(function(data) {
            //         let calendars = data.items;
            //         console.log("calendar list", data);
            //         });
            //         */

            //         updateCalendars();
            //         calendarInterval = setInterval(updateCalendars, 10800000); // update every 3 hours

            //     });
            // };
        }
    }

    time.start();
</script>


<svelte:head>
    <script defer async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrJ_2S9m-lZ5jmBPHteOGVc55b4Suqirc&libraries=places&callback=initTraffic"></script>
    <script async defer src="https://apis.google.com/js/api.js" onload="initCalendar" onreadystatechange="if (this.readyState === 'complete') this.onload()"></script>
</svelte:head>


<main>
    <div class="time-container">
        <div class="clock">{time.clock}</div>
        <div class="date">{time.date}</div>
        <div class="traffic">
            {#each traffic.destinations as d}
                {#if d.collected}
                <div class="destination">
                    <div class="traffic-icon">
                        <Fa icon={faCar} {...trafficIconTheme}/>
                    </div>
                    <div class="destination-text">
                        <div class="destination-time">
                            <p>Time to {d.name}</p>
                            <p>{d.text}</p>
                        </div>
                        {#if d.warningText != ""}
                            <div class="destination-warning"><p>{d.warningText}</p></div>
                        {/if}
                    </div>
                </div>
                {/if}
            {/each}
        </div>
    </div>

    <div class="temperature-container">
        <div class="temperature-main">
            <!-- <i class='temperature-icon wi'></i> -->
            <div class="temperature-number"></div>
        </div>
        <div class='temperature-extras'>
            <div class='temperature-high-and-low'></div>
            <div class='temperature-percipitation-time-container'>
                <!-- <i class='temperature-percipitation-time-icon wi wi-umbrella'></i> -->
                <div class='temperature-percipitation-time'></div>
            </div>
            <div class='temperature-percipitation-container'>
                <!-- <i class='temperature-percipitation-icon wi'></i> -->
                <div class='temperature-percipitation'></div>
            </div>
          <div class='temperature-description'></div>
          <div class='temperature-sub-container'></div>
        </div>
    </div>
</main>


<style>
    :global(html) {
        height: 100%;
    }

    :global(body) {
        height: 100%;
        color: #fff;
        background-color: #000;
        text-rendering: optimizeLegibility;
    }

    :global(#sapper) {
        height: 100%;
    }

    :global(#sapper-container) {
        height: 100%;
    }

    main {
        height: 100%;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .time-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .clock {
        font-size: 25vh;
    }

    .date {
        font-size: 5vh;
    }

    .traffic {
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .destination {
        display: flex;
        font-size: 3vh;
    }

    .traffic-icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .destination-text {
        width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }

    .destination-time {
        text-align: center;
    }


</style>