import "./Cover.css"

export default function Cover({ cover, desc }) {
    console.log(cover);
    return (
        <figure>
            <img src={cover} />
            <figcaption><h2>{desc}</h2></figcaption>
        </figure>
    )
}