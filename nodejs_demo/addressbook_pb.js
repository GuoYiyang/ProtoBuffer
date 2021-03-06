// source: addressbook.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.AddressBook', null, global);
goog.exportSymbol('proto.Person', null, global);
goog.exportSymbol('proto.Person.PhoneNumber', null, global);
goog.exportSymbol('proto.Person.PhoneType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Person = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Person.repeatedFields_, null);
};
goog.inherits(proto.Person, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Person.displayName = 'proto.Person';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Person.PhoneNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Person.PhoneNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Person.PhoneNumber.displayName = 'proto.Person.PhoneNumber';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AddressBook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AddressBook.repeatedFields_, null);
};
goog.inherits(proto.AddressBook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AddressBook.displayName = 'proto.AddressBook';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Person.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Person.prototype.toObject = function(opt_includeInstance) {
  return proto.Person.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Person} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Person.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    age: jspb.Message.getFieldWithDefault(msg, 2, 0),
    u32: jspb.Message.getFieldWithDefault(msg, 3, 0),
    u64: jspb.Message.getFieldWithDefault(msg, 4, 0),
    height: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    weight: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    sex: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    name: jspb.Message.getFieldWithDefault(msg, 8, ""),
    byt: msg.getByt_asB64(),
    phoneList: jspb.Message.toObjectList(msg.getPhoneList(),
    proto.Person.PhoneNumber.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Person}
 */
proto.Person.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Person;
  return proto.Person.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Person} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Person}
 */
proto.Person.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAge(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setU32(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setU64(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHeight(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWeight(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSex(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setByt(value);
      break;
    case 10:
      var value = new proto.Person.PhoneNumber;
      reader.readMessage(value,proto.Person.PhoneNumber.deserializeBinaryFromReader);
      msg.addPhone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Person.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Person.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Person} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Person.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAge();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getU32();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getU64();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getSex();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getByt_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getPhoneList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.Person.PhoneNumber.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.Person.PhoneType = {
  MOBILE: 0,
  HOME: 1
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Person.PhoneNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.Person.PhoneNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Person.PhoneNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Person.PhoneNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
    number: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Person.PhoneNumber}
 */
proto.Person.PhoneNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Person.PhoneNumber;
  return proto.Person.PhoneNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Person.PhoneNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Person.PhoneNumber}
 */
proto.Person.PhoneNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    case 2:
      var value = /** @type {!proto.Person.PhoneType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Person.PhoneNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Person.PhoneNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Person.PhoneNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Person.PhoneNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string number = 1;
 * @return {string}
 */
proto.Person.PhoneNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Person.PhoneNumber.prototype.setNumber = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PhoneType type = 2;
 * @return {!proto.Person.PhoneType}
 */
proto.Person.PhoneNumber.prototype.getType = function() {
  return /** @type {!proto.Person.PhoneType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.Person.PhoneType} value */
proto.Person.PhoneNumber.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Person.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Person.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 age = 2;
 * @return {number}
 */
proto.Person.prototype.getAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.Person.prototype.setAge = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 u32 = 3;
 * @return {number}
 */
proto.Person.prototype.getU32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Person.prototype.setU32 = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 u64 = 4;
 * @return {number}
 */
proto.Person.prototype.getU64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.Person.prototype.setU64 = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional float height = 5;
 * @return {number}
 */
proto.Person.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.Person.prototype.setHeight = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double weight = 6;
 * @return {number}
 */
proto.Person.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.Person.prototype.setWeight = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional bool sex = 7;
 * @return {boolean}
 */
proto.Person.prototype.getSex = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.Person.prototype.setSex = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string name = 8;
 * @return {string}
 */
proto.Person.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.Person.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bytes byt = 9;
 * @return {!(string|Uint8Array)}
 */
proto.Person.prototype.getByt = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes byt = 9;
 * This is a type-conversion wrapper around `getByt()`
 * @return {string}
 */
proto.Person.prototype.getByt_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getByt()));
};


/**
 * optional bytes byt = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getByt()`
 * @return {!Uint8Array}
 */
proto.Person.prototype.getByt_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getByt()));
};


/** @param {!(string|Uint8Array)} value */
proto.Person.prototype.setByt = function(value) {
  jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * repeated PhoneNumber phone = 10;
 * @return {!Array<!proto.Person.PhoneNumber>}
 */
proto.Person.prototype.getPhoneList = function() {
  return /** @type{!Array<!proto.Person.PhoneNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Person.PhoneNumber, 10));
};


/** @param {!Array<!proto.Person.PhoneNumber>} value */
proto.Person.prototype.setPhoneList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.Person.PhoneNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Person.PhoneNumber}
 */
proto.Person.prototype.addPhone = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.Person.PhoneNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.Person.prototype.clearPhoneList = function() {
  this.setPhoneList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AddressBook.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AddressBook.prototype.toObject = function(opt_includeInstance) {
  return proto.AddressBook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AddressBook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressBook.toObject = function(includeInstance, msg) {
  var f, obj = {
    personList: jspb.Message.toObjectList(msg.getPersonList(),
    proto.Person.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AddressBook}
 */
proto.AddressBook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AddressBook;
  return proto.AddressBook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AddressBook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AddressBook}
 */
proto.AddressBook.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Person;
      reader.readMessage(value,proto.Person.deserializeBinaryFromReader);
      msg.addPerson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AddressBook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AddressBook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AddressBook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressBook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPersonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Person.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Person person = 1;
 * @return {!Array<!proto.Person>}
 */
proto.AddressBook.prototype.getPersonList = function() {
  return /** @type{!Array<!proto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Person, 1));
};


/** @param {!Array<!proto.Person>} value */
proto.AddressBook.prototype.setPersonList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Person}
 */
proto.AddressBook.prototype.addPerson = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.AddressBook.prototype.clearPersonList = function() {
  this.setPersonList([]);
};


goog.object.extend(exports, proto);
