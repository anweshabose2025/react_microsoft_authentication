const { app } = require('@azure/functions');

app.http('getTrainingModules', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        const modules = [
            {
                title: "Phishing Awareness",
                type: "Video",
                url: "https://cybertrainingstorage.blob.core.windows.net/trainingfiles/phishing.mp4"
            },
            {
                title: "Password Security",
                type: "PDF",
                url: "https://cybertrainingstorage.blob.core.windows.net/trainingfiles/acceptable_use_policy.pdf"
            }
        ];

        return {
            jsonBody: modules
        };
    }
});