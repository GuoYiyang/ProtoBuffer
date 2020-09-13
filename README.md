# ProtoBuffer
pb跨语言传输文件签名验证

## 结论

*   pb2语法，pb2编译
  *   C++、Java、Python二进制文件签名一致，同为A
*   pb3语法，pb3编译
  *   C++、Java、Python、Go二进制文件签名一致，同为B
*   pb2语法，pb3编译
  *   C++、Java、Python二进制文件签名一致，为A
  *   Go二进制文件签名为B

所有文件均可反序列化成功，正确获取数据Go

| 操作             | C++  | Java | Python | Go   |
| ---------------- | ---- | ---- | ------ | ---- |
| pb2语法，pb2编译 | A    | A    | A      |      |
| pb3语法，pb3编译 | B    | B    | B      | B    |
| pb2语法，pb3编译 | A    | A    | A      | B    |

### pb2语法，pb2编译
```shell
$ md5sum cpp_msg
a499b8c453b7b92fd3cf0385395598e9  cpp_msg
$ md5sum java_msg
a499b8c453b7b92fd3cf0385395598e9  java_msg
$ md5sum python_msg
a499b8c453b7b92fd3cf0385395598e9  python_msg
```

### pb3语法，pb3编译


```shell
$ md5sum cpp_msg
97b6d879da20586774dbb8e84fac0424  cpp_msg
$ md5sum java_msg
97b6d879da20586774dbb8e84fac0424  java_msg
$ md5sum python_msg
97b6d879da20586774dbb8e84fac0424  python_msg
$ md5sum go_msg
97b6d879da20586774dbb8e84fac0424  go_msg
```

### pb2语法，pb3编译

```shell
$ md5sum cpp_msg
a499b8c453b7b92fd3cf0385395598e9  cpp_msg
$ md5sum java_msg
a499b8c453b7b92fd3cf0385395598e9  java_msg
$ md5sum python_msg
a499b8c453b7b92fd3cf0385395598e9  python_msg
$ md5sum go_msg
97b6d879da20586774dbb8e84fac0424  go_msg
```
