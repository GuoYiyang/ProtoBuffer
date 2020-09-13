var basepb = require("./addressbook_pb")
var fs = require('fs');
// 创建AddressBook
var addressBook = new basepb.AddressBook();

// 创建person
person1 = addressBook.addPerson()
person1.setId(1001)
person1.setAge(22)
person1.setU32(32)
person1.setU64(64)
person1.setHeight(173.1)
person1.setWeight(65.5)
person1.setSex(false)
person1.setName("Tom")
person1.setByt("Bytes")
mobile_phone1 = person1.addPhone()
mobile_phone1.setNumber("15478974234")
mobile_phone1.setType(new basepb.Person().MOBILE)
home_phone1 = person1.addPhone()
home_phone1.setNumber("0755-24159457")
mobile_phone1.setType(new basepb.Person().HOME)

// person2
person2 = addressBook.addPerson()
person2.setId(1002)
person2.setAge(21)
person2.setU32(321)
person2.setU64(641)
person2.setHeight(165.3)
person2.setWeight(47.5)
person2.setSex(true)
person2.setName("Jackson")
person2.setByt("Bytes123")
mobile_phone2 = person2.addPhone()
mobile_phone2.setNumber("15478973123")
mobile_phone2.setType(new basepb.Person().MOBILE)
home_phone2 = person2.addPhone()
home_phone2.setNumber("0755-24154257")
home_phone2.setType(new basepb.Person().HOME)



// console.log(addressBook.getPersonList())

for (const personListElement of addressBook.getPersonList()) {
    console.log(personListElement.getName())
    for (const phoneListElement of personListElement.getPhoneList()) {
        console.log(phoneListElement)
    };
}

// var bytes = addressBook.serializeBinary();
//
//
// fs.writeFile('nodejs_msg', bytes, function(err) {
//     if(!err) {
//         console.log('done!');
//     }
// });
//
// var bytes2 = fs.readFileSync('nodejs_msg');
//
// var addressBook2 = basepb.AddressBook.deserializeBinary(bytes2);



// console.log(addressBook2.getPersonList())