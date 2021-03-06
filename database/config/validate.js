module.exports = {
    test : {
        'name' : {
            required : {val:true,messagge:'用户名不能为空'},
            minlen : {val:3,message:'用户名至少3位'}
        },
        'password' : {
            required : {val:true,message:'密码不能为空'},
            minlen : {val:4,message:'密码至少4位'}
        },
        'gender' : {
            required: {val:true,message:'性别不能为空'}
        },
        delete:'该用户已经被关联',
        unique:'用户名必须唯一'
    }
}