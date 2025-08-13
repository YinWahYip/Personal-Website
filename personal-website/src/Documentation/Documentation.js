import './Documentation.css'

function DocPage() {
    return (
        <>
            <div id="doc-page">
                <h1>Documentation for<br></br> Yin Wah Yip V22.4.3</h1>
                <h2>
                    Because an <i>About me</i> would be soooooo much more "interesting"
                </h2>
                <div className="scroll-space" />

                <div id="all-info" class="all-info">
                    <div class="item info-block-1">
                        <h1><code>.birth()</code></h1>

                        <p>The <code>birth()</code> method returns 3 integers: Date, Month, Year</p>
                        <p><code>yinwah.birth()</code> returns:<br /> <code>4/30/2003</code></p>
                    </div>
                    <div class="item headshot-1"></div>
                    <div class="item item-1"></div>

                    <br></br>


                    <div class="item info-block-2">
                        <h1><code>.sleep()</code></h1>
                        <p><code>.sleep(hours)</code>  Goes offline for <em>hours</em> to restore energy.</p>
                        <p>Returns: A fresher face and fewer errors (probably).</p>
                        <p id="quick-sleep"><strong>IMPORTANT:</strong> Requires <code>hours ≥ 8</code> to prevent catastrophic downtime<br></br>
                            (<span class="bug-label"> KNOWN BUG</span> — will try to fix next patch. Caffiene is a band-aid fix )</p>
                    </div>
                    <div class="item headshot-2">

                    </div>
                    <div class="item item-2"></div>

                    <div class="item food-block">
                        <h1><code>.food()</code></h1>
                        <h2><em><u>Note:</u> not to be confused with</em>  <code>.eat()</code> <em>or</em> <code>.cook()</code></h2>
                        <p id="main-content2"><br></br>
                            Takes input of object type <code>dish</code>, returns the corresponding HTTP code <code>406: Not Acceptable</code> or
                            <code>202a: Accep-tional </code>

                        </p>
                        <p id="quick-meal-info"><em>* A food enthusiast, Yin Wah is always on the hunt for his next
                            <br></br>
                            favorite meal. Ideally, something spicy and pairs well with rice.
                        </em>
                        </p>
                    </div>
                    <div class="item foodshot-3"></div>



                    <div class="item future-patch1">
                        <h1><code>.job()</code></h1>
                        <p>
                            UPCOMING FEATURE. No promises, expect delays
                            <br />
                            Check website:
                            &nbsp; <a
                                href="https://www.linkedin.com/in/yin-wah-yip"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>/
                            <a
                                href="https://github.com/YinWahYip"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a> &nbsp;
                            for more details.
                        </p>

                    </div>
                    <div class="item future-patch2">
                        <h1><code>.timetravel()</code></h1>
                        <p>PATCHED - Breaking the Space Time Continuum
                            <br></br>led to the catastrophic pancake incident, creating brunch </p>
                        <p>(Open to suggestions to fix)</p>
                    </div>


                    <div class="item future-patch3">
                        <h1><code>.hobbies()</code></h1>
                    </div>



                </div>




                <div className="scroll-space" />

            </div>





        </>

    );

}


export default DocPage;