package main

import (
	"addressbook"
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"os"
)

func main(){
	addressBook := &addressbook.AddressBook{
		Person: []*addressbook.Person{
			&addressbook.Person{
				Id: 1001,
				Age: 22,
				U32: 32,
				U64: 64,
				Height: 173.1,
				Weight: 65.5,
				Sex: false,
				Name: "Tom",
				Byt: []byte("Bytes"),
				Phone:[]*addressbook.Person_PhoneNumber{
					&addressbook.Person_PhoneNumber{
						Number: "15478974234",
						Type: addressbook.Person_MOBILE,
					},
					&addressbook.Person_PhoneNumber{
						Number: "0755-24159457",
						Type: addressbook.Person_HOME,
					},
				},
			},
			&addressbook.Person{
				Id: 1002,
				Age: 21,
				U32: 321,
				U64: 641,
				Height: 165.3,
				Weight: 47.5,
				Sex: true,
				Name: "Jackson",
				Byt: []byte("Bytes123"),
				Phone:[]*addressbook.Person_PhoneNumber{
					&addressbook.Person_PhoneNumber{
						Number: "15478973123",
						Type: addressbook.Person_MOBILE,
					},
					&addressbook.Person_PhoneNumber{
						Number: "0755-24154257",
						Type: addressbook.Person_HOME,
					},
				},
			},
		},
	}


	//marshal:  obj---[]byte
	data,err := proto.Marshal(addressBook)
	if err != nil {
		fmt.Println(err)
	}


	file, err := os.OpenFile(
		"go_msg",
		os.O_WRONLY|os.O_TRUNC|os.O_CREATE,
		0666,
	)
	if err != nil {
		log.Fatal(err)
	}
	// 写字节到文件中
	_, _ = file.Write(data)


	//unmarshal : []byte---obj
	newPersonObj := &addressbook.AddressBook{}
	err = proto.Unmarshal(data,newPersonObj)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(newPersonObj)
}