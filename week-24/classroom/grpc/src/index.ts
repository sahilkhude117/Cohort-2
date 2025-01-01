import path from 'path';
import * as grpc from '@grpc/grpc-js';
import  { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './generated/a';
import { AddressBookServiceHandlers } from './generated/AddressBookService';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, '../a.proto'));
const personProto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const PERSONS: any[] = [];

const handlers: AddressBookServiceHandlers = {
    //call => req
    //callback => res
    AddPerson: (call, callback) => {
        console.log(call)
        let person = {
        name: call.request.name,
        age: call.request.age
        }
        PERSONS.push(person);
        callback(null, person) //null --> error ===> error first callbacks
    },
    GetPersonByName: (call, callback) => {
        const name = call.request.name;
        const person = PERSONS.find(x => x.name === name);
        callback(null, person)
    }
}


//const app = express();
const server = new grpc.Server();

server.addService(personProto.AddressBookService.service,handlers);

//app.listen(3000)
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});