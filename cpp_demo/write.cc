#include <fstream>
#include <iostream>

#include "addressbook.pb.h"

int main() {
  // 创建AddressBook Person 对象
  AddressBook addressbook;

  // 添加person1
  Person* person1 = addressbook.add_person();
  // 设置person对象属性值
  person1->set_id(1001);
  person1->set_age(22);
  person1->set_u32(32);
  person1->set_u64(64);
  person1->set_height(173.1);
  person1->set_weight(65.5);
  person1->set_sex(false);
  person1->set_name("Tom");
  person1->set_byt("Bytes");
  // 创建PhoneNumber对象
  Person::PhoneNumber* mobile_phone1 = person1->add_phone();
  Person::PhoneNumber* home_phone1 = person1->add_phone();
  // 设置PhoneNumber属性值
  mobile_phone1->set_number("15478974234");
  mobile_phone1->set_type(Person::MOBILE);
  home_phone1->set_number("0755-24159457");
  home_phone1->set_type(Person::HOME);

  // 添加person2
  Person* person2 = addressbook.add_person();
  // 设置person对象属性值
  person2->set_id(1002);
  person2->set_age(21);
  person2->set_u32(321);
  person2->set_u64(641);
  person2->set_height(165.3);
  person2->set_weight(47.5);
  person2->set_sex(true);
  person2->set_name("Jackson");
  person2->set_byt("Bytes123");
  // 创建PhoneNumber对象
  Person::PhoneNumber* mobile_phone2 = person2->add_phone();
  Person::PhoneNumber* home_phone2 = person2->add_phone();
  // 设置PhoneNumber属性值
  mobile_phone2->set_number("15478973123");
  mobile_phone2->set_type(Person::MOBILE);
  home_phone2->set_number("0755-24154257");
  home_phone2->set_type(Person::HOME);

  // 序列化为二进制流并写入文件中
  std::fstream output("cpp_msg",
                      std::ios::out | std::ios::trunc | std::ios::binary);
  if (!addressbook.SerializeToOstream(&output)) {
    std::cerr << "Failed to write address book." << std::endl;
    return -1;
  }

  return 0;
}