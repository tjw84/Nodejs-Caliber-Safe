var AWS = require("aws-sdk");
var DOC = require("dynamodb-doc");

AWS.config.update({region: "us-east-1"});

var docClient = new DOC.DynamoDB();

var pfunc = function(err, data) { 
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
}



//query an item from the arms table
/*
params = {};
params.TableName = "arms";
params.Key = {
    'arm': 'MDRx',
    'cartridge': '5.56'
  };

 docClient.getItem(params, pfunc); 
*/

/*
 params = {};
params.TableName = "munitions";
params.Key = {
    'cartridge': '300 Blackout'
  };

 docClient.getItem(params, pfunc); 
*/

/*
params = {};
params.TableName = "munitions";
params.Key = {
    'arm': 'MDRx',
    'cartridge': '5.56'
  };

// docClient.getItem(params, pfunc); 
*/


// input an item into the arms table with all details
/*
var params = {};
params.TableName = "arms";
params.Item = {arm : "MDRx",
               cartridge    : "300 Blackout",
               manufacturer   : "Desert Tech",
            design_type : "MDR"};

docClient.putItem(params, pfunc);
*/

/*
var params = {};
params.TableName = "arms";
params.Item = {arm : "CZ-52",
               cartridge    : "7.62x25",
               manufacturer   : "CZ",
            design_type : "CZ-52"};

docClient.putItem(params, pfunc);
*/

// input an item (designed to be deleated in next code due to "incorrect" information)
/*
var params = {};
params.TableName = "arms";
params.Item = {arm : "MDRx",
               cartridge    : ".223 Wilde",
               manufacturer   : "Desert Tech",
            design_type : "MDR"};

docClient.putItem(params, pfunc);
*/



// Original suggested format for deletion of a single item, more tesing needed to see what is and is not functional
/*
var params = {
    Key: {
     "arm": {
       S: "MDRx"
      }, 
     "cartridge": {
       S: ".223 Wilde"
      },
      "manufacturer": {
        S: "Desert Tech"
       },
       "design_type": {
        S: "MDR"
       }
    }, 
    TableName: "arms"
   };
*/


// correct way to delete a single item
/*
var params = {};
params.TableName = "arms";
params.Key = {arm : "MDRx",
               cartridge    : ".223 Wilde"};

   docClient.deleteItem(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
     
      
   });
  */

/*
   var params = {};
   params.TableName = "munitions";
   params.Item = {cartridge    : ".223 Remington",
                  traits: "A rifle caliber primarily used in rifles such as the AR-15 platform for varmint hunting and target shooting."};
  docClient.putItem(params, pfunc);
*/
  
// error input for a nonexistant cartridge
/*
var params = {};
   params.TableName = "munitions";
   params.Item = {cartridge    : ".223 Wilde",
                  traits: "A rifle caliber primarily used in rifles such as the AR-15 platform for varmint hunting and target shooting."};
  docClient.putItem(params, pfunc);
*/

/*
var params = {};
params.TableName = "munitions";
params.Key = { cartridge    : ".223 Wilde"};

   docClient.deleteItem(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
     
      
   });
   */

   params = {};
   params.TableName = "munitions";
   params.Key = {
       'cartridge': '.223 Remington'
     };
   
    docClient.getItem(params, pfunc); 
