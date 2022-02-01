const AWS = require("aws-sdk");

const { v4: uuidv4 } = require("uuid");

AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIAV4M7IQKCLSQOXC7J",
  secretAccessKey: "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",
  endpoint: "https://dynamodb.us-east-1.amazonaws.com",
});

let docClient = new AWS.DynamoDB.DocumentClient();
var table = "product";

exports.addProduct = async (params) => {
  const item = {
    TableName: table,
    Item: {
      productId: uuidv4(),
      stock: params.stock,
      productName: params.productName,
      isDiscount: params.isDiscount,
      category: {
        categoryId: params.category,
        categoryName: params.categoryName,
      },
    },
  };

  try {
    await docClient.put(item).promise();
    return {
      status: true,
      message: "Product oluşturuldu",
    };
  } catch (err) {
    return {
      status: false,
      message: err,
    };
  }
};
exports.getAllProduct = async () => {
  var items = {
    TableName: table,
  };
  try {
    const data = await docClient.scan(items).promise();
    return {
      status: true,
      data: data,
    };
  } catch (err) {
    return {
      status: false,
      message: err,
    };
  }
};

exports.getSingleProduct = async (params) => {
  var items = {
    TableName: table,
    Key: {
      productId: params.productId,
    },
  };
  try {
    const data = await docClient.get(items).promise();
    return {
      status: true,
      data: data,
    };
  } catch (err) {
    return {
      status: false,
      message: err,
    };
  }
};

exports.updateProductStock = async (params) => {
  var items = {
    TableName: table,
    Key: {
      productId: params.productId,
    },
    UpdateExpression: "set stock = :s",
    ExpressionAttributeValues: {
      ":s": params.stock,
    },
    ReturnValues: "UPDATED_NEW",
  };

  try {
    const data = await docClient.update(items).promise();
    return {
      status: true,
      data: data,
    };
  } catch (err) {
    return {
      status: false,
      message: err,
    };
  }
};
// isDiscount varsa delete işlemi gerçekleşmeyecek, hata döndürecek
exports.deleteProduct = async (params) => {
  var items = {
    TableName: table,
    Key: {
      productId: params.productId,
    },
    ConditionExpression: "isDiscount = :val",
    ExpressionAttributeValues: {
      ":val": false ,
    },
  };
  try {
    const data = await docClient.delete(items).promise();
    return {
      status: true,
      data: data,
    };
  } catch (err) {
    return {
      status: false,
      message: err,
    };
  }
};

exports.isDiscountGet = async () => {
  var items = {
    TableName: table,
    FilterExpression: "isDiscount = :s",
    ExpressionAttributeValues: {
      ":s": true,
    },
  };
  try {
    const data = await docClient.scan(items).promise();
    return {
      status: true,
      data: data,
    };
  } catch (err) {
    return {
      status: false,
      message: err,
    };
  }
};
