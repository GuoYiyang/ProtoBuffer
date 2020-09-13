import addressbook_pb2

address_book = addressbook_pb2.AddressBook()

person1 = address_book.person.add()
person1.id = 1001
person1.age = 22
person1.u32 = 32
person1.u64 = 64
person1.height = 173.1
person1.weight = 65.5
person1.sex = False
person1.name = "Tom"
person1.byt = "Bytes"
mobile_phone1 = person1.phone.add()
home_phone1 = person1.phone.add()
mobile_phone1.number = "15478974234"
mobile_phone1.type = addressbook_pb2.Person.MOBILE
home_phone1.number = "0755-24159457"
home_phone1.type = addressbook_pb2.Person.HOME

person2 = address_book.person.add()
person2.id = 1002
person2.age = 21
person2.u32 = 321
person2.u64 = 641
person2.height = 165.3
person2.weight = 47.5
person2.sex = True
person2.name = "Jackson"
person2.byt = "Bytes123"
mobile_phone2 = person2.phone.add()
home_phone2 = person2.phone.add()
mobile_phone2.number = "15478973123"
mobile_phone2.type = addressbook_pb2.Person.MOBILE
home_phone2.number = "0755-24154257"
home_phone2.type = addressbook_pb2.Person.HOME

f = open("python_msg", "wb")
f.write(address_book.SerializeToString())
f.close()
