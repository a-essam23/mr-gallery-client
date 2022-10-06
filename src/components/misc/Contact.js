import Contactscards from "../contactscard/Contactscards";

export default function Contact({ className, contactInfo }) {
    return (
        <section className={className} id="contact">
            <Contactscards hrefs={contactInfo} />
        </section>
    );
}
