const publicationsData = [
    {
        id: "cocoa-decline-ondo",
        title: "FADING BROWN GOLD: A HISTORICAL AND CONTEMPORARY ANALYSIS OF THE DECLINE IN COCOA PRODUCTION IN ONDO STATE, NIGERIA",
        category: "Historical & Economic Analysis",
        year: "2024",
        excerpt: "An in-depth study exploring the socio-economic factors and historical shifts leading to the decline of cocoa production in Nigeria's primary cocoa-producing belt.",
        pdfPath: "pdfs/cocoa-decline-ondo.pdf", 
        academiaLink: "https://www.academia.edu/167091836/FADING_BROWN_GOLD_A_HISTORICAL_AND_CONTEMPORARY_ANALYSIS_OF_THE_DECLINE_IN_COCOA_PRODUCTION_IN_ONDO_STATE_NIGERIA"
    },
    {
        id: "agric-extension-framework",
        title: "A RELATIONAL FRAMEWORK FOR DISTRIBUTED AGRICULTURAL EXTENSION: LEVERAGING LARAVEL-MYSQL ARCHITECTURES FOR LONGITUDINAL FARM DATA TRACKING IN NIGERIA",
        category: "Technical Research",
        year: "2024",
        excerpt: "Researching the intersection of full-stack development and agriculture, focusing on how robust database architectures can improve extension service delivery.",
        pdfPath: "pdfs/agric-extension-framework.pdf",
        academiaLink: "https://www.academia.edu/167091118/A_RELATIONAL_FRAMEWORK_FOR_DISTRIBUTED_AGRICULTURAL_EXTENSION_LEVERAGING_LARAVEL_MYSQL_ARCHITECTURES_FOR_LONGITUDINAL_FARM_DATA_TRACKING_IN_NIGERIA"
    },
    {
        id: "ict-awareness-farmers",
        title: "THE ASSESSMENT OF THE AWARENESS AND USE OF INFORMATION AND COMMUNICATION TECHNOLOGY AMONG SMALL SCALE FARMERS",
        category: "Undergraduate Thesis",
        year: "2022",
        excerpt: "Conducted at Kogi State University, this study evaluates digital literacy and ICT adoption rates among rural smallholder farmers.",
        pdfPath: "pdfs/ict-awareness-farmers.pdf",
        academiaLink: "" // Leave empty if not available online
    }
];

// This makes the data available to your other HTML files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = publicationsData;
}
