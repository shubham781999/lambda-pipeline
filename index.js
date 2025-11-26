exports.handler = async (event) => {
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: "Hello from Lambda CI/CD Pipeline-testingggggggggggggggg",
            time: new Date().toISOString(),
        }),
    };
};

