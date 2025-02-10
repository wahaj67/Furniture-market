import { defineType, defineField } from "sanity"

export const Order = defineType({
    name:'order',
    type:'document',
    title:'Order',
    fields:[
        defineField({
           name:'firstName',
           type:'string',
           title:'First Name',
        }),
        defineField({
            name:'email',
            type:'string',
            title:'Email',
        }),
        defineField({
            name:'phone',
            type:'string',
            title:'Phone Number',
        }),
        defineField({
            name:'address',
            type:'string',
            title:'Address',
        }),
        defineField({
            name:'city',
            type:'string',
            title:'City',
        }),
        defineField({
            name:'cartItems',
            title:'Cart Items',
            type:'array',
            of:[{type:'reference',to:{type:'product'}}]
        }),
        defineField({
name:'orderDate',
type:'datetime',
title:'Order Date',
        }),
        defineField({
            name:'status',
            type:'string',
            title:'Order Status',
            options:{
                list:[
                    {title:'Pending',value:'pending'},
                    {title:'Shipped',value:'shipped'},
                    {title:'Delivered',value:'delivered'},
                    
                    
                ],
                layout:'radio',
            },
            initialValue:'pending'
        })
    ]
})