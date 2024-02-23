const clients = [
    [
        {
            "id": 1,
            "name": "João da Silva",
            "type": "Pessoa Física",
            "cpf": "123.456.789-00",
            "cnpj": "",
            "address": "Rua A, 123",
            "email": "joao@example.com",
            "phone": "(12) 3456-7890",
            "status": "Ativo",
            "activityLog": "Última atividade: 2024-02-14 10:00:00"
        },
        {
            "id": 2,
            "name": "Maria Oliveira",
            "type": "Pessoa Física",
            "cpf": "987.654.321-00",
            "cnpj": "",
            "address": "Avenida B, 456",
            "email": "maria@example.com",
            "phone": "(34) 5678-9012",
            "status": "Inativo",
            "activityLog": "Última atividade: 2024-02-13 15:30:00"
        },
        {
            "id": 3,
            "name": "Empresa ABC Ltda",
            "type": "Pessoa Jurídica",
            "cpf": "",
            "cnpj": "12.345.678/0001-90",
            "address": "Rua C, 789",
            "email": "contato@empresaabc.com",
            "phone": "(56) 7890-1234",
            "status": "Ativo",
            "activityLog": "Última atividade: 2024-02-14 11:45:00"
        },
        {
            "id": 4,
            "name": "José Santos",
            "type": "Pessoa Física",
            "cpf": "543.210.987-00",
            "cnpj": "",
            "address": "Travessa D, 012",
            "email": "jose@example.com",
            "phone": "(78) 9012-3456",
            "status": "Ativo",
            "activityLog": "Última atividade: 2024-02-14 09:15:00"
        },
        {
            "id": 5,
            "name": "Empresa XYZ SA",
            "type": "Pessoa Jurídica",
            "cpf": "",
            "cnpj": "98.765.432/0001-21",
            "address": "Avenida E, 345",
            "email": "contato@empresaxyz.com",
            "phone": "(90) 1234-5678",
            "status": "Inativo",
            "activityLog": "Última atividade: 2024-02-13 14:20:00"
        },
        {
            "id": 6,
            "name": "Ana Pereira",
            "type": "Pessoa Física",
            "cpf": "876.543.210-00",
            "cnpj": "",
            "address": "Rua F, 678",
            "email": "ana@example.com",
            "phone": "(23) 4567-8901",
            "status": "Ativo",
            "activityLog": "Última atividade: 2024-02-14 08:00:00"
        },
        {
            "id": 7,
            "name": "Empresa QRS SA",
            "type": "Pessoa Jurídica",
            "cpf": "",
            "cnpj": "76.543.210/0001-34",
            "address": "Avenida G, 901",
            "email": "contato@empresaqrs.com",
            "phone": "(45) 6789-0123",
            "status": "Ativo",
            "activityLog": "Última atividade: 2024-02-14 10:30:00"
        },
        {
            "id": 8,
            "name": "Pedro Almeida",
            "type": "Pessoa Física",
            "cpf": "345.678.901-00",
            "cnpj": "",
            "address": "Rua H, 234",
            "email": "pedro@example.com",
            "phone": "(67) 8901-2345",
            "status": "Inativo",
            "activityLog": "Última atividade: 2024-02-13 16:45:00"
        },
        {
            "id": 9,
            "name": "Empresa UVW Ltda",
            "type": "Pessoa Jurídica",
            "cpf": "",
            "cnpj": "34.567.890/0001-67",
            "address": "Avenida I, 567",
            "email": "contato@empresauvw.com",
            "phone": "(78) 9012-3456",
            "status": "Ativo",
            "activityLog": "Última atividade: 2024-02-14 09:00:00"
        },
        {
            "id": 10,
            "name": "Maria da Silva",
            "type": "Pessoa Física",
            "cpf": "234.567.890-00",
            "cnpj": "",
            "address": "Rua J, 890",
            "email": "maria.silva@example.com",
            "phone": "(89) 0123-4567",
            "status": "Ativo",
            "activityLog": "Última atividade: 2024-02-14 12:00:00"
        }
    ],
    [
        {
            "id": 11,
            "name": "Luke Skywalker",
            "type": "Jedi",
            "species": "Human",
            "affiliation": "Rebel Alliance",
            "lightsaberColor": "Blue",
            "homeworld": "Tatooine",
            "email": "luke.skywalker@rebels.com",
            "status": "Active",
            "activityLog": ""
        },{
            "id": 12,
            "name": "Yoda",
            "type": "Jedi Master",
            "species": "Unknown",
            "affiliation": "Jedi Order",
            "lightsaberColor": "Green",
            "homeworld": "Unknown",
            "email": "yoda@jediorder.com",
            "status": "Active",
            "activityLog": "",
        }, {
            "id": 13,
            "name": "Obi-Wan Kenobi",
            "type": "Jedi Master",
            "species": "Human",
            "affiliation": "Jedi Order",
            "lightsaberColor": "Blue",
            "homeworld": "Stewjon",
            "email": "obi-wan.kenobi@jediorder.com",
            "status": "Inactive",
            "activityLog": ""
        }
        
    ]
]

export default clients;