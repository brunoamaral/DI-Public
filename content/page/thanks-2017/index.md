---

date: "2016-12-24T22:37:06Z"
title: "Your Message is in the Bottle!"
type: "page"
options:
  unlisted: false

---


<div class="row">
    <h1>Thank you for sharing   </h1>

        <div class="12u$">
            <a href="https://flickr.com/people/fotoben"><img src="./fotoben_FimDeAno_goldenratio.jpg" alt="Bruno Amaral" style="max-height: 40%; width: auto;" class="image right not-small"></a>
                <p>
                We will keep your predictions save and away from prying eyes.
                </p>
                <p>In <span id="countdown"></span> you will receive an email to remind you of the predictions and goals you saved.
                </p>
                <p>See you next year! <br>
                — Bruno</p>
        </div>
</div>

<script>

    CountDownTimer('01/01/2019 10:1 AM', 'countdown');


    function CountDownTimer(dt, id)
    {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById(id).innerHTML = '<strong>' + days + '</strong> days ';
            document.getElementById(id).innerHTML += '<strong>' + hours + '</strong> hours ';
            document.getElementById(id).innerHTML += '<strong>' +  minutes + '</strong> minutes ';
            document.getElementById(id).innerHTML += '<strong>' +  seconds + '</strong> seconds';
        }

        timer = setInterval(showRemaining, 1000);
    }

</script>
