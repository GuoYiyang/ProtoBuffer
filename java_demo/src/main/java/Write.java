import com.google.protobuf.ByteString;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

public class Write {
    public static void main(String[] args) {
        //创建addressbook对象
        Addressbook.AddressBook.Builder addressbook = Addressbook.AddressBook.newBuilder();

        //创建builder对象
        Addressbook.Person.Builder builder1 = Addressbook.Person.newBuilder();
        //通过builder对象为字段设置值
        builder1.setId(1001);
        builder1.setAge(22);
        builder1.setU32(32);
        builder1.setU64(64);
        builder1.setHeight(173.1f);
        builder1.setWeight(65.5d);
        builder1.setSex(false);
        builder1.setName("Tom");
        builder1.setByt(ByteString.copyFromUtf8("Bytes"));
        //设置phone
        builder1.addPhone(Addressbook.Person.PhoneNumber.newBuilder().setNumber("15478974234").setType(Addressbook.Person.PhoneType.MOBILE));
        builder1.addPhone(Addressbook.Person.PhoneNumber.newBuilder().setNumber("0755-24159457").setType(Addressbook.Person.PhoneType.HOME));
        //通过build转换成person对象
        Addressbook.Person person1 = builder1.build();

        //创建builder对象
        Addressbook.Person.Builder builder2 = Addressbook.Person.newBuilder();
        //通过builder对象为字段设置值
        builder2.setId(1002);
        builder2.setAge(21);
        builder2.setU32(321);
        builder2.setU64(641);
        builder2.setHeight(165.3f);
        builder2.setWeight(47.5d);
        builder2.setSex(true);
        builder2.setName("Jackson");
        builder2.setByt(ByteString.copyFromUtf8("Bytes123"));
        //设置phone
        builder2.addPhone(Addressbook.Person.PhoneNumber.newBuilder().setNumber("15478973123").setType(Addressbook.Person.PhoneType.MOBILE));
        builder2.addPhone(Addressbook.Person.PhoneNumber.newBuilder().setNumber("0755-24154257").setType(Addressbook.Person.PhoneType.HOME));
        //通过build转换成person对象
        Addressbook.Person person2 = builder2.build();


        addressbook.addPerson(person1);
        addressbook.addPerson(person2);

        try {
            addressbook.build().writeTo(new FileOutputStream("java_msg"));
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            Addressbook.AddressBook book = Addressbook.AddressBook.parseFrom(new FileInputStream("java_msg"));
            List<Addressbook.Person> personList = book.getPersonList();
            for (Addressbook.Person per : personList) {
                System.out.println(String.format("id=%d  name=%s  sex=%s", per.getId(), per.getName(), per.getSex()));
                System.out.println(per.getByt().toStringUtf8());
                List<Addressbook.Person.PhoneNumber> phoneList = per.getPhoneList();
                for (Addressbook.Person.PhoneNumber phoneNumber : phoneList) {
                    System.out.println(phoneNumber.getNumber());
                    System.out.println(phoneNumber.getType());
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
