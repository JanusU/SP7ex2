//Add imports here



var personlist;
var myRequest = new Request('http://localhost:4567/api/persons');
fetch(myRequest)
    .then(function(response){
        return response.json();
    })
    .then(function(myJSON){
        personlist = JSON.stringify(myJSON);

    });

class PersonFactory {

    constructor() {
        this.persons = personlist;
    }

    getPersons = () => {
        return this.persons;
    }


}


export default new PersonFactory();