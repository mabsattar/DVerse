
const config = {

    slug: 'mv101', // app id, need to match this regular: `^[a-zA-Z][a-zA-Z0-9_]*$`
    name: 'myverse', // app name should NOT contain "-"
    logo: '',
    website: 'http://localhost:3000/', // you can use localhost:(port) for testing
    defaultFolderName: 'Untitled',
    description: 'This is a dataverse app build with nextjs',
    models: [
        {
            isPublicDomain: false, // default is false
            schemaName: 'post.graphql',
            encryptable: ['text', 'images', 'videos'], // strings within the schema and within the array represent fields that may be encrypted, while fields within the schema but not within the array represent fields that will definitely not be encrypted
        },
        {
            isPublicDomain: true,
            schemaName: 'profile.graphql',
        },
    ],
    ceramicUrl: null, // leave null to use dataverse test Ceramic node. Set to {Your Ceramic node Url} for mainnet, should start with "https://".


};

export default config;
