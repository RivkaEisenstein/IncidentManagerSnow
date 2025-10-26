import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'b8b24c6e901f44529ec7b6af0b2e4247'
                    }
                    incident_list_module: {
                        table: 'sys_app_module'
                        id: '2a0e71d02c144cd7a868d5a39cf1895c'
                    }
                    incident_manager_category: {
                        table: 'sys_app_category'
                        id: 'd9214c3c689e4135a8092e28cc47e12b'
                    }
                    incident_manager_menu: {
                        table: 'sys_app_application'
                        id: 'cac390b1c21f4c958d78becc39e488d0'
                    }
                    incident_manager_ui_module: {
                        table: 'sys_app_module'
                        id: 'eb2d6f76c3644a9eafe1f159fb13003b'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: 'd151a1806b35483ba018807303f6a2db'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '558533b341e54be983135f29844cdeeb'
                    }
                    ui_separator_module: {
                        table: 'sys_app_module'
                        id: 'b7b3ecb1ba234ed1a50c0a74ef237189'
                    }
                    'x_nices_rivka_proj/main': {
                        table: 'sys_ux_lib_asset'
                        id: '023ef2ccac724c8791bf56397703e9b4'
                    }
                    'x_nices_rivka_proj/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'eb4f3e91e2ec43d8a39f0d1f4d0b2a0b'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '2122c2141d824886a8ff71ee04a0eaac'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2fe2bc56333242019f056260d6b2190e'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3205cf096861436caff4bc4e4175cf35'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '347400206b534196bd231084094bd36d'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b20a6edd45f4b36b65b7b9e3e4e6b11'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '424371fc8fcc43a4b681cb84c1ffb84a'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '425eff1392034c6a8778e17af340c5fb'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43d7e7c8bd2848c59b0cdde551f34271'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '530058fdd8de40d2bf99430e32af6be5'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '574f5bb1a84143aca02bb249af0e39da'
                        key: {
                            category: 'x_nices_rivka_proj_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '698d5986335e4f838f1234cbda6ad90b'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6b7205c17b5447ee91042bbc6c1a83b5'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7c09b98ddad341b792c672c130b51421'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d9e60f0499645cda47d16e0f94a92b0'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '819bf1e428044c9aa289a64c4bf8050b'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '878abcafb70747bca7b77d52bbe2b5a8'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92df75c66be448289c5ba2958b70f045'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '98853ede945344ef82b05b96a42e2745'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9e0597c330544b1bb85e7d85dd6e86f7'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a099e418464d4938ae9f3bb072045142'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a15f7c6874e242b5bbacc7f5bc3c04e0'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a68fb20bb46d421f8690b3cdaa31cec0'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbb2b7505a98424e8b5c01dea44d7f17'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2563b05956e47a2a47534eef7ce5fd1'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e486a4a34c5a4d6693bbe5b71e2c1f0c'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee4e0ebac9354b8aa099545eeba8632d'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f54f9f1a567a4b28b4f34486cfd038c3'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f726a7e0625a4526a725ecb74ad81dd8'
                        key: {
                            name: 'x_nices_rivka_proj_incident'
                            element: 'status'
                        }
                    },
                ]
            }
        }
    }
}
