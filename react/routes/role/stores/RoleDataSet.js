export default (level)=>{
    
    return {
        autoQuery: true,
        transport:{
            read: {
                url: '/iam/v1/roles/search',
                method: 'post',
                params:{
                    page:1,
                    size:10,
                    sort:"id,desc"
                },
                data: {
                    level: level,
                },
                transformResponse:data => ({
                    list: JSON.parse(data).list,
                }),
            }
        },
        fields: [
          { name: 'name', type: 'string', label: '名称', required: true },
          { name: 'code', type: 'string', label: '编码' },
          { name: 'level', type: 'string', label: '层级'},
          { name: 'description', type: 'object', label: '来源' },
          { name: 'enabled', type: 'string', label: '状态' },
        ],
    }
}