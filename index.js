exports.handler = async (event) => {
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: "lambda pipeline is workinggggggggggfor prod with alias",
            time: new Date().toISOString(),
        }),
    };
};

