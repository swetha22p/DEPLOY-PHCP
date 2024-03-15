const endpoints = {
    baseUrl: 'http://localhost:8080',
    drives: {
        getAllDrives: '/get_drives',
        getDriveDetails: '',
        getAllForms: '/get_forms',
        getAllAssistants: '/assistants',
        getAllMedicalAssistants: '',
        getAllFields: '/fields',
        saveFormData: '/create_form',
        saveDriveData: '/create_drive',
    },
    screeningAPIs: {
        getScreeningAPIs: '',
    },
    user: {
        login: '',
    }
};

export default endpoints;