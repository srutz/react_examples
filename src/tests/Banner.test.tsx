// test the banner component using jest

import '@testing-library/jest-dom'
import { render, screen, waitFor} from '@testing-library/react';
import { Banner } from '../004_banner/Banner'


test("reacttest", async () => {
    render(<Banner visible text="Hello World 123"></Banner>)
    await waitFor(() => {
        const r = expect(screen.getByText("Hello World 123"))
        r.toBeInTheDocument()
    })
})
