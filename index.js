var fs = require('fs');
var xl = require('excel4node');

//var fullpath = 'C:\\Users\\ParkJeongSu\\Desktop\\Warranty';
//var fullpath = 'D:\\03.Source\\02.EDO_source_cim_svn\\Client_ARRAY';
var fullpath = 'D:\\03.Source\\02.EDO_source_cim_svn\\Server_ARRAY';

var includeExtension = ['.cs','.java'];
var notIncludeExtension =['.class','.Designe','.designer','.csproj','.dll','.jar','.eclipse'];


var wb = new xl.Workbook();
var ws = wb.addWorksheet('FileList');
ws.cell(1, 1).string('fullpath').style(style);
ws.cell(1, 2).string('fileName').style(style);

var style = wb.createStyle({
    font: {
        color: '#000000',
        size: 12,
    }
});


function writeExcel(fullpath,fileName, i) {
    ws.cell(i, 1).string(fullpath+'\\'+fileName).style(style);
    ws.cell(i, 2).string(fileName).style(style);
}

function recursiveFind(path, list, includeExtension){
    for(var i=0;i<list.length;i++){
        var stats = fs.statSync(path+'\\'+list[i]);
        if(stats.isDirectory()){
            var newlist = fs.readdirSync(path+'\\'+list[i]);
            recursiveFind(path+'\\'+list[i],newlist,includeExtension);
        }else{
            var writeFlag =false;
            for(var q in includeExtension){
                if(list[i].indexOf(includeExtension[q]) != -1){
                    writeFlag=true;
                    break;
                }
            }
            if(writeFlag==true){
                for(var w in notIncludeExtension){
                    if(list[i].indexOf(notIncludeExtension[w]) != -1){
                        writeFlag=false;
                        break;
                    }
                }
            }

            if(writeFlag==true){
                writeExcel(path,list[i],index);
                index++;
            }
        }
    }
}

var list = fs.readdirSync(fullpath);
var index=2;
recursiveFind(fullpath,list,includeExtension);
wb.write('Excel.xlsx');

