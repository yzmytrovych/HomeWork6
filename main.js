function doubleLetter(str)
{
var resultString = "";
for (var i = 0; i< str.length - 1; i++)
{ 
    resultString += str[i];
    resultString += str[i];
}
console.log(resultString);
}
doubleLetter("Hello World");

function toCamelCase(str) {
    return str
        .split(/[-_]/)
        .map((word, index) => {
            if (index === 0) {
                return word;
            }
            return (
                word.charAt(0).toUpperCase() +
                word.slice(1)
            );
        })
        .join("");
}

var result = toCamelCase("test_rrest");
console.log(result);

function padString(str, length, symbol, toLeft) {
    var result = str;
    if(result.length<length)
    {
      var num = length - result.length;
      var temp = "";

      for(var i=0; i<num; i++)
      {
        temp += symbol;
      }

      if("toRight")
      {
        result = result + temp;
        return result;
      }      
      if("toLeft")
      {
        result = temp + result;
        return result;
      }
    }
}

var result = padString("testy", 8, "/", "toRight")
console.log(result);