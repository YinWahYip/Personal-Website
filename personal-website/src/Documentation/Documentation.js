import './Documentation.css'

function DocPage() {
    return (
        <>
            <div id="doc-page">
                <h1>Documentation</h1>
                <h2>
                    Because an <i>About me</i> would be soooooo much more "interesting"
                </h2>
                <a href="#all-info" className="scroll-arrow">↓</a>
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
                        <p><code>.sleep(hours)</code> – Goes offline for <em>hours</em> to restore energy.</p>
                        <p>Returns: +10 energy, +5 focus, and immunity to small talk for 3 hours.</p>
                        <p id="quick-sleep"><strong>IMPORTANT:</strong> Requires <code>hours ≥ 8</code> to prevent catastrophic downtime<br></br>
                            (<span class="bug-label"> KNOWN BUG</span> — will try to fix next patch )</p>
                    </div>
                    <div class="item headshot-2">

                    </div>
                    <div class="item item-2"></div>

                    <div class="item food-block">
                        <h1><code>.food()</code></h1>
                        <h2><em><u>Note:</u> not to be confused with</em>  <code>.eat()</code> <em>or</em> <code>.cook()</code></h2>
                        <p>
                            <br></br>Returns the corresponding HTTP code <br></br><code>406: Not Acceptable</code> or
                            <code>202a: Accep-tional </code>

                        </p>
                        <p id="quick-meal-info"><em>* A food enthusiast, Yin Wah is always on the hunt for his next
                            <br></br>
                            favorite meal. Ideally, something spicy and pairs well with rice.
                        </em>
                        </p>
                    </div>
                    <div class="item foodshot-3"></div>
                    <div class="item item-3"></div>
                </div>


                <div className="scroll-space" />

            </div>





        </>

    );

}


export default DocPage;