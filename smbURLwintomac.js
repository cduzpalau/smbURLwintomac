#!/usr/bin/env node

if (!process.argv[2]) {
  console.log(`Usage:
    >smbURLwintomac "\\\whatever\\I\\do\\it\\doesnt\\matter"
Output:
    smb://whatever/I/do/it/doesnt/matter
NOTE: remember double quotes and delete last "\\"`)
} else {
let winURLtoChange = process.argv[2];
console.log("smb:/" + winURLtoChange.replace(/\\/g,"/"));
}
