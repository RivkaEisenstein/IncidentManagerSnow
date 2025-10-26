import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

// Create application menu category
export const incidentManagerCategory = Record({
    $id: Now.ID['incident_manager_category'],
    table: 'sys_app_category',
    data: {
        name: 'incident_manager',
        style: 'border-color: #0f62fe; background-color: #e8f4fd;',
    },
})

// Create the main application menu
export const incidentManagerMenu = ApplicationMenu({
    $id: Now.ID['incident_manager_menu'],
    title: 'Incident Manager',
    hint: 'Incident Response Management System',
    description: 'Modern interface for managing incident tickets',
    category: incidentManagerCategory,
    roles: ['admin', 'itil'],
    active: true,
    order: 100,
})

// Create incident list module (table view)
export const incidentListModule = Record({
    $id: Now.ID['incident_list_module'],
    table: 'sys_app_module',
    data: {
        title: 'All Incidents',
        application: incidentManagerMenu.$id,
        link_type: 'LIST',
        name: 'x_nices_rivka_proj_incident',
        hint: 'View all incidents in table format',
        active: true,
        order: 100,
    },
})

// Create separator for UI sections
export const uiSeparatorModule = Record({
    $id: Now.ID['ui_separator_module'],
    table: 'sys_app_module',
    data: {
        title: 'Modern Interface',
        application: incidentManagerMenu.$id,
        link_type: 'SEPARATOR',
        active: true,
        order: 200,
    },
})

// Create incident manager UI page module
export const incidentManagerUIModule = Record({
    $id: Now.ID['incident_manager_ui_module'],
    table: 'sys_app_module',
    data: {
        title: 'Incident Response Manager',
        application: incidentManagerMenu.$id,
        link_type: 'DIRECT',
        query: 'x_nices_rivka_proj_incident_manager.do',
        hint: 'Modern React-based incident management interface',
        active: true,
        order: 300,
    },
})