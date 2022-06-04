let faker = require('faker')

export default{
    user: function(){
        let firstName = faker.name.firstName();
        let lastname = faker.name.lastName();

        let data = {
            name: `${firstName} ${lastname}`,
            email: faker.internet.email(firstName),
            password: 'Test123'
        }
        return data
    }
}