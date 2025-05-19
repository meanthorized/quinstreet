export async function submitContestEntry(formData) {
    const jsonData = Object.fromEntries(formData);

    if (jsonData.phone) {
        jsonData.phone = jsonData.phone.replace(/\D/g, '');
    }

    try {
        const response = await fetch('https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });

        if (response) {
            if (response.ok) {
                const parsedResponse = await response.json();

                return parsedResponse;
            } else {
                // Ignoring errors for now
                // throw new Error(`❌ Server error: ${response.status}`);

                console.error("❌ Server error:", response.status);
            }
        }

        console.error("❌ No response from server");
    } catch (error) {
        console.error("❌ Submission failed:", error);

        // Ignoring errors for now
        // throw error;
    }
}
