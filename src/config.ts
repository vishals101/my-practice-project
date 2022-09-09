const display_name = "Luxe"
const project_name = "luxe"
const project_name_upercase = project_name.toUpperCase()

const projectData = {
    "project_name": display_name,
    "project_name_uc": display_name.toUpperCase(),
    "userName": process.env[`REACT_APP_${project_name_upercase}_USERNAME`],
    "password": process.env[`REACT_APP_${project_name_upercase}_PASSWORD`],
    "apiBaseURL" : "https://flite-reservations-api-dev.azurewebsites.net",
    "venueId":process.env[`REACT_APP_${project_name_upercase}_VENUEID`],
}

export { projectData }