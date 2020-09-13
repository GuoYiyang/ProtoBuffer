#include <fstream>
#include <iostream>

#include "addressbook.pb.h"

int main(int argc, const char* argv[]) {
  // 创建AddressBook Person 对象
  AddressBook addressbook;

  // Read the existing address book.
  std::fstream input("go_msg", std::ios::in | std::ios::binary);
  if (!addressbook.ParseFromIstream(&input)) {
    std::cerr << "Failed to parse address book." << std::endl;
    return -1;
  }

  for (int j = 0; j < addressbook.person_size(); j++) {
    // 获取到Person对象
    const Person& person = addressbook.person(j);

    std::cout << "*****************************" << std::endl;

    std::cout << "id:    " << person.id() << std::endl;
    std::cout << "age:   " << person.age() << std::endl;
    std::cout << "u32:   " << person.u32() << std::endl;
    std::cout << "u64:   " << person.u64() << std::endl;
    std::cout << "height:" << person.height() << std::endl;
    std::cout << "weight:" << person.weight() << std::endl;
    std::cout << "sex:   " << person.sex() << std::endl;
    std::cout << "name:  " << person.name() << std::endl;
    std::cout << "byt:   " << person.byt() << std::endl;

    for (int i = 0; i < person.phone_size(); i++) {
      const Person::PhoneNumber& phone_number = person.phone(i);
      std::cout << "phone_type: " << phone_number.type() << std::endl;
      std::cout << "phone_number: " << phone_number.number() << std::endl;
    }

    std::cout << "*****************************" << std::endl;
  }

  return 0;
}