export async function submitContestEntry(formData) {
    const jsonData = Object.fromEntries(formData);

    console.log('jsonData', jsonData);

    try {
        const response = await fetch('https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });

        console.log('response', response);

        if (response.ok) {
            const parsedResponse = await response.json();

            console.log('parsedResponse', parsedResponse);

            return parsedResponse;
        }

        throw new Error(`❌ Server error: ${response.status}`);
    } catch (error) {
        console.error("❌ Submission failed:", error);

        throw error;
    }
}
