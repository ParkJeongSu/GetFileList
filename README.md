1)
git clone https://github.com/ParkJeongSu/GetFileList.git

2)
npm install

3)
input the fullpath
ex )
var fullpath = 'D:\\03.Source\\02.EDO_source_cim_svn\\Server_ARRAY';

4)
input Extensions that you want to include
ex) 
var includeExtension = ['.cs','.java'];

5)
input Extensions that you don't want to include
ex)
var notIncludeExtension =['.class','.Designe','.designer','.csproj','.dll','.jar','.eclipse'];

6)
open terminal and Enter
node ./index.js