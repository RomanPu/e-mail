import imgUrl from '../assets/imgs/gmail-logo.jpg'

export function Home() {
    return (
        <section className="home">
            <h1>Welcome to our eMail App</h1>
            <img src={imgUrl} alt="" />
        </section>
    )
}
