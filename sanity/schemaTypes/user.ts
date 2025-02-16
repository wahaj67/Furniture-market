import { defineType, defineField } from "sanity"

export const User = defineType({
    name:'user',
    type:'document',
    title:'User',
    fields:[
        defineField({
            name:'name',
            type:'string',
            title:'Name',

        }),
        defineField({
            name:'email',
            type:'string',
            title:'Email',
            

        }),
        defineField({
            name:'password',
            title:'Password',
            type:'string',
        })
    ]
})