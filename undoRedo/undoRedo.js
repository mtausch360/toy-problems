/*

    The purpose of this kata is to implement the undoRedo function.

    This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

    set(key, value) Assigns the value to the key. If the key does not exist, creates it.

    get(key) Returns the value associated to the key.

    del(key) removes the key from the object.

    undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

    redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

    After set() or del() are called, there is nothing to redo.

    All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

    Any set/del after an undo should disallow new undos.
 */



 function undoRedo(object) {

     var undoStack = [], redoStack = [];
     return {
         set: function(key, value) {
             var old = this.get(key);

             object[key] = value;

             record({ action: 'set', key: key, oldValue: old, newValue: value });

         },

         get: function(key) {
             return object[key];
         },

         del: function(key) {
           var old = this.get(key);
             delete object[ key ];
             var newVal = this.get(key);
             record({ action: 'del', key: key, oldValue: old, newValue: newVal });
         },

         undo: function() {
             if(!undoStack.length)
               throw 'Cannot undo because no history';

             var undo = undoStack.pop();

             object[ undo.key] = undo.oldValue;


             redoStack.push(undo)

         },

         redo: function(){
           if( !redoStack.length )
             throw 'cannot redo because no history';

           var redo = redoStack.pop();

           if( redo.action !== 'del' )
             object[redo.key] = redo.newValue ;
           else {
             delete object[redo.key];
           }
           undoStack.push(redo);
         }
     };

     function record(stateObject) {
         redoStack = []; //if set/del called, clean redos

         undoStack.push(stateObject);

     }
 }



// function undoRedo(obj) {
//   var commands = []
//   var index = -1
  
//   function add(cmd) {
//     commands.splice(index + 1, commands.length - index)
//     commands.push(cmd)
//     index = commands.length - 1
//   }
  
//   return {
//     get: function(key) {
//       return obj[key]
//     },
//     set: function(key, value) {
//       var prev = obj[key]
//       var cmd = {
//         exec: function() { obj[key] = value },
//         undo: function() { obj[key] = prev }
//       }
      
//       add(cmd)
//       cmd.exec()
//     },
//     del: function(key) {
//       var prev = obj[key]
//       var cmd = {
//         exec: function() { delete obj[key] },
//         undo: function() { obj[key] = prev }
//       }
      
//       add(cmd)
//       cmd.exec()
//     },
//     undo: function() {
//       var cmd = commands[index]
//       if (cmd === void 0) throw new Error()
      
//       cmd.undo()
//       index--
//     },
//     redo: function() {
//       var cmd = commands[index + 1]
//       if (cmd === void 0) throw new Error()
      
//       cmd.exec()
//       index++
//     }
//   }
// }

// var obj = undoRedo({});

// obj.set('a', 1);

// obj.set('a', 2);

// obj.undo();

// console.log('expect a to be 1, is -- ', obj.get('a'));


// obj.set('a', 1);

// obj.set('a', 2);

// obj.undo();

// console.log('expect a to be 1, is -- ', obj.get('a'));

// obj.redo();

// console.log('expect a to be 2, is -- ', obj.get('a'));
