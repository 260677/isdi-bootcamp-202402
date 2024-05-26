import { validate, errors } from 'com'

async function retrieveReviews(wineId) {
    try {
        validate.text(wineId, 'wineId', true)

        const url = `${import.meta.env.VITE_API_URL}/wines/${wineId}/reviews`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            const { error, message } = await response.json()
            const constructor = errors[error]
            throw new constructor(message)
        }

        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json()
            return data
        } else {
            console.error('Unexpected response format:', await response.text())
            return []
        }
    } catch (error) {
        console.error('Failed to fetch comments:', error)
        throw new Error(`Failed to fetch comments: ${error.message}`)
    }
}

export default retrieveReviews