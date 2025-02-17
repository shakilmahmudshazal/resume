import React from 'react';

function CodeIcon({ color = "#E80505", width="22", height="18", fill = "none" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 18" fill={fill}>
            <path d="M11.8881 0L13.8481 0.4L10.1081 18L8.14812 17.6L11.8881 0ZM18.5881 9L14.9981 5.41V2.58L21.4181 9L14.9981 15.41V12.58L18.5881 9ZM0.578125 9L6.99813 2.58V5.41L3.40812 9L6.99813 12.58V15.41L0.578125 9Z" fill={color} />
        </svg>
    );
}





function DesignIcon({ color = "#0000FF", width="22", height="22", fill = "none" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill}>
            <path d="M12 2L2 7v6c0 5.55 3.84 10.74 10 12 6.16-1.26 10-6.45 10-12V7l-10-5zm0 2.18l7.09 3.59L12 10.27 4.91 7.77 12 4.18zm0 15.64c-3.56-1.05-6-4.4-6-8.18v-2.4l6 3.03v7.55zm0-9.68L6.91 7.41 12 5.27l5.09 2.14L12 10.14z" fill={color} />
        </svg>
    );
}



function ProjectManagementIcon({ color = "#FF8C00", width="22", height="22", fill = "none" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill}>
            <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5l-1 4h8l-1-4h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-5-5h2v3h-2v-3zm-6 0h2v3h-2v-3zm-6 0h2v3H4v-3z" fill={color} />
        </svg>
    );
}


function LearningIcon({ color = "#32CD32", width="22", height="22", fill = "none" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill}>
            <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8v-2H3V7h18v8h-2v2h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-10 3c-1.1 0-2 .9-2 2h2v-2zm-2 10v-2h2c0 1.1-.9 2-2 2zm8 2h2v-2h-2v2zm-2-6h2v-2h-2v2zm0 2h2v2h-2v-2zm-6 2h2v-2H9v2zm4-10h2v2h-2v-2zm0 2h2v2h-2v-2zM9 5h2v2H9V5z" fill={color} />
        </svg>
    );
}


export { CodeIcon, LearningIcon, ProjectManagementIcon, DesignIcon };
