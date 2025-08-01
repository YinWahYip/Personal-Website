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

                <div id="info-box" className="info-box">
                    <h3>Fun Fact</h3>
                    <p>I built my first website using React and Three.js!</p>
                </div>

                <section className="origin-section">
                    <h1>Origins</h1>
                    <dl className="doc-list">
                        <dt>Name</dt>
                        <dd>Yin Wah Yip</dd>
                        <dt>Raised</dt>
                        <dd>Beijing, China</dd>
                    </dl>
                </section>
            </div>





        </>

    );


}


export default DocPage;