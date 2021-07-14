<script>
    import moment from 'moment';
    import Fa from 'svelte-fa';
    import { faCar } from '@fortawesome/free-solid-svg-icons';
    const trafficIconTheme = { primaryColor: '#fff', size: '10vh' };
    import Mirror from '../data/mirror';

    let time = {
        clock: "",
        date: "",
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
        update: function() {

        }
    };
    let calendar = {
        update: function() {

        }
    }


    let updates = [
        { function: () => { time.update(); }, duration: 1000 }, // every second
        { function: () => { weather.update(); }, duration: 1000 * 60 * 15 }, // every fiften minutes
        { function: () => { calendar.update(); }, duration: 1000 * 60 * 60  } // every hour
    ];
    

    function startUpdates() {
        updates.forEach(u => {
            if (u.interval) { clearInterval(u.interval); u.interval = null; }
            u.function();
            u.interval = setInterval(u.function, u.duration);
        });
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

        window.updateCalendar = function() {
            console.log("updateCalendar");
            let calendarRequest = gapi.client.calendar.events.list({
                'calendarId' : calendarId,
                'timeZone': 'America/New_York',
                'timeMin': today.toISOString(),
                'singleEvents': true,
                'orderBy': 'startTime'});
            calendarRequest.execute(function(data) {
                console.log("calendar events", data);
            });
        }
    }

    startUpdates();
</script>


<svelte:head>
    <script defer async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrJ_2S9m-lZ5jmBPHteOGVc55b4Suqirc&libraries=places&callback=initTraffic"></script>
    <script async defer src="https://apis.google.com/js/api.js?callback=updateCalendar"> </script>
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