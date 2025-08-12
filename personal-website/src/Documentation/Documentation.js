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
                        <p><code>sleep()</code> takes in 2 parameters of type integer</p>
                        <p><code>yinwah.birth()</code> returns:<br /> <code>4/30/2003</code></p>
                    </div>
                    <div class="item headshot-2">

                    </div>
                    <div class="item item-2"></div>

                    <div class="item food-block">
                        <h1><code>.food()</code></h1>
                        <h2><em><u>Note:</u> not to be confused with</em>  <code>.eat()</code> <em>or</em> <code>.cook()</code></h2>
                        <p>
                            <code>.food()</code> takes in a string of type 'food' <br></br>
                            and returns appropriate <code>code</code>: <code>"can't stop, won't stop"</code>.
                        </p>
                        <p><em>A food enthusiast, Yin Wah is always on the hunt for his next
                            <br></br>
                            favorite meal. Ideally, something spicy and can incorporate rice.
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