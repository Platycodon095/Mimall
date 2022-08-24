//封装storage
const keyValue = 'mall'
export default{
    //存值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name,val)
        }else{
            let val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(keyValue,JSON.stringify(val))
        }
       
    },
    //取值
    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name)
            if(val) return val[key]
        }
        return this.getStorage()[key]
    },
    //获取所有数据
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(keyValue) || '{}')
    },
    //清空某一个值
    clear(key,module_name){
        let val = this.getStorage();
        if (module_name){
            if(!val[module_name]) return
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        window.sessionStorage.setItem(keyValue,JSON.stringify(val))
    }
}