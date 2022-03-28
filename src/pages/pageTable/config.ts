export const columns = (render:Function | void)=>{
    return[
        {
            title: '产品名称',
            // width: 100,
            dataIndex: 'productName',
            key: 'productName',
            fixed: 'left',
        },
        {
            title: '产品描述',
            // width: 100,
            dataIndex: 'describe',
            key: 'describe',
            fixed: 'left',
        },
        {
            title: '浏览地址',
            // width: 100,
            dataIndex: 'address',
            key: 'address',
            fixed: 'left',
        },
        {
            title: 'git地址',
            // width: 100,
            dataIndex: 'gitaddress',
            key: 'gitaddress',
            fixed: 'left',
        },
        {
          title: 'tags',
          // width: 100,
          dataIndex: 'tags',
          key: 'tags',
          fixed: 'left',
      },
        
        {
            title: '操作',
            width: 200,
            dataIndex: 'operation',
            key: 'operation',
            fixed: 'left',
            render
        },
    ]
};
export const tableData: Array<object> = [
    {
      productName: "健康良好话费卡",
      describe: '分公司分公司',
      address:"www.baidu.com",
      gitaddress:"https://blog.csdn.net/",
      tags: ['cool', 'teacher']
    },
    {
        productName: "健康良好话费卡",
        describe: '分公司分公司',
        address:"www.baidu.com",
        gitaddress:"https://blog.csdn.net/",
        tags: ['cool', 'teacher']
    },
    {
        productName: "健康良好话费卡",
        describe: '分公司分公司',
        address:"www.baidu.com",
        gitaddress:"https://blog.csdn.net/",
        tags: ['cool', 'teacher']
    },
  ];
  export const typeList: Array<object> = [
    {
      label: "选项一",
      value: '1',
    },
    {
      label: "选项二",
      value: '2',
    },
    {
      label: "选项三",
      value: '3',
    },
  ];
  