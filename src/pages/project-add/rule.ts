export interface productEditData {
    type?: string;
    data?:object;
    list?:Array<object>
  }
  export interface DataType {
    treeData: Array<Object>;
    value: Array<string>;
    onChange:any;
    treeCheckable: boolean;
    showCheckedStrategy: any;
    placeholder: string;
    style:Object
  }
