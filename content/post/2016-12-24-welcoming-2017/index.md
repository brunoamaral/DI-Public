---

date: "2016-12-24T22:04:53Z"
PublishDate: "2016-12-24T22:04:53Z"
title: "Would you like to play a game for 2017?"
categories: 
tags: 
  - 2017
  - New Year
resources:
- src: "fotoben_FimDeAno_goldenratio.jpg"
options:
  unlisted: false

---

<section>
	<div class="text">

		<p>We all know that 2016 was not the best year. Not by a long shot. From terror attacks, to Zika, Brexit, police shootings, Syria, Trump, the death of Prince and David Bowie and ... I am pretty sure I missed something.</p>
	
	    <p>(update December 26<sup>th</sup>: And George Michael...)</p>
	    <p>(update December 27<sup>th</sup>: And Carrie Fisher...)</p>
	
		<p>We also know what is going to happen in the next few days. What as in fact already started; the numerous predictions and lists and summaries of the end of the year. Those are actually quite boring. Bloggers and other "opinion makers" try to be just vague enough to claim they were right. It doesn't even matter because we forget all about in the first two weeks.</p>
	
		<p>In the last few days I have been working in quite a few ideas and one of them is quite simple.</p>
	
		<p>The form below is a virtual "message in a bottle" or "time capsule" of sorts. You can use it to write down your goals and your predictions for 2017, and in <span id="countdown"></span> the timer ends and that email is sent back to you. No one else will get to see it. </p>
	
		<p>What's in it for you? Well not much other than the satisfaction of knowing you were right and that you reached your goals.</p>
	
		<p>And if you fail? Well it happens and no one will know.</p>
	
		<p>For what it's worth, I will be rooting for you. </p>
	
		<h2>Happy 2017 everyone!</h2>


	</div>
	<p class="highlight blue">One important note, the photo in the header was taken by the amazing <a href="https://www.flickr.com/people/fotoben">Benjamim</a> who gave permition for its use. You can find his photos on Flickr and <a href="http://www.blurb.com/b/3631405-bicicletaemlx">buy his book on blurb</a>. It makes for a great present for xmas 2017 ...</p>
</section>

<hr>

<h1>Time Capsule for 2017</h1>

<form method="post" action="https://formspree.io/twentyseventeen@brunoamaral.eu"  id="contactForm">
	<input type="hidden" name="_next" value="//brunoamaral.eu/thanks-2017/" />
    <div class="row uniform">
        <div class="12u 12u$(xsmall)">
            <input type="text" name="name" id="name" value="" placeholder="Name (optional)" />
        </div>
        <div class="12u$ 12u$(xsmall)">
            <input type="email" name="_replyto" id="email" value="" placeholder="Email" required />
        </div>

        <div class="6u">
        	<h4>My Goals for the next year</h4>
            <textarea name="goals" id="goals" placeholder="What are you aiming for in the new year?" rows="6"></textarea>
        </div>
        <div class="6u$">
        	<h4>My Predictions for 2017</h4>
            <textarea name="predictions" id="predictions" placeholder="Go for it Nostradamus!" rows="6"></textarea>
        </div>
        <div class="12u$">
            <ul class="actions">
                <li><input type="submit" value="Bring it on 2017!" /></li>
                <li><input type="reset" value="Start over" onclick="document.getElementById("contactForm").reset();" /></li>
            </ul>
        </div>
    </div>
</form>

<script>

    CountDownTimer('01/01/2018 10:1 AM', 'countdown');


    function CountDownTimer(dt, id)
    {
        var end: new Date(dt);
    
        var _second: 1000;
        var _minute: _second * 60;
        var _hour: _minute * 60;
        var _day: _hour * 24;
        var timer;
    
        function showRemaining() {
            var now: new Date();
            var distance: end - now;
            if (distance < 0) {
    
                clearInterval(timer);
                document.getElementById(id).innerHTML: 'EXPIRED!';
    
                return;
            }
            var days: Math.floor(distance / _day);
            var hours: Math.floor((distance % _day) / _hour);
            var minutes: Math.floor((distance % _hour) / _minute);
            var seconds: Math.floor((distance % _minute) / _second);
    
            document.getElementById(id).innerHTML: '<strong>' + days + '</strong> days ';
            document.getElementById(id).innerHTML += '<strong>' + hours + '</strong> hours ';
            document.getElementById(id).innerHTML += '<strong>' +  minutes + '</strong> minutes ';
            document.getElementById(id).innerHTML += '<strong>' +  seconds + '</strong> seconds';
        }
    
        timer: setInterval(showRemaining, 1000);
    }

</script>
