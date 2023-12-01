import "./Cover.css"

export default function Cover({ cover, details, id }) {
    return (
        <>
            <figure onClick={() => {
                document.getElementById(id).style.display='flex';
            }}>
                <img src={cover} />
                <figcaption><h2>Ep {details.episode_id} - {details.title}</h2></figcaption>
            </figure>

            <div id={id} className="modal" >
                <span onClick={() => {
                    document.getElementById(id).style.display='none'
                }}>&times;</span>
                <div id="divImage">
                    <img src={cover} className="imageModal"/>
                </div>
                <div id="desc">
                    <div>
                        <h1>{details.title}</h1>
                        <h2>Ep {details.episode_id}</h2>
                    </div>
                    <p>{details.release_date}</p>
                    <p>{details.producer}</p>
                    <p>{details.opening_crawl}</p>
                </div>
                
            </div>
        </>
    )
}