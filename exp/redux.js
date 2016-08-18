/**
 * Created by alex on 18.08.2016.
 */

var data =[
    {
        name: "a",
        value: "1"
    },
    {
        name: "b",
        value: "2"
    },
    {
        name: "c",
        value: "3"
    },
    {
        name: "d",
        value: "4"
    },
    {
        name: "e",
        value: "5"
    }
];


const res = data.reduce((res, item) =>{

    return {...res, [item.name]: item.value};
}, {})

console.log(res);