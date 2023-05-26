export default{
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',     
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',

        },
        {
            name:'link',
            title:'Link',
            type:'url'
        },

    ]
}