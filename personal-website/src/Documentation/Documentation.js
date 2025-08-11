import './Documentation.css'

function DocPage() {
    return (
        <>
            <div id="doc-page">
                <h1>Documentation</h1>
                <h2>
                    Because an <i>About me</i> would be soooooo much more "interesting"
                </h2>
                <a href="#info-box" className="scroll-arrow">↓</a>
                <div className="scroll-space" />

                <div id="info-box" class="info-box-1">
                    <div class="item info-block-1">
                        <h1>Yin Wah Yip</h1>
                        <h2><code>birth()</code></h2>
                        <p>The <code>birth()</code> method returns 3 integers: Date, Month, Year</p>
                        <p><code>yinwah.birth()</code> returns: <br></br> </p>

                    </div>

                    <div class="item headshot-1"></div>
                    <div class="item item-1"></div>
                </div>

                <div id="info-box2" class="info-box2">
                    <div class="item info-block-2"></div>
                    <div class="item headshot-2"></div>
                    <div class="item item-2"></div>
                </div>

                <div className="scroll-space" />

            </div>





        </>

    );


}


export default DocPage;