import { emailService } from "../services/email.service"

export function EmailIndex() {

    async function load() {
        const t = await emailService.query()
        console.log(t)
    }

    load()

    return <h1>Hy</h1>
}