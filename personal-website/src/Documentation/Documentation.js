import './Documentation.css'

function DocPage() {
    return (
        <>
            <div id="doc-page">
                <h1>Documentation</h1>
                <h2>Because an <i>About me </i>
                    would be soooooo much more "interesting"</h2>

                <dl className='doc-list'>
                    <dt>Origins</dt>
                    <dd>Name</dd>
                    <li>Raised</li>

                </dl>


            </div>



        </>

    );


}
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    const startColor = { r: 40, g: 44, b: 52 };
    const endColor = { r: 90, g: 40, b: 120 };

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollPosition);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollPosition);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollPosition);

    document.documentElement.style.setProperty("--accent-color", `rgb(${r}, ${g}, ${b})`);
});

export default DocPage;