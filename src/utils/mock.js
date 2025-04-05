export const electorUser = () => {
    return { id: "1", 
        email: "elector@example.com", 
        name: "electorUser", 
        role: "elector",
        civilStatus: "Single",
        gender: "Male",
        revisors: ["John Doe"],
        username: "electorUser",
        approved: true,
        updatedAt: "2023-01-01",
        cpf: "12345678901",
        createdAt: "2023-01-01",
        dateOfBirth: "2023-01-01",
        diplome: "https://example.com/diploma.jpg",
        photo: "https://example.com/photo.jpg",
        warName: "John Doe",
        registry: "12345678901",
        telephone: "12345678901" 
    };
}

export const regularUser = () => {
    return { id: "1", email: "admin", 
        name: "regular user", 
        role: "regular",
        civilStatus: "Single",
        gender: "Male",
        username: "regularUser",
        approved: true,
        updatedAt: "2023-01-01",
        cpf: "12345678901",
        createdAt: "2023-01-01",
        dateOfBirth: "2023-01-01",
        diplome: "https://example.com/diploma.jpg",
        photo: "https://example.com/photo.jpg",
        warName: "John Doe",
        registry: "12345678901",
        email: "regularUser@example.com",
        telephone: "12345678901" 
    };
}